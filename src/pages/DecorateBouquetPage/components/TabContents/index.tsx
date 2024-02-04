import { NoSelectItem } from '@/assets/images'
import { Button } from '@/components'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router'

interface TabContentsProps {
  myItems: string[]
  currentItem: string
  setCurrentItem: Dispatch<SetStateAction<string>>
}

const TabContents = ({
  myItems,
  currentItem,
  setCurrentItem,
}: TabContentsProps) => {
  const navigate = useNavigate()

  const getItemImageUrl = (name: string) => {
    return new URL(`/src/assets/images/items/${name}.png`, import.meta.url).href
  }

  return (
    <>
      {myItems.length === 0 ? (
        <div className="flex w-full flex-col items-center justify-center gap-2 pt-4">
          <p className="font-xs text-black">
            꽃다발을 꾸밀 수 있는 아이템이 없어요!
          </p>
          <Button
            className="font-sm bg-black text-white"
            onClick={() => navigate('/store')}
          >
            상점가기
          </Button>
        </div>
      ) : (
        <div
          className={`flex gap-6 overflow-x-auto p-2 scrollbar-hide ${myItems.length < 4 ? 'justify-center' : 'justify-start'}`}
        >
          {myItems.map((item, index) => (
            <img
              onClick={() => setCurrentItem(item)}
              key={index}
              src={getItemImageUrl(item)}
              alt="item"
              className={`w-[19.5%] rounded-full object-contain ${currentItem === item && 'shadow-[1px_1px_7.1px_rgba(0,0,0,0.5)]'}`}
            />
          ))}
          <div
            className={`flex w-[19.5%] shrink-0`}
            onClick={() => setCurrentItem('undefined')}
          >
            <NoSelectItem
              className={`visible h-full w-full rounded-full object-contain ${currentItem === 'undefined' && 'shadow-[1px_1px_7.1px_rgba(0,0,0,0.5)]'}`}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default TabContents
