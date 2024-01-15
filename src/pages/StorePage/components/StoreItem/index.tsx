import { Button, Item, Modal } from '@/components'
import { CoinIcon, FlowerIcon } from '@/assets/Icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface StoreItemProps {
  itemId: number
  coin?: string
}
const StoreItem = ({ itemId, coin }: StoreItemProps) => {
  const navigate = useNavigate()
  const [itemNum, setItemNum] = useState<number>(0)

  const itemNumHandler = (amount: number) => {
    setItemNum((prevItemNum) => Math.max(0, prevItemNum + amount))
  }

  return (
    <div>
      <Modal>
        <div className="flex cursor-pointer justify-center" key="toggle">
          {<Item id={itemId} />}
        </div>
        <div className=" flex flex-col items-center" key="content">
          <p className="font-lg">포인세티아</p>
          <div className="font-xs flex items-center gap-1">
            <CoinIcon className="h-[14px] w-[14px]" />
            <p>300 코인</p>
          </div>
          <FlowerIcon className="my-16 rotate-45" />
          <div className="flex gap-3">
            <button
              className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#959595] pt-0.5 font-normal text-white"
              onClick={() => itemNumHandler(-1)}
            >
              -
            </button>
            <p className=" font-xs text-[#000000]">{itemNum}개</p>
            <button
              className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#959595] pt-0.5 font-normal text-white"
              onClick={() => itemNumHandler(1)}
            >
              +
            </button>
          </div>
        </div>
        <Button key="btn" onClick={() => navigate('/purchase')}>
          구매하기
        </Button>
      </Modal>

      <div className="mt-1 flex justify-center gap-1">
        <CoinIcon className="h-[13px] w-[13px]" />
        <p className="font-xs text-[#959595]">{coin}</p>
      </div>
    </div>
  )
}

export default StoreItem
