import path from 'path';
import axios from 'axios';

import Logger from './logger';

import config from '../config';

const logger = new Logger(path.basename(__filename, '.js'));

// API

export default ({

  getData: () => {
    logger.info('request data');
    return axios.get(`${config.API_URL}/get`)
      .then((response) => {
        logger.info('request data success');
        return response.data;
      })
      .catch((err) => {
        logger.info('request data failed');
        return err.message;
      });
  },

  postData: (data) => {
    logger.info('post data');
    return axios.post(`${config.API_URL}/post`, { data })
      .then((response) => {
        logger.info('post data success');
        return response.data;
      })
      .catch((err) => {
        logger.info('post data failed');
        return err.message;
      });
  },

  postJSON: (data) => {
    logger.info('post json');
    return axios.post(`${config.API_URL}/test`, { data })
      .then((response) => {
        logger.info('post json success');
        return response.data;
      })
      .catch((err) => {
        logger.info('post json failed');
        return err.message;
      });
  },
});
