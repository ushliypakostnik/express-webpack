import path from 'path';
import axios from 'axios';

import Logger from './logger';

import config from '../config';

const logger = new Logger(path.basename(__filename, '.js'));

const Form = (() => {
  const NAME = 'Form'; // eslint-disable-line no-unused-vars

  const field1 = document.getElementById('field1');
  const field2 = document.getElementById('field2');

  const getData = () => {
    logger.info('request data');
    return axios.get(`${config.API_URL}/gettest`)
      .then((response) => {
        logger.info('request data success');
        return response.data;
      })
      .catch((err) => {
        logger.info('request data failed');
        return err.message;
      });
  };

  const init = () => {
    logger.info('init');

    getData() // eslint-disable-line no-unused-vars
      .then((response) => {
        field1.value = response.field1;
        field2.value = response.field2;
      });
  };

  return {
    init,
  };
})();

export default Form;
