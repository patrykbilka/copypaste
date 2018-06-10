import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import css from './app.css'
import AuthWrapper from './hoc/AuthWrapper';
import TopBar from './common/topbar/TopBar';
import BottomNavigation from './common/bottomnavigation/BottomNavigation';
import Container from './common/container/Container';
import Register from './views/register/Register';
import Login from './views/login/Login';
import Storage from './views/account/storage/Storage';
import NewItem from './views/account/storage/NewItem';
import DesktopNavigation from './common/desktopnavigation/DesktopNavigation';

const AppWrapper = styled.div`
  font-family: Roboto;
  margin: 0;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <div>
          <TopBar />
          <Container container spacing={24}>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route exact path="/storage" component={AuthWrapper(Storage)} />
              <Route exact path="/storage/new" component={AuthWrapper(NewItem)} />
            </Switch>
          </Container>
          <BottomNavigation />
        </div>
      </Router>
    </AppWrapper>
  )
};

export default App;