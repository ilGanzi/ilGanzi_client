import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './pages/login/login';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SettingPage from './pages/setting/setting';
import setScreenHeight from './setScreenHeight';
import LoadingScreen from './pages/loading/loading';
import LoginPage from './pages/login/login';
import MainPage from './pages/main/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },{
    path: "/settings",
    element: <SettingPage />,
  },,{
    path: "/loading",
    element: <LoadingScreen />,
  },,{
    path: "/login",
    element: <LoginPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
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
