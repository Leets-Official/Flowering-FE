import { createBrowserRouter } from 'react-router-dom'
import { MainPage, LoginPage, MyPage } from '@/pages'
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
    path: PATH.MYPAGE,
    element: <MyPage />,
  },
])

export default router
