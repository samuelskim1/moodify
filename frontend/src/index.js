import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import {fetchAllTracks, fetchTrack} from './store/track'
import { restoreCSRF } from './store/csrf';
import Search from './components/SearchShow/SearchShowPage';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.fetchAllTracks = fetchAllTracks;
  window.fetchTrack = fetchTrack;
}

const router = createBrowserRouter([
  { path: "/search", Component: Search},
  { path: "*", Component: Root}
])

function dataApi() {
  return <RouterProvider router={router}/>;
};


function Root() {
  return (
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}


const renderApp = () => {
  ReactDOM.render(
    // <React.StrictMode>
      <Root />,
    // </React.StrictMode>,
    document.getElementById('root')
  )
}

// if (sessionStorage.getItem('X-CSRF-Token') === null) {
//   restoreCSRF();
// }


if (
  sessionStorage.getItem('X-CSRF-Token') === null ||
  sessionStorage.getItem('currentUser') === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApp);
} else {
  renderApp();
}

