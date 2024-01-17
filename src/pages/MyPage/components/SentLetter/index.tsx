import { Header } from '@/components'
import { ICONS } from '@/constants'
import { useState } from 'react'

const SentLetter = ({ onClose }: { onClose: () => void }) => {
  const [modalVisible, setModalVisible] = useState(true)
  const closeModal = () => {
    setModalVisible(false)
    onClose()
  }

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen  w-full overflow-hidden bg-white text-gray-300 ${
        modalVisible ? 'block' : 'hidden'
      }`}
    >
      <Header rightIcon={ICONS.CLOSE} onClose={closeModal} />
      <div className="mx-7 mt-3 flex">
        <div className="font-lg flex">
          <p className="text-gray-300">냥냥냥</p>
          <p className="text-gray-300">님께 편지를 보냈어요.</p>
        </div>
      </div>
      <div className="font-ls mt-10 flex h-screen w-full flex-col rounded-t-[50px] bg-[#DADADA] px-7 pt-16">
        <p className="mb-10">
          친애하는 혜진아!!! 입학을 축하해! 너의 노력과 열정이 드디어 결실을
          맺었구나. 정말 자랑스럽다! 이제 새로운 학교에서 많은 도전과 성장이
          기다리고 있을 거야. 학업과 함께 즐거운 경험들도 많이 만들어봐. 어려운
          시기도 있을 수 있지만, 내가 너의 곁에 있을게. 늘 응원하고 지지해줄
          테니까 걱정하지 마. 축하해, 친구야! 사랑하는 마음으로, 플링이
        </p>
        <p className="text-right">2024년 01월 16일</p>
      </div>
    </div>
  )
}

export default SentLetter
