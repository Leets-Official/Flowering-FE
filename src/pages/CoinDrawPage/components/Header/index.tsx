import { HomeIcon } from '@/assets/Icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-3.5">
      <i className="w-fit rounded-full hover:bg-gray-300">
        <HomeIcon className="cursor-pointer" onClick={() => navigate('/')} />
      </i>
      <div className="text-xl font-bold text-[#5F5F5F]">LUCKY COIN</div>
    </div>
  )
}

export default Header
