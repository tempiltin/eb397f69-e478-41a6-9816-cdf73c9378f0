import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './Test/reportWebVitals';
import "./Styles/Index.css";
import "bootstrap/dist/css/bootstrap.css"
import 'remixicon/fonts/remixicon.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
reportWebVitals();
