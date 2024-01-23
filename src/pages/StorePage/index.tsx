import Header from '@/components/Header'
import { CoinIcon } from '@/assets/Icons'
import StoreItem from '@/pages/StorePage/components/StoreItem'
import { ICONS } from '@/constants'
import useGetStore from '@/apis/hooks/useGetStore.ts'
import { DecoItemInfo, FlowerItemInfo, LetterItemInfo } from '@/types'
import useGetUserInfo from '@/apis/hooks/useGetUserInfo.ts'

const StorePage = () => {
  const { data: storeData } = useGetStore()
  const { data: userData } = useGetUserInfo()

  if (!storeData || !userData) {
    return <p>error</p>
  }
  const { decoItems, flowerItems, letterItems } = storeData.data

  const { coin } = userData.data
  const deco = decoItems.map((item: DecoItemInfo) => (
    <StoreItem
      type="deco"
      itemName={item.itemName}
      key={item.itemId}
      itemId={item.itemId}
      coin={`${item.price}`}
    />
  ))

  const flower = flowerItems.map((item: FlowerItemInfo) => (
    <StoreItem
      type="flower"
      itemName={item.flowerName}
      key={item.itemId}
      itemId={item.itemId}
      coin={`${item.price}`}
    />
  ))

  const card = letterItems.map((item: LetterItemInfo) => (
    <StoreItem
      type="card"
      itemName={item.letterName}
      key={item.itemId}
      itemId={item.itemId}
      coin={`${item.price}`}
    />
  ))

  return (
    <div className="flex flex-col overflow-hidden">
      <Header leftIcon={ICONS.HOME} />
      <div className="mb-6 flex justify-between px-6">
        <p className="font-xl">SHOP</p>
        <div className="flex h-full w-[70px] items-center justify-center gap-1 rounded-[18px] border border-[#959595] py-1">
          <CoinIcon className="h-[13px] w-[13px]" />
          {/*user api - coin*/}
          <p className="font-xs">{coin}</p>
        </div>
      </div>
      <div className="overflow-y-auto px-6 pb-8 scrollbar-hide">
        <div>
          <p className="font-lg">Object</p>
          <p className="font-ls mt-2">
            매일 00시 새로운 오브제로 업데이트 됩니다.
          </p>
          <p className="font-xs mt-0.5 text-gray-600">
            한 오브제의 최대 보유량은 3개입니다.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-x-10 gap-y-1.5">{deco}</div>
        </div>
        <div>
          <p className="font-lg mt-5">Flower</p>
          <div className="mt-4 grid grid-cols-3 gap-x-10 gap-y-1.5">
            {flower}
          </div>
        </div>
        <div>
          <p className="font-lg mt-5">Card</p>
          <div className="mt-4 grid grid-cols-3 gap-x-10 gap-y-1.5">{card}</div>
        </div>
      </div>
    </div>
  )
}

export default StorePage
