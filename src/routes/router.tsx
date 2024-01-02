import { createBrowserRouter } from 'react-router-dom'
import { MainPage, LoginPage } from '@/pages'
import { PATH } from './constants'

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <MainPage />,
  },
  {
    path: PATH.LOGIN,
    element: <LoginPage />,
  },
])

export default router
