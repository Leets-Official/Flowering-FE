import { createBrowserRouter } from 'react-router-dom'
import { MainPage, LoginPage, LoginOauthPage } from '@/pages'
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
  {
    path: PATH.LOGINOAUTH,
    element: <LoginOauthPage />,
  },
])

export default router
