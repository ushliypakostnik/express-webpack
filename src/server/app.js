import path from 'path';
import express from 'express';
import cors from 'cors';

import config from '../config';

import router from './routes/index';

const app = express();
const HTML_FILE = path.join(config.DIST_DIR, 'app.html');

if (config.CORS_ENABLED) { app.use(cors()); }

if (config.STATIC_SERVE) { app.use(express.static(config.DIST_DIR)); }

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.use(router);

export default app;
