const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //mode
  mode: "production",
  //entry
  entry: {
    index: path.resolve(__dirname, "./src/js/index.js"),
    about: path.resolve(__dirname, "./src/js/about.js"),
  },
  //output
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  //devserver
  //module || loaders
  //plagins
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Contires | Home",
      template: "./src/indexTemp.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "About",
      template: "./src/pages/aboutTemp.html",
      filename: "about.html",
      chunks: ["about"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 5500,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
