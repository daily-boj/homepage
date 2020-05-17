build:
    wasm-pack build frontend --no-typescript --target web

ready-for-deploy: build
    rm -rf dist/
    mkdir dist/
    cp -r frontend/pkg/** dist/
    cp -r frontend/public/** dist/