import path from 'path';
import axios from 'axios';

import Logger from './logger';

import config from '../config';

const logger = new Logger(path.basename(__filename, '.js'));

const Form = (() => {
  const NAME = 'Form'; // eslint-disable-line no-unused-vars

  // UI

  const fields = {};

  const controls = document.getElementsByClassName('form__control');
  const controlsarr = Object.keys(controls).map(k => controls[k]);

  const selects = document.getElementsByClassName('form__select');
  const selectsarr = Object.keys(selects).map(k => selects[k]);

  const mores = document.getElementsByClassName('morelink');
  const moresarr = Object.keys(mores).map(k => mores[k]);

  const input = document.getElementById('Текст объявления');

  const submit = document.getElementById('submit');

  // API

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

  const postData = (data) => {
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

  const postJSON = (data) => {
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

  const ready = () => {
    // Селекты
    selectsarr.forEach((element) => {
      element.addEventListener('change', () => {
        logger.info('select');
        const value = element.options[element.selectedIndex].text;
        fields[element.getAttribute('for')].value = value;
        element.closest('.form__group').classList.add('form__group--focused');
      });
    });

    // Больше
    moresarr.forEach((element) => {
      element.addEventListener('click', (e) => {
        logger.info('click');
        e.preventDefault();
        const block = document.getElementById(element.getAttribute('for'));
        block.classList.add('open');
        element.closest('.section__morelink').classList.add('close');
      });
    });

    // Анимационные лейблы
    controlsarr.forEach((element) => {
      element.addEventListener('focus', () => {
        logger.info('focus');
        element.closest('.form__group').classList.add('form__group--focused');
      });

      element.addEventListener('blur', () => {
        logger.info('blur');
        if (element.value === '') {
          element.closest('.form__group').classList.remove('form__group--focused');
        }
      });
    });

    // Текст объявления
    const c = input.value.length;
    const v = input.nextElementSibling.children[0];
    v.innerHTML = c;
    input.oninput = (e) => {
      logger.info('input !!!');
      const counter = input.value.length;
      if (counter > 999) {
        e.preventDefault();
      } else {
        const value = input.nextElementSibling.children[0];
        value.innerHTML = counter;
      }
    };

    // Сабмит формы
    submit.onclick = (e) => {
      logger.info('submit !!!');
      e.preventDefault();

      const data = {};
      Object.keys(fields).forEach((key) => {
        if (fields[key]) {
          const { id, value } = fields[key]; // eslint-disable-line no-shadow
          data[id] = value;
        }
      });

      postData(data);
      postJSON(data);
    };
  };

  const init = () => {
    logger.info('init');

    // Получение данных
    getData()
      .then((response) => {
        Object.keys(response).forEach((key) => {
          fields[key] = document.getElementById(key);
          if (fields[key]) {
            if (response[key]) {
              fields[key].value = response[key];
              fields[key].closest('.form__group').classList.add('form__group--focused');
            }
          }
        });
        ready();
      });
  };

  return {
    init,
  };
})();

export default Form;
