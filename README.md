# homepage

데일리 백준 홈페이지입니다.
[여기](https://daily-boj.github.io/homepage)를 눌러 접속할 수 있습니다.

## Development

### Prerequisites

- 최신 [Rustup](https://rustup.rs/)
- [wasm-pack](https://github.com/rustwasm/wasm-pack)
- [just](https://github.com/casey/just)

### Build Page

다음 명령어를 실행하세요.

```sh
just build-page
```

### Dev Server

원하는 정적 파일 서버 프로그램으로 dist 폴더를 여세요.
wasm은 로컬 파일로 열었을 때 정상적으로 작동하지 않을 수 있습니다.
