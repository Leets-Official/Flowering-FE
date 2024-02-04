import Header from '@/components/Header'
import { CoinIcon } from '@/assets/Icons'
import StoreItem from '@/pages/StorePage/components/StoreItem'
import { ICONS } from '@/constants'
import useGetStore from '@/apis/hooks/useGetStore.ts'
import { DecoItemInfo, FlowerItemInfo, LetterItemInfo } from '@/types'
import useGetUserInfo from '@/apis/hooks/useGetUser.ts'
import { useGetItems } from '@/apis/hooks'
import { Error500Page, LoadingPage } from '@/pages'
import { Sidebar } from '@/components'
import { useState } from 'react'

const StorePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const { data: storeData, isLoading, isError } = useGetStore()
  const { data: userData } = useGetUserInfo()
  const { data: itemData } = useGetItems()
  if (!storeData || !userData || !itemData || isError) {
    return <Error500Page />
  }
  if (isLoading) return <LoadingPage />
  const { decoItems, flowerItems, letterItems } = storeData.data
  const coin = userData.coin
  const decos = itemData?.decoItems
  const ownedDecos = decos ? decos.filter((deco) => deco.owned) : []
  const deco = decoItems.map((item: DecoItemInfo) => (
    <StoreItem
      coin={coin}
      type="deco"
      itemName={item.itemName}
      key={item.itemId}
      itemId={item.itemId}
      price={`${item.price}`}
      owned={ownedDecos.some((deco) => deco.id === item.itemId)}
    />
  ))

  const flower = flowerItems.map((item: FlowerItemInfo) => (
    <StoreItem
      coin={coin}
      type="flower"
      itemName={item.flowerName}
      key={item.itemId}
      itemId={item.itemId}
      price={`${item.price}`}
      owned={false}
    />
  ))

  const card = letterItems.map((item: LetterItemInfo) => (
    <StoreItem
      coin={coin}
      type="card"
      itemName={item.letterName}
      key={item.itemId}
      itemId={item.itemId}
      price={`${item.price}`}
      owned={false}
    />
  ))

  return (
    <div className="flex flex-col overflow-hidden">
      <Header
        setSidebarOpen={setSidebarOpen}
        leftIcon={ICONS.GOBACK}
        rightIcon={ICONS.SIDEBAR}
      />
      <div className="mb-6 flex justify-between px-6">
        <p className="font-xl">SHOP</p>
        <div className="flex h-full w-[70px] items-center justify-center gap-1 rounded-[18px] border border-[#959595] py-1">
          <CoinIcon className="h-[13px] w-[13px]" />
          <p className="font-xs">{coin}</p>
        </div>
      </div>
      <div className="overflow-y-auto px-6 pb-8 scrollbar-hide">
        <div>
          <p className="font-lg">Object</p>
          <p className="font-ls mt-2 text-gray-300">
            매일 00시 새로운 오브제로 업데이트 됩니다.
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
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  )
}

export default StorePage
