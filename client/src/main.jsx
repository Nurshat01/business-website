// import React from 'react';
// import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import Home from './pages/Home';
// import ErrorPage from './pages/ErrorPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
