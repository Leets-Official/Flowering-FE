import {
  useGetCardItemInfo,
  useGetDecoItemInfo,
  useGetFlowerItemInfo,
} from '@/apis/hooks'
import { Header, Button } from '@/components'
import { ItemInfo } from '@/types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const ItemPage = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')
  const type = searchParams.get('type')
  const name = searchParams.get('name')
  const { data: flowerInfo } = useGetFlowerItemInfo({ id, type })
  const { data: decoInfo } = useGetDecoItemInfo({ id, type })
  const { data: cardInfo } = useGetCardItemInfo({ id, type })
  const [data, setData] = useState<ItemInfo>()
  const getImageUrl = (name: string | null) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url).href
  }

  useEffect(() => {
    if (flowerInfo || decoInfo || cardInfo) {
      switch (type) {
        case 'Flower':
          setData(flowerInfo)
          break
        case 'Deco':
          setData(decoInfo)
          break
        case 'Card':
          setData(cardInfo)
          break
        default:
          break
      }
    }
  }, [type, flowerInfo, decoInfo, cardInfo])

  return (
    <div className="flex h-screen flex-col">
      <Header leftIcon="HomeIcon" />
      <div className="mx-6 mt-5 flex flex-col items-center gap-12">
        <div className="font-lg text-[#282828]">{type}</div>
        <div className="h-[18.75rem] w-60">
          <img src={getImageUrl(name)} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="font-lg text-[#6e6e6e]">{data?.data.itemName}</div>
          <div className="font-xs text-[#959595]">{data?.data.description}</div>
        </div>
        <Button
          size="lg"
          className="mb-2.5"
          onClick={() => navigate('/collection')}
        >
          확인
        </Button>
      </div>
    </div>
  )
}

export default ItemPage
