import { Header } from '@/components'
import { ICONS } from '@/constants'

const ReceivedPage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header rightIcon={ICONS.CLOSE} />
      <div className="mx-7 mt-3 flex">
        <div className="font-lg flex">
          <p className="text-gray-300">냥냥냥</p>
          <p className="text-gray-300">님이 보낸 편지에요</p>
        </div>
      </div>
      <div className="font-ls mt-10 flex h-screen w-full flex-col rounded-t-[50px] bg-[#DADADA] px-7 pt-16">
        <p className="mb-10">
          드디어 졸업을 하게 되어 정말로 축하해! 너무나도 자랑스럽고 뿌듯해!
          이렇게 오랜 시간 동안 고난과 열정을 겪으며 이루어낸 졸업은 정말 대단한
          일이야.
        </p>
        <p className="text-right">2024년 01월 16일</p>
      </div>
    </div>
  )
}

export default ReceivedPage
