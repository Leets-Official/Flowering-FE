import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'
import { LoadingPage } from './pages'

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingPage />}>
        <QueryClientProvider client={queryClient}>
          <div className="h-dvh">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </Suspense>
    </RecoilRoot>
  )
}

export default App
