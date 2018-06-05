import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './components/App';
import appState from './store';

ReactDOM.render(
  <Provider store={appState.store}>
    <PersistGate persistor={appState.persistor}>
      <App />
    </PersistGate>
  </Provider>,
document.getElementById("root"));
