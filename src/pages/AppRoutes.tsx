import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@workspacehub/pages/Home';
import Layout from '@workspacehub/pages/Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'index.html',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const AppRoutes = () => <RouterProvider router={router} />;

export { routes };

export default AppRoutes;
