import path from 'path';

import Logger from './logger';

import api from './api';

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

  const ready = () => {
    // Selects
    selectsarr.forEach((element) => {
      element.addEventListener('change', () => {
        logger.info('select');
        const value = element.options[element.selectedIndex].text;
        fields[element.getAttribute('for')].value = value;
        element.closest('.form__group').classList.add('form__group--focused');
      });
    });

    // More link and section
    moresarr.forEach((element) => {
      element.addEventListener('click', (e) => {
        logger.info('click');
        e.preventDefault();
        const block = document.getElementById(element.getAttribute('for'));
        block.classList.add('open');
        element.closest('.section__morelink').classList.add('close');
      });
    });

    // Animationed labels
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

    // Text of post
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

    // Form submit
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

      api.postData(data);
      api.postJSON(data);
    };
  };

  const init = () => {
    logger.info('init');

    // Get data from txt file
    api.getData()
      .then((response) => {
        Object.keys(response).forEach((key) => {
          fields[key] = document.getElementById(key);
          if (fields[key] && response[key]) {
            fields[key].value = response[key];
            fields[key].closest('.form__group').classList.add('form__group--focused');
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
