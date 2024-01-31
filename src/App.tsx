import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className='h-dvh'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
