import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './view/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './view/Contact/Contact'
import Form from './view/Form/Form';
import Login from './view/Login/Login';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/form",
    element: <Form/>,
  },

  {
    path: "/login",
    element: <Login/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<RouterProvider router={router} />

);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
