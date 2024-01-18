import React, { useEffect, useState } from 'react'
import { Header, Button } from '@/components'

export default function Example() {
  const [activeButton, setActiveButton] = useState(false)

  return (
    <>
      <div className="mx-6 flex h-screen flex-col">
        <div className="font-lg text-[#282828]">
          축하 받을 당일의 날짜를 <br /> 알려 주세요.
        </div>
        <Button
          className={`font-sm mt-[13rem] ${
            activeButton ? 'bg-black text-white' : 'bg-[#DDDDDD] text-[#282828]'
          }`}
          disabled={!activeButton}
        >
          다음
        </Button>
      </div>
    </>
  )
}
