const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const fs = require('fs');

const htmlDir = '../src/html';

// Generating multiple HTML templates config
function generateHtmlPlugins(dir) {
  const files = fs.readdirSync(path.resolve(__dirname, dir));
  const plugin = [];

  files.forEach((item) => {
    const parts = item.split('.');
    const name = parts[0];
    plugin.push(name);
  });

  return plugin;
}
const templates = generateHtmlPlugins(htmlDir);

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
  },
  node: {
     fs: "empty",
  },
  module: {
    rules: [
      // Transpiles ES6-8 into ES5
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file)
          && !/\.vue\.js/.test(file)
        ),
      },
      {
        // images and fonts
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src',
          },
        },
      },
    ],
  },
  plugins: [
    // HTML templates
    ...templates.map((template) => {
      if (template === 'legacy') {
        return new HTMLWebpackPlugin({
          filename: `html/${template}.html`,
          inject: false, // no link css
          template: path.resolve(__dirname, `../src/html/${template}.html`),
        });
      }
      return new HTMLWebpackPlugin({
        filename: `html/${template}.html`,
        xhtml: true, // selfclosed tag to link css
        template: path.resolve(__dirname, `../src/html/${template}.html`),
      });
    }),
    new CopyPlugin([
      { from: 'src/test.txt', to: 'test.txt' },
    ]),
  ],
};
