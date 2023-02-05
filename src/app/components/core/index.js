import React from 'react';
import { Provider } from 'react-redux';

import store from 'app/store';
import { AppRouter } from 'app/routes';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  );

export default App;
