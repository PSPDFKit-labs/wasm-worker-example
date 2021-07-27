# wasm in a web worker

## Getting Started

### Prerequisites 

- [Docker](https://docs.docker.com/desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Building and running the example

Go to the project root and then do the following:

```shell script
npm install

docker-compose run emscripten emcc wasm/sub.cpp -s ENVIRONMENT=worker -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_sub']" -o wasm/sub.js
docker-compose run emscripten emcc wasm/add.cpp -s ENVIRONMENT=worker -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_add']" -o wasm/add.js

npm run build
```

Then run `npx serve` and go to http://localhost:5000/





