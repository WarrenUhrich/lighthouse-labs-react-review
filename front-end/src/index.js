import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ToDosApp from './components/ToDosApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDosApp heading="In-Class To-Dos!" />
  </React.StrictMode>
);
