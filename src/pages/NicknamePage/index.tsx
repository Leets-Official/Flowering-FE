import { ChangeEvent, useState } from 'react'
import { Header } from '@/components'

const NicknamePage = () => {
  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>(
    '공백 포함 10자 이내로 작성해 주세요.',
  )
  const [isButton, setIsButton] = useState<boolean>(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
    if (e.target.value.length < 1) {
      setMessage('공백 포함 10자 이내로 작성해 주세요.')
      setIsButton(false)
    } else if (e.target.value.length > 10) {
      setMessage('닉네임이 10자를 초과하였습니다.')
      setIsButton(false)
    } else {
      setMessage('가능한 닉네임입니다.')
      setIsButton(true)
    }
  }

  return (
    <div className=" flex h-screen flex-col">
      <Header leftIcon="GoBackIcon" />
      <div className="w-33 font-lg ml-6 text-[#282828]">
        닉네임을 입력해 주세요.
      </div>
      <div className="font-base ml-6 mt-2 h-8 w-60 text-[12px] text-[#282828]">
        입력한 닉네임으로 지인에게 꽃다발과 편지를 보낼 수 있어요
      </div>
      <input
        type="text"
        className="font-base mx-6 mt-[158px] border-b-2 border-solid bg-white px-2.5 py-1 text-[#282828] focus:outline-none"
        placeholder="닉네임"
        onChange={handleInput}
      />
      <ul
        className={`font-xs ml-12 mt-2.5 list-disc ${
          nickname.length > 10 ? 'text-[#ff7474]' : 'text-[#959595]'
        }`}
      >
        <li>{message}</li>
      </ul>
      <div className="mx-6 flex h-full flex-row items-end">
        <button
          className={`font-sm mb-5 w-full rounded-[50px] py-[11px] ${
            isButton ? 'bg-black text-white' : 'bg-[#DDDDDD] text-[#282828]'
          }`}
          disabled={!isButton}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default NicknamePage
