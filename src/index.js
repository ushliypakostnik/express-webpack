import Favicon from './images/favicon.jpg'; // eslint-disable-line no-unused-vars

import './styles/_stylebase.scss';

import Form from './js/form';

Form.init();

if (module.hot) {
  module.hot.accept();
}
