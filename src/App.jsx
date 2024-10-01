
import Layout from './components/layout/layout';
import ListPage from './components/listPage/ListPage';
import HomePage from './components/routes/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from './components/singlePage/SinglePage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        },

      ]
    },

  ]);

  return (


    <RouterProvider router={router} />
  )
}

export default App