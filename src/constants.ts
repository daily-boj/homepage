export const PUBLIC_URL = process.env.PUBLIC_URL;

export function asset(path: string): string {
  if (path[0] === '/') {
    return PUBLIC_URL + path;
  } else {
    return PUBLIC_URL + '/' + path;
  }
}