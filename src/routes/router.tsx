import { createBrowserRouter } from 'react-router-dom'
import { MainPage, LoginPage, CoinDrawPage } from '@/pages'
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
    path: PATH.COIN,
    element: <CoinDrawPage />,
  },
])

export default router
