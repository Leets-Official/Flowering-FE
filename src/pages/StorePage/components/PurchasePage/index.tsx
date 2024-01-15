import Header from '@/components/Header'
import { FlowerIcon } from '@/assets/Icons'
import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'
import { ICONS } from '@/constants'

const PurchasePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header leftIcon={ICONS.HOME} />
      <div className="mx-8">
        <FlowerIcon className="ml-10 mt-5 h-[300px] w-[230px] rotate-45" />
        <div className="font-lg mt-16 text-center">
          <p>축하합니다!</p>
          <div className="mt-4 flex justify-center">
            <p>포인세티아</p>
            <p className="text-[#959595]">를 구매하셨어요.</p>
          </div>
          <p className="text-[#959595]">꽃을 지인들에게 선물해보세요!</p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={() => {
              navigate('/store')
            }}
            className="font-sm h-[40px] w-[108px] rounded-[50px]"
          >
            상점 가기
          </Button>
          <Button
            onClick={() => {
              navigate('/item')
            }}
            className="font-sm h-[40px] w-[108px] rounded-[50px]"
          >
            도감 확인
          </Button>
        </div>
      </div>
    </div>
  )
}
export default PurchasePage
