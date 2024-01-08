import { HomeIcon } from '@/assets/Icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-6 py-6">
      <div className="text-xl font-bold text-[#5F5F5F]">LUCKY DRAW</div>
      <i className="rounded-full border p-1 hover:border hover:border-gray-400 hover:bg-gray-300">
        <HomeIcon className="cursor-pointer" onClick={() => navigate('/')} />
      </i>
    </div>
  )
}

export default Header
