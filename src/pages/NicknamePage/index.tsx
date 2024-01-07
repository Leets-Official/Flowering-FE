import React, { ChangeEvent, useState } from 'react'

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
      console.log(e.target.value.length)
      setMessage('닉네임이 10자를 초과하였습니다.')
      setIsButton(false)
    } else {
      setMessage('가능한 닉네임입니다.')
      setIsButton(true)
    }
    console.log(nickname)
  }

  return (
    <div className=" flex h-screen flex-col bg-white">
      <div className="w-33 ml-6 mt-16 h-12 text-[20px] font-medium text-black">
        닉네임을
        <br /> 입력해 주세요.
      </div>
      <div className="ml-6 mt-2.5 h-8 w-60 text-[12px] font-light">
        입력한 닉네임으로 지인에게 꽃다발과 편지를 보낼 수 있어요
      </div>
      <input
        type="text"
        className="mx-6 mt-12 border-b-2 border-solid bg-white text-black focus:outline-none"
        placeholder="닉네임"
        onChange={handleInput}
      />
      <ul className="ml-12 mt-2.5 list-disc text-[10px] font-light">
        <li>{message}</li>
      </ul>
      <button
        className={`btn mx-6 mt-[256px] text-black ${
          isButton ? 'btn btn-primary text-white' : ''
        }`}
        disabled={!isButton}
      >
        다음
      </button>
    </div>
  )
}

export default NicknamePage
