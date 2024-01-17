import { useState } from 'react'
import Mailbox from '@/pages/MyPage/components/Mailbox'
import Header from '@/components/Header'
import { Sidebar } from '@/components'
import { ICONS } from '@/constants'

const MyPage = () => {
  const [selectedMailbox, setSelectedMailbox] = useState<string>('received')
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const handleMailboxSelection = (mailboxType: string) => {
    setSelectedMailbox(mailboxType)
  }

  return (
    <section className={`h-screen`}>
      <div className={`${sidebarOpen && 'blur-sm'} flex h-full flex-col`}>
        <Header
          setSidebarOpen={setSidebarOpen}
          leftIcon={ICONS.HOME}
          rightIcon={ICONS.SIDEBAR}
        />
        <div className="mx-8 mb-7 mt-5 flex justify-between">
          <div className="flex flex-col">
            <p className="font-lg text-[#959595]">환영해요!</p>
            <p className="font-lg">플링님</p>
          </div>
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
                className="font-sm w-full"
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
      </div>
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </section>
  )
}

export default MyPage
