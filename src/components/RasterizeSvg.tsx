/* @jsx jsx */
import React, { FC, useRef, ReactElement, useState, useEffect, useMemo } from 'react';
import { render } from 'react-dom';
import { jsx } from '@emotion/core';

const RasterizeSvg: FC<{ children: ReactElement }> = ({ children, ...props }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [img] = useState(() => {
    const node = document.createElement('img');

    node.onload = (): void => {
      if (canvas.current) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        canvas.current.getContext('2d')!.drawImage(img, 0, 0);
        URL.revokeObjectURL(img.src);
      }
    };

    return node;
  });
  const [svgNode, setSvgNode] = useState<SVGSVGElement | null>(null);
  const [width, height] = useMemo(() => {
    if (svgNode === null) {
      return [512, 512];
    }
    return [svgNode.width.baseVal.value, svgNode.height.baseVal.value];
  }, [svgNode]);
  const image64 = useMemo(() => {
    if (svgNode === null) {
      return null;
    }
    const serialized = new XMLSerializer().serializeToString(svgNode);
    const blob = new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' });
    return URL.createObjectURL(blob);
  }, [svgNode]);

  useEffect(() => {
    const fakeRoot = document.createElement('div');
    fakeRoot.style.position = 'absolute';
    fakeRoot.style.opacity = '0';
    fakeRoot.style.zIndex = '-1';
    render(children, fakeRoot, async () => {
      const svg = fakeRoot.querySelector('svg');
      if (svg == null) {
        return;
      }
      for (const useTag of svg.getElementsByTagName('use')) {
        const url = useTag.getAttribute('xlink:href') ?? useTag.href.baseVal;
        const query = url.includes('#') ? url.substring(url.indexOf('#')) : null;
        const svgText = await (await fetch(url)).text();
        const svgParsed = new DOMParser().parseFromString(svgText, 'image/svg+xml');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const element = query ? svgParsed.querySelector(query)! : svgParsed.documentElement;
        const replacement = document.createElement('g');
        for (const { name, value } of element.attributes) {
          replacement.setAttribute(name, value);
        }
        for (const { name, value } of useTag.attributes) {
          replacement.setAttribute(name, value);
        }
        replacement.append(...element.childNodes);

        useTag.outerHTML = replacement.outerHTML;
      }
      const toVisit: Node[] = [svg];
      let current = undefined;
      while ((current = toVisit.shift()) !== undefined) {
        if (current instanceof HTMLElement || current instanceof SVGElement) {
          for (const sheet of current.ownerDocument.styleSheets) {
            try {
              for (const rule of sheet.rules) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const ruleAny = rule as any;
                if (!current.matches(ruleAny.selectorText)) {
                  continue;
                }
                for (const key of Object.values(ruleAny.style) as string[]) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (current.style as any)[key] = ruleAny.style[key];
                }
              }
            } catch {
              /* do nothing */
            }
          }
        }
        toVisit.push(...current.childNodes);
      }
      setSvgNode(svg);
    });
  }, []);

  useEffect(() => {
    if (canvas.current !== null && image64 !== null) {
      img.src = image64;
    }
  }, [canvas, image64]);

  return (
    svgNode && <canvas ref={canvas} width={width} height={height} {...props} />
  );
};

export default React.memo(RasterizeSvg);
