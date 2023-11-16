import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginFormPage/>} />
        <Route path="/signup" element={<SignupFormPage />} />
        <Route exact path='/tracks' element={<TrackIndex />} />
        <Route path='/tracks/:trackId' element ={<TrackShow/>} />
        <Route exact path='/albums' element={<AlbumIndex />} />
        <Route path='/albums/:albumId' element={<AlbumShow />} />
        <Route exact path='/' element={<SplashPage />} />
        <Route path='/playlists/:playlistId' element={<PlaylistShow />}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      <PlayBar/>
    </>
  );
}

export default App;