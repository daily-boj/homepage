build-page mode='dev':
    #!/bin/bash
    echo [debug] mode={{mode}}
    if [ '{{mode}}' == 'deploy' ]; then \
        export PUBLIC_URL="https://daily-boj.github.io/homepage"; \
        wasm-pack build --no-typescript --target web --release -- --features deploy; \
    else \
        export PUBLIC_URL="http://localhost:5000"; \
        wasm-pack build --no-typescript --target web --dev; \
    fi
    echo [debug] public url=$PUBLIC_URL
    rm -rf dist/
    mkdir dist/
    cp -r pkg/** dist/
    cp -r public/** dist/
    envsubst '$PUBLIC_URL' < public/index.html > dist/index.html
    envsubst '$PUBLIC_URL' < public/index.html > dist/404.html
