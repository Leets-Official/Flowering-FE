import Header from '@/components/Header'
import { CoinIcon } from '@/assets/Icons'
import StoreItem from '@/pages/StorePage/components/StoreItem'
import { ICONS } from '@/constants'

const StorePage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header leftIcon={ICONS.HOME} />
      <div className="mb-6 flex justify-between px-6">
        <p className="font-xl">SHOP</p>
        <div className="flex h-full w-[70px] items-center justify-center gap-1 rounded-[18px] border border-[#959595] py-1">
          <CoinIcon className="h-[13px] w-[13px]" />
          <p className="font-xs">3000</p>
        </div>
      </div>
      <div className="overflow-y-auto px-6 pb-8">
        <div>
          <p className="font-lg">Object</p>
          <p className="font-ls mt-2">
            매일 00시 새로운 오브제로 업데이트 됩니다.
          </p>
          <p className="font-xs mt-0.5 text-[#9D9D9D]">
            한 오브제의 최대 보유량은 3개입니다.
          </p>
          <div className="mt-4 flex justify-between">
            <StoreItem itemId={1} coin="300" />
            <StoreItem itemId={1} coin="200" />
            <StoreItem itemId={1} coin="900" />
          </div>
        </div>
        <div>
          <p className="font-lg mt-5">Flower</p>
          <div className="mt-2 flex justify-between">
            <StoreItem itemId={1} coin="FREE" />
            <StoreItem itemId={1} coin="FREE" />
            <StoreItem itemId={1} coin="FREE" />
          </div>
          <div className="mt-2 flex justify-between">
            <StoreItem itemId={1} coin="300" />
            <StoreItem itemId={1} coin="200" />
            <StoreItem itemId={1} coin="900" />
          </div>
          <div className="mt-2 flex justify-between">
            <StoreItem itemId={1} coin="300" />
            <StoreItem itemId={1} coin="200" />
            <StoreItem itemId={1} coin="900" />
          </div>
        </div>
        <div>
          <p className="font-lg mt-5">Card</p>
          <div className="mt-2 flex justify-between">
            <StoreItem itemId={1} coin="300" />
            <StoreItem itemId={1} coin="200" />
            <StoreItem itemId={1} coin="900" />
          </div>
          <div className="mt-4 flex justify-between">
            <StoreItem itemId={1} coin="300" />
            <StoreItem itemId={1} coin="200" />
            <StoreItem itemId={1} coin="900" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StorePage
