import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBydBAJMThx94GL6qpIyciFaSU2sjPY9Cw",
  authDomain: "proyecto-react-44970.firebaseapp.com",
  projectId: "proyecto-react-44970",
  storageBucket: "proyecto-react-44970.appspot.com",
  messagingSenderId: "764419782296",
  appId: "1:764419782296:web:b7741ab4a2b1572f8e42ed"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
