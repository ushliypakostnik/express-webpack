require('dotenv').config();

const env = process.env.NODE_ENV;

const common = {
  PORT: process.env.PORT || 8080,
  DIST_DIR: __dirname,
  API_URL: 'http://127.0.0.1:8080',
  STATIC_SERVE: true,
  CORS_ENABLED: true,
};

const development = {
  ...common,
};

const production = {
  ...common,
};

const config = {
  development,
  production,
};

export default config[env];
