const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/core/"),
      "@scss": path.resolve(__dirname, "src/scss/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "calculator",
      template: "./public/index.html",
    }),
  ],
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
