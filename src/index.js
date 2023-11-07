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
import store from './utils/store/store';

if (!localStorage.getItem('visited')) {
  // 최초 방문자라면 플래그 설정
  localStorage.setItem('visited', 'true');
}

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
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store = {store}>
    <RouterProvider router = {router}/>
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
