import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import SplashPage from './components/SplashPage/SplashPage';
import TrackIndex from './components/Track/TrackIndex';
import TrackShow from './components/Track/TrackShow';

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
        <Route exact path='/tracks'>
          <TrackIndex/>
        </Route>
        <Route path='/tracks/:trackId'>
          <TrackShow/>
        </Route>
        <Route exact path='/'>
          <SplashPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;