// interface LetterProps {
//   className?: string
//   id?: string
//   status?: string
// }

import { FlowerIcon } from '@/assets/Icons'
import { useNavigate } from 'react-router-dom'

const Letter = ({ status }: { status?: string }) => {
  const navigate = useNavigate()
  const navigateHandler = () => {
    if (status === 'received') {
      navigate('/mypage/received')
    } else {
      navigate('/mypage/sent')
    }
  }

  return (
    <button
      className="font-xs flex h-[115px] w-full shrink-0 bg-[#D9D9D9] pl-7"
      onClick={navigateHandler}
    >
      <div className="flex flex-col gap-1 pt-5">
        <p className="w-3">01</p>
        <div className="h-[1.5px] w-3 bg-black" />
        <p className="w-3">13</p>
        <p className="mt-5">TO.냥냥냥</p>
      </div>
      <div className="relative">
        <FlowerIcon className="absolute z-10 ml-14 mt-6" />
        <div className="absolute z-20 ml-32 h-full w-16 bg-white opacity-60 " />
      </div>
    </button>
  )
}

export default Letter
