import path from 'path';
import express from 'express';
import webpack from 'webpack';
import cors from 'cors';
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import WebpackConfig from '../../webpack/webpack.dev.config';
import config from '../config';

import router from './routes/index';

const app = express();
const HTML_FILE = path.join(config.DIST_DIR, 'app.html');
const compiler = webpack(WebpackConfig);

if (config.CORS_ENABLED) { app.use(cors()); }

if (config.STATIC_SERVE) { app.use(express.static(config.DIST_DIR)); }

app.use(webpackDevMiddleware(compiler, {
  publicPath: WebpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    return res.end();
  });
});

app.use(router);

app.listen(config.PORT, () => {
  console.log(`App listening to ${config.PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
