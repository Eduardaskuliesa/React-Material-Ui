import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './navigation/router';

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
