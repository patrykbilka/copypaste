import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import appState from './store';

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(
  <Provider store={appState.store}>
    <PersistGate persistor={appState.persistor}>
      {/*<MuiThemeProvider>*/}
        <Index/>
      {/*</MuiThemeProvider>*/}
    </PersistGate>
  </Provider>,
document.getElementById("root"));
