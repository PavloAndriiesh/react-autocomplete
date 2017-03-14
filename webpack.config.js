const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const TARGET = process.env.NODE_ENV;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  localBuild: path.join(__dirname, 'local_build')
};

const common = {
  entry: [
    PATHS.app
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=[path][name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(require('./package.json').version)
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};

const dev = {
  output: {
    path: PATHS.localBuild,
    publicPath: '/local_build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-0", "stage-1", "stage-2", "react", "react-hmre"]
        }
      }
    ]
  },
  devServer: {
    contentBase: PATHS.localBuild,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

const prod = {
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  ],
};

if (TARGET === 'development' || !TARGET) {
  module.exports = merge(common, dev);
}

if (TARGET === 'production') {
  module.exports = merge(common, prod);
}
