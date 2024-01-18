import { createBrowserRouter } from 'react-router-dom'
import {
  MainPage,
  LoginPage,
  CoinDrawPage,
  OauthPage,
  MyPage,
  NicknamePage,
  CollectionPage,
  StorePage,
  PurchasePage,
  SettingPage,
  WritePage,
} from '@/pages'
import { PATH } from './constants'
import Layout from './Layout'
import ItemPage from '@/pages/ItemPage'

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
        path: PATH.NICKNAME,
        element: <NicknamePage />,
      },
      {
        path: PATH.COLLECTION,
        element: <CollectionPage />,
      },
      {
        path: PATH.ITEM,
        element: <ItemPage />,
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
        path: PATH.SETTING,
        element: <SettingPage />,
      },
      {
        path: PATH.WRITE,
        element: <WritePage />,
      },
    ],
  },
])

export default router
