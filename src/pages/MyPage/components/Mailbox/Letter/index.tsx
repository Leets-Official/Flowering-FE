// interface LetterProps {
//   className?: string
//   id?: string
//   status?: string
// }

import { FlowerIcon } from '@/assets/Icons'

const Letter = () => {
  return (
    <div className="font-xs flex h-[115px] w-full shrink-0 bg-gray-400 pl-7">
      <div>
        <div className="flex flex-col gap-1 pt-5">
          <p>01</p>
          <div className="h-[1.5px] w-3 bg-black" />
          <p>13</p>
          <p className="mt-5">TO.냥냥냥</p>
        </div>
      </div>
      <div className="relative">
        <FlowerIcon className="absolute z-10 ml-14 mt-6" />
        <div className="absolute z-20 ml-32 h-full w-16 bg-white opacity-60 " />
      </div>
    </div>
  )
}

export default Letter
