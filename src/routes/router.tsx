import { createBrowserRouter } from 'react-router-dom'
import {
  MainPage,
  LoginPage,
  CoinDrawPage,
  OauthPage,
  MyPage,
  SignUpPage,
  CollectionPage,
  StorePage,
  CreateBouquetPage,
  WritePage,
  ItemPage,
  DecorateBouquetPage,
  Error404Page,
  Error500Page,
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
        path: PATH.LOGINOAUTH,
        element: <OauthPage />,
      },
      {
        path: PATH.COIN,
        element: <CoinDrawPage />,
      },
      {
        path: PATH.MYPAGE,
        element: <MyPage />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignUpPage />,
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
        path: PATH.CREATE_BOUQUET,
        element: <CreateBouquetPage />,
      },
      {
        path: PATH.WRITE,
        element: <WritePage />,
      },
      {
        path: PATH.DECORATE_BOUQUET,
        element: <DecorateBouquetPage />,
      },
      {
        path: PATH.ERROR404,
        element: <Error404Page />,
      },
      {
        path: PATH.ERROR500,
        element: <Error500Page />,
      },
    ],
  },
])

export default router
