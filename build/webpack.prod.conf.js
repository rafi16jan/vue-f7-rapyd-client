'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxPlugin = require('workbox-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const parser = require('postcss-safe-parser')

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    },
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      // new BabelMinifyWebpackPlugin({
      //   keepFnName: true,
      //   keepClassName: true,
      //   removeConsole: true
      // }, {
      //   mangle: {
      //     topLevel: true
      //   },
      //   comments: false,
      //   sourceMap: false,
      // }),
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            warnings: false
          }
        },
        sourceMap: config.build.productionSourceMap,
        parallel: true,
        cache: true
      })
    ]
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    // new OptimizeCSSPlugin({
    //   cssProcessorOptions: config.build.productionSourceMap
    //     ? {
    //       parser,
    //       discardComments: {
    //         removeAll: true
    //       },
    //       map: {
    //         inline: false
    //       }
    //     } : { parser }
    // }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new WebpackPwaManifest({
      name: "Framework7 Vue Rapyd Client",
      short_name: "F7 Vue",
      description: "Rapyd Client with Framework7 and Vue",
      start_url: "/?utm_source=pwa",
      icons: [{
        src: path.resolve('./src/assets/icon512.png'),
        "sizes": [144, 192, 512]
      }],
      theme_color: "#3f51b5",
      background_color: "#ffffff",
      display: "standalone"
    }),
    new CompressionPlugin({
      test: /\.(js|css)/,
      cache: true
    }),
    // keep module.id stable when vendor modules does not change
    // new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks (module) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'app',
    //   async: 'vendor-async',
    //   children: true,
    //   minChunks: 3
    // }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new WorkboxPlugin.GenerateSW({
      importWorkboxFrom: 'local',
      clientsClaim: true,
      skipWaiting: true,
      include: [
        /\.html$/,
        /\.js$/,
        /\.css$/,
        /\.woff$/,
        /\.woff2$/,
        /\.json$/,
        /\.webmanifest$/,
        /\.gz$/
      ]
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../report.html'
    })
  ]

})

module.exports = webpackConfig
