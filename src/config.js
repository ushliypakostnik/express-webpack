require('dotenv').config();

const env = process.env.NODE_ENV;

const common = {
  PORT: process.env.PORT || 8080,
  API_URL: process.env.MEDIA_URL || 'http://127.0.0.1:8080',
};

const development = {
  ...common,
  DIST_DIR: __dirname,
  STATIC_SERVE: true,
  CORS_ENABLED: true,
};

const production = {
  ...common,
  DIST_DIR: process.env.DIST_DIR || __dirname,
  STATIC_SERVE: process.env.STATIC_SERVE || true,
  CORS_ENABLED: true,
};

const config = {
  development,
  production,
};

export default config[env];
