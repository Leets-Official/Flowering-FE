import { Button, Item, Modal } from '@/components'
import { CoinIcon } from '@/assets/Icons'
import { useState } from 'react'
import {
  usePostStoreCard,
  usePostStoreDeco,
  usePostStoreFlower,
} from '@/apis/hooks'
import { PurchasePage } from '@/pages'
import BigItem from '@/components/BigItem'

interface StoreItemProps {
  type: string
  itemId: number
  price: string
  itemName: string
  coin: number
  owned?: boolean
}
const StoreItem = ({
  owned,
  type,
  itemId,
  price,
  itemName,
  coin,
}: StoreItemProps) => {
  const [itemNum, setItemNum] = useState<number>(0)
  const [confirmPurchase, setConfirmPurchase] = useState<boolean>(false)
  const maxAllowedQuantity =
    coin && type !== 'deco' ? Math.round(coin / parseInt(price, 10)) : 1
  const { storeFlowerMutation } = usePostStoreFlower(setConfirmPurchase)
  const { storeCardMutation } = usePostStoreCard(setConfirmPurchase)
  const { storeDecoMutation } = usePostStoreDeco(setConfirmPurchase)
  const onPurchaseButton = () => {
    if (type === 'flower' && itemNum > 0) {
      storeFlowerMutation.mutate({ flowerItemId: itemId, count: itemNum })
    }
    if (type === 'card' && itemNum > 0) {
      storeCardMutation.mutate({ cardId: itemId, count: itemNum })
    }
    if (type === 'deco' && itemNum > 0) {
      storeDecoMutation.mutate({ decoId: itemId })
    }
  }
  const itemNumHandler = (amount: number) => {
    setItemNum((prevItemNum) => {
      const newItemNum = Math.max(0, prevItemNum + amount)

      if (newItemNum <= maxAllowedQuantity) {
        return newItemNum
      } else {
        return prevItemNum
      }
    })
  }

  return (
    <div tabIndex={-1}>
      <Modal>
        <div className="flex cursor-pointer justify-center" key="toggle">
          {<Item className={`${owned ? 'grayscale' : ''}`} name={itemName} />}
        </div>
        <div className="flex flex-col items-center" key="content">
          <p className="font-lg text-gray-300">{itemName.replace(/-/g, ' ')}</p>
          <div className="font-xs flex items-center gap-1">
            <CoinIcon className="h-[14px] w-[14px]" />
            <p>{price} 코인</p>
          </div>
          <BigItem className="h-[190px] w-[133px]" name={itemName} />
          {owned ? (
            <p className="font-lg text-gray-300">이미 보유하신 아이템입니다.</p>
          ) : (
            <>
              <div className="mb-5 flex gap-3">
                <button
                  className={`flex h-[16px] w-[16px] items-center justify-center rounded-full ${
                    itemNum >= 1 ? 'bg-gray-200' : 'bg-gray-100'
                  } font-normal text-white`}
                  onClick={() => itemNumHandler(-1)}
                >
                  -
                </button>
                <p className=" font-xs text-[#000000]">{itemNum}개</p>
                <button
                  className={`flex h-[16px] w-[16px] items-center justify-center rounded-full ${
                    itemNum < maxAllowedQuantity ? 'bg-gray-200' : 'bg-gray-100'
                  } font-normal text-white`}
                  onClick={() => itemNumHandler(1)}
                >
                  +
                </button>
              </div>
              {itemNum > 0 ? (
                <Button key="btn" onClick={onPurchaseButton}>
                  구매하기
                </Button>
              ) : (
                <Button key="btn" disabled>
                  구매하기
                </Button>
              )}
            </>
          )}
        </div>
      </Modal>
      <div className="mt-1 flex justify-center gap-1">
        <CoinIcon className="h-[13px] w-[13px]" />
        <p className="font-xs text-gray-200">{price}</p>
      </div>
      {confirmPurchase && (
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-white">
          <PurchasePage itemName={itemName} />
        </div>
      )}
    </div>
  )
}

export default StoreItem
