import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './mainStore';
import Page from './components/Page/Page';

import * as serviceWorker from './serviceWorker';
import './index.css';

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();