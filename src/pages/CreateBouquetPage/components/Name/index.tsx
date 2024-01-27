import { ChangeEvent, useEffect, useState } from 'react'
import { CheckIcon } from '@/assets/Icons'

interface NameProps {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const Name = ({ name, setName }: NameProps) => {
  const [message, setMessage] = useState<string>(
    '공백 포함 10자 이내로 작성해 주세요.',
  )
  const [activeButton, setActiveButton] = useState<boolean>(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value.length < 1) {
      setMessage('공백 포함 10자 이내로 작성해 주세요.')
      setActiveButton(false)
    } else if (e.target.value.length > 10) {
      setMessage('제목이 10자를 초과하였습니다.')
      setActiveButton(false)
    } else {
      setMessage('가능한 제목입니다.')
      setActiveButton(true)
    }
  }

  useEffect(() => {
    if (name && name.length < 10) {
      setMessage('가능한 제목입니다.')
      setActiveButton(true)
    }
  }, [name, setMessage])

  return (
    <div className="mx-6 mt-5 flex h-full flex-col">
      <div className="font-lg text-[#282828]">꽃다발을 설명해 주세요.</div>
      <div className="mb-4 flex h-full flex-col justify-center">
        <div className="relative">
          <input
            type="text"
            className="font-base w-full border-b-2 border-solid bg-white px-2.5 py-1 text-[#282828] focus:outline-none"
            placeholder="꽃다발 제목"
            onChange={handleInput}
            value={name}
          />
          {activeButton && (
            <CheckIcon className="absolute right-2 top-[0.5rem]" />
          )}
        </div>
        <ul
          className={`font-xs mx-6 mt-2 list-disc ${
            name.length > 10 ? 'text-[#ff7474]' : 'text-[#959595]'
          }`}
        >
          <li>{message}</li>
        </ul>
      </div>
    </div>
  )
}

export default Name
