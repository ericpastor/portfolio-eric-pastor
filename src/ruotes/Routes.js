import { createBrowserRouter } from 'react-router-dom'
// import ErrorPage from '../pages/ErrorPage'

import Layout from '../components/pages/Layout'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Layout />,
      },
    ],
  },
])

export default router
