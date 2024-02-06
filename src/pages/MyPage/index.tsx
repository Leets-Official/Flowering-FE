import { useState } from 'react'
import Mailbox from '@/pages/MyPage/components/Mailbox'
import Header from '@/components/Header'
import { Sidebar } from '@/components'
import { ICONS } from '@/constants'
import useGetUserInfo from '@/apis/hooks/useGetUser.ts'
import { Error500Page } from '@/pages'

const MyPage = () => {
  const [selectedMailbox, setSelectedMailbox] = useState<string>('received')
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const { data } = useGetUserInfo()
  if (!data) {
    return <Error500Page />
  }
  const { nickname, dday } = data
  const handleMailboxSelection = (mailboxType: string) => {
    setSelectedMailbox(mailboxType)
  }

  return (
    <section className={`h-dvh`}>
      <div className={`${sidebarOpen && 'blur-sm'} flex h-full flex-col`}>
        <Header
          setSidebarOpen={setSidebarOpen}
          leftIcon={ICONS.HOME}
          rightIcon={ICONS.SIDEBAR}
        />
        <div className="mx-6 mb-7 mt-1 flex justify-between">
          <div className="flex flex-col">
            <p className="font-lg text-gray-200">환영해요!</p>
            <p className="font-lg">{nickname}님</p>
          </div>
        </div>
        <ul className="mb-2 flex w-full flex-row justify-center">
          {['received', 'sent'].map((mailboxType, index) => (
            <li
              key={index}
              className={`flex w-1/2 flex-col items-center justify-center ${
                selectedMailbox === mailboxType
                  ? 'font-extrabold'
                  : 'text-gray-200'
              }`}
            >
              <button
                className="font-sm w-full"
                onClick={() => handleMailboxSelection(mailboxType)}
              >
                {mailboxType === 'received' ? '받은 편지함' : '보낸 편지함'}
              </button>
              <div
                className={`mt-1.5 w-full rounded bg-black ${
                  selectedMailbox !== mailboxType
                    ? 'h-[1px] opacity-20'
                    : 'h-[3px]'
                }`}
              />
            </li>
          ))}
        </ul>
        <Mailbox dDay={dday} status={selectedMailbox} nickname={nickname} />
      </div>
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </section>
  )
}

export default MyPage
