import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import SplashPage from './components/SplashPage/SplashPage';
import TrackIndex from './components/Track/TrackIndex';
import TrackShow from './components/Track/TrackShow';
import AlbumShow from './components/Album/AlbumShow';
import AlbumIndex from './components/Album/AlbumIndex';
import PlaylistShow from './components/Playlist/PlaylistShow';
import PlayBar from './components/PlayBar/PlayBar';
import Search from './components/SearchShow/SearchShowPage';
import Modal from './components/Modal/Modal'

function App() {
  return (
    <>
      <Modal />
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
        <Route exact path='/albums'>
          <AlbumIndex />
        </Route>
        <Route path='/albums/:albumId'>
          <AlbumShow />
        </Route>
        <Route exact path='/'>
          <SplashPage/>
        </Route>
        <Route path='/playlists/:playlistId'>
          <PlaylistShow/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
      </Switch>
      <PlayBar/>
    </>
  );
}

export default App;