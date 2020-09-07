# wasm in a web worker

## Getting Started

### Install Emscripten

```shell script
# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes ~/.emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
```

Go to the project root and then do the following:

```shell script
npm install

cd wasm

emcc add.cpp -s ENVIRONMENT=worker -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_add']" -o add.js
cd ..

npm run build
```

Then run `npx serve` and go to http://localhost:5000/





