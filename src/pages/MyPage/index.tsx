import { useState } from 'react'
import Mailbox from '@/pages/MyPage/components/Mailbox'

const MyPage = () => {
  const [selectedMailbox, setSelectedMailbox] = useState<string>('received')

  const handleMailboxSelection = (mailboxType: string) => {
    setSelectedMailbox(mailboxType)
  }

  return (
    <section>
      <div className="mx-10 mb-7 mt-5 flex justify-between">
        <div className="flex flex-col text-[17px]">
          <p>환영해요!</p>
          <p className="font-extrabold">플링님</p>
        </div>
        <a href="/">홈</a>
      </div>
      <ul className="mb-2 flex w-full flex-row justify-center">
        {['received', 'sent'].map((mailboxType, index) => (
          <li
            key={index}
            className={`flex w-1/2 flex-col items-center justify-center ${
              selectedMailbox === mailboxType
                ? 'font-extrabold'
                : 'text-gray-500'
            }`}
          >
            <button
              className="w-full text-[12px]"
              onClick={() => handleMailboxSelection(mailboxType)}
            >
              {mailboxType === 'received' ? '받은 편지함' : '보낸 편지함'}
            </button>
            <div
              className={`mt-1.5 h-0.5 w-full bg-black ${
                selectedMailbox !== mailboxType ? 'opacity-10' : ''
              }`}
            />
          </li>
        ))}
      </ul>
      <Mailbox status={selectedMailbox} />
    </section>
  )
}

export default MyPage
