const createMegaloTarget = require( '@megalo/target' )
const compiler = require( '@megalo/template-compiler' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' )
const pages = require('./entry')
const _ = require( './util' );

const CSS_EXT = {
  wechat: 'wxss',
  alipay: 'acss',
  swan: 'css',
};

function createBaseConfig( platform = 'wechat' ) {
  const cssExt = CSS_EXT[platform]
  
  return {
    mode: 'development',

    target: createMegaloTarget( {
      compiler: Object.assign( compiler, { } ),
      platform,
      htmlParse: {
        templateName: 'octoParse',
        src: _.resolve(`./node_modules/octoparse/lib/platform/${platform}`)
      }
    } ),

    entry: {
      'app': _.resolve( 'src/index.js' ),
      ...pages
    },

    output: {
      path: _.resolve( `dist-${platform}/` ),
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[id].js'
    },

    devServer: {
      // hot: true,
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]|megalo[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },

    // devtool: 'cheap-source-map',
    devtool: false,

    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        'vue': 'megalo',
        '@': _.resolve('src')
      },
    },

    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                a: 1,
                cacheIdentifier: 'x'
              }
            }
          ]
        },

        {
          test: /\.js$/,
          use: 'babel-loader'
        },

        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },

        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        }
      ]
    },

    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin( {
        filename: `./static/css/[name].${cssExt}`,
      } ),
    ]
  }
}

module.exports = createBaseConfig