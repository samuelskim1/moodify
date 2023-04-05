import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import SplashPage from './components/SplashPage';
import TrackIndex from './components/Track/TrackIndex';

function App() {
  return (
    <>
      
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage/>
        </Route>
        <Route path='/'>
          <SplashPage/>
        </Route>
        <Route path='/tracks'>
          <TrackIndex/>
        </Route>
      </Switch>
    </>
  );
}

export default App;