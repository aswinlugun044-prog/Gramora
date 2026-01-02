import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './RouterPage';
import App from"./App";

const root = ReactDOM.createRoot(document.getElement('root'));
root.render(
  <BrowserRouter>
    <RouterPage />
  </BrowserRouter>
 (<App/>)
);
