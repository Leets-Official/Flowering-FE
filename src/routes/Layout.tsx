import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="border-x-1 mx-auto h-screen border-black bg-white">
      <Outlet />
    </div>
  )
}

export default Layout
