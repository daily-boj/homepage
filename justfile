build-page:
    wasm-pack build frontend --no-typescript --target web
    rm -rf dist/
    mkdir dist/
    cp -r frontend/pkg/** dist/
    cp -r frontend/public/** dist/
    cp frontend/public/index.html dist/404.html