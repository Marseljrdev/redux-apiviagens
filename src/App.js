import React from "react";
import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import Header from "./components/Header";
import Routes from "./routes";
//import history from "./services/history";
import store from "./store";




export default function App(){
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </Provider>
  );
}