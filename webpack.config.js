const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|build|test)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/"
        }
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/"
        }
      }
    ]
  },
  externals: {
    react: {
      commonjs2: "react"
    },
    "react-dom": {
      commonjs2: "react-dom"
    }
  }
};
