const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: [
          {
            loader: "worker-loader",
            options: {
              inline: true
            }
          },
          {
            loader: "babel-loader"
          }
        ],
        include: path.resolve(__dirname, "src/components")
      },
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
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "url-loader",
        options: {
          outputPath: "assets/",
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(woff(2)?)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
        options: {
          outputPath: "fonts",
          name: "[name].[ext]"
        }
      },
      {
        // Ignore fonts
        test: /\.(eot|ttf)(\?.*$|$)/,
        use: ["raw-loader", "ignore-loader"]
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
