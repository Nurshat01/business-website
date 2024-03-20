import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import Home from './pages/Home';
import Services from './pages/Services';
import LoginSignup from './pages/LoginSignup';
import About from './pages/About';
import MyServiceRequests from './pages/MyServiceRequests';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/loginsignup',
        element: <LoginSignup />
      },
      {
        path: '/myservicerequests',
        element: <MyServiceRequests />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
