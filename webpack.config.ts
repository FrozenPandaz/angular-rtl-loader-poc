import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader"
          },
          {
            loader: path.resolve(__dirname, "./loader.js"),
            options: {
              /* ... */
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".scss", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js"
  },
  plugins: []
};

export default config;
