module.exports = {
      module: {
        rules: [
          {
            test: /\.(woff|ttf|woff2)$/,
            loader:"url-loader",
            exclude : /node_modules/,
            options : {
                publicPath : "./public/styles/vazir_font2/Farsi_Digits/fonts/",
                name : "../fonts/ttf/[name].[ext]",
            }
          },
        ],
      },
    };