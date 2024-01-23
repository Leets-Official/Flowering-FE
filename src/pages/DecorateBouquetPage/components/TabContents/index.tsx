import { Button } from '@/components'
import { useNavigate } from 'react-router'

interface TabContentsProps {
  myItems: string[]
}

const TabContents = ({ myItems }: TabContentsProps) => {
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
            className="bg-gray-400 text-black"
            onClick={() => navigate('/store')}
          >
            상점가기
          </Button>
        </div>
      ) : (
        <div
          className={`flex gap-6 overflow-auto px-2 ${myItems.length < 4 ? 'justify-center' : 'justify-start'}`}
        >
          {myItems.map((item, index) => (
            <img
              key={index}
              src={getItemImageUrl(item)}
              alt="item"
              className="aspect-square w-[19%] rounded-full border"
            />
          ))}
        </div>
      )}
    </>
  )
}

export default TabContents
