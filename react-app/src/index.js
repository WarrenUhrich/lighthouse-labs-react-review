import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Tasks from './components/Tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tasks title="Programming Tasks" />
  </React.StrictMode>
);
