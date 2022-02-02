module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/style.scss";`,
      },
    },
  },
};


// module.exports = {
//   publicPath: '/',
//   css: {
//     sourceMap: true,
//     loaderOptions: {
//       sass: {
//         data:`@import "~@/assets/sass/style.scss";`
//       }
//     }
//   },
//   configureWebpack: {
//     module: {
//       rules: [{
//         test: /\.(ttf|otf|eot|woff|woff2)$/,
//         use: {
//           loader: "file-loader",
//           options: {
//             name: "./src/assets/font.[ext]",
//           },
//         },
//       }]
//     }
//   }
// }
