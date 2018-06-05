import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import TopBar from './common/TopBar';

const AppWrapper = styled.div`
  font-family: Roboto;
`;

function App() {
  return (
    <AppWrapper>
      <TopBar />
        {/* <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} /> */}
    </AppWrapper>
  )
};

export default App;