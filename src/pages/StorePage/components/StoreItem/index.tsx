import { Item } from '@/components'
import { CoinIcon } from '@/assets/Icons'
import { useState } from 'react'

interface StoreItemProps {
  itemId: number
  coin: string
}
const StoreItem = ({ itemId, coin }: StoreItemProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const itemHandler = () => {
    setOpenModal((prev) => !prev)
  }
  console.log(openModal)

  return (
    <div>
      <button onClick={itemHandler}>
        <Item id={itemId} />
      </button>
      <div className="mt-1 flex justify-center gap-1">
        <CoinIcon className="h-[13px] w-[13px]" />
        <p className="font-xs text-[#959595]">{coin}</p>
      </div>
      {/*{openModal && (*/}
      {/*  <Modal>*/}
      {/*    <Modal.Toggle id="1">{<Item id={itemId} />}</Modal.Toggle>*/}
      {/*    <Modal.Content id="1">*/}
      {/*      <h1>Modal Content</h1>*/}
      {/*      <h2>here is h2</h2>*/}
      {/*    </Modal.Content>*/}
      {/*  </Modal>*/}
      {/*)}*/}
    </div>
  )
}

export default StoreItem
