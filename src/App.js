/* import React from 'react';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return <AppNavigation />;
};

export default App;
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Importa la tienda configurada desde el archivo store.js
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
