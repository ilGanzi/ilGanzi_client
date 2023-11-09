import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SettingPage from './pages/setting/setting';
import setScreenHeight from './setScreenHeight';
import LoginInf from './pages/logininf/logininf';
import MainPage from './pages/main/main';
import OnBorn from './pages/onborn/onborn';
import Intro from './pages/intro/intro';
import Login from './pages/login/login';
import { Provider as ReduxProvider } from 'react-redux';
import store from './utils/store/index';
import Signup from './pages/signup/signup';
import FindID from './pages/FindID/findID';
import FindPW from './pages/FindPW/findPW';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import axios from 'axios';

export let persistor = persistStore(store);
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },{
    path: "/settings",
    element: <SettingPage />,
  },{
    path: "/logininf",
    element: <LoginInf />,
  },{
    path: "/login",
    element: <Login />
  },{
    path: "/born",
    element: <OnBorn />
  },{
    path: "/intro",
    element: <Intro />
  }, {
    path: "/signup",
    element: <Signup />
  }, {
    path: "/findID",
    element: <FindID />
  }, {
    path: "/findPW",
    element: <FindPW />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router = {router}/>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
