import { SyncLoader } from 'react-spinners'

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <SyncLoader color="#9A9A9A" size={10} margin={4} />
    </div>
  )
}

export default LoadingPage
