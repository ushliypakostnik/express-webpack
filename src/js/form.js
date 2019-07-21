import path from 'path';
import axios from 'axios';

import Logger from './logger';

import config from '../config';

const logger = new Logger(path.basename(__filename, '.js'));

const Form = (() => {
  const NAME = 'Form'; // eslint-disable-line no-unused-vars

  const submit = document.getElementById('submit');
  const fields = {};

  const getData = () => {
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
  };

  const postData = (data) => { // eslint-disable-line no-unused-vars
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
  };

  const postJSON = (data) => { // eslint-disable-line no-unused-vars
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
  };

  const init = () => {
    logger.info('init');

    getData() // eslint-disable-line no-unused-vars
      .then((response) => {
        Object.keys(response).forEach((key) => {
          fields[key] = document.getElementById(key);
          fields[key].value = response[key];
        });
      });

    submit.onclick = (e) => {
      e.preventDefault();
      logger.info('submit !!!');

      const data = {};
      Object.keys(fields).forEach((key) => {
        const { id, value } = fields[key];
        data[id] = value;
      });

      postData(data);
      postJSON(data);
    };
  };

  return {
    init,
  };
})();

export default Form;
