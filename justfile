build-page deploy='dev':
    #!/usr/bin/env sh
    if [ {{deploy}} == 'deploy' ]; then \
        export PUBLIC_URL="https://daily-boj.github.io/homepage"; \
        wasm-pack build frontend --no-typescript --target web --release -- --features deploy; \
    else \
        export PUBLIC_URL="http://localhost:5000"; \
        wasm-pack build frontend --no-typescript --target web --dev; \
    fi
    rm -rf dist/
    mkdir dist/
    cp -r frontend/pkg/** dist/
    cp -r frontend/public/** dist/
    envsubst '$PUBLIC_URL' < frontend/public/index.html > dist/index.html
    envsubst '$PUBLIC_URL' < frontend/public/index.html > dist/404.html
