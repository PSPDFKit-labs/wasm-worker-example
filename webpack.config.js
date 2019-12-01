module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    publicPath: "dist/",
    globalObject: 'typeof self !== "object" ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.worker\.js/,
        use: {
          loader: "worker-loader",
          options: { fallback: true }
        }
      },
      {
        test: /\.wasm$/,
        type:
          "javascript/auto" /** this disabled webpacks default handling of wasm */,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "wasm/[name].[hash].[ext]",
              publicPath: "/dist/"
            }
          }
        ]
      }
    ]
  }
};
