import { createBrowserRouter } from 'react-router-dom'
import {
  MainPage,
  LoginPage,
  CoinDrawPage,
  OauthPage,
  MyPage,
  StorePage,
  PurchasePage,
  WritePage,
  CardPage,
  FlowerPage,
  LetterPage,
} from '@/pages'
import { PATH } from './constants'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <Layout />,
    children: [
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
      {
        path: PATH.LOGINOAUTH,
        element: <OauthPage />,
      },
      {
        path: PATH.MYPAGE,
        element: <MyPage />,
      },
      {
        path: PATH.STORE,
        element: <StorePage />,
      },
      {
        path: PATH.PURCHASE,
        element: <PurchasePage />,
      },
      {
        path: PATH.WRITE,
        element: <WritePage />,
      },
      {
        path: PATH.CARD,
        element: <CardPage />,
      },
      {
        path: PATH.FLOWER,
        element: <FlowerPage />,
      },
      {
        path: PATH.LETTER,
        element: <LetterPage />,
      },
    ],
  },
])

export default router
