import { Button } from '@/components'
import { FlowerFrame } from '../'
import { PlusIcon } from '@/assets/Icons'

const UncreatedBouquet = () => {
  const flowers = [
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
  ]

  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/wrapping/${name}.png`, import.meta.url)
      .href
  }

  const leftWrapper = getImageUrl('left_wrapping')
  const rightWrapper = getImageUrl('right_wrapping')
  const backWrapper = getImageUrl('back_wrapping')

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-1.5 px-6">
        <div className="font-base flex justify-between text-gray-300">
          <h2>{`꽃다발의 이름을 입력해주세요.`}</h2>
        </div>
        <h1>
          <span className="font-lg">{`꽃송이  `}</span>
          <span className="font-xl">{0}</span>
          <span className="font-lg">{`개 째`}</span>
        </h1>
      </div>
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 z-0 h-[63vh] w-full desktop:h-[500px]">
          <img src={backWrapper} alt="wrapper-back" className="w-full" />
        </div>
        <FlowerFrame flowers={flowers} />
        <div className="absolute bottom-0 right-0 z-20 aspect-[1.25/1] h-[40%] desktop:h-[220px]">
          <img src={rightWrapper} alt="wrapper-right" className="h-full" />
        </div>
        <div className="absolute bottom-0 z-20 aspect-[1.25/1] h-[33%] desktop:h-[190px]">
          <img src={leftWrapper} alt="wrapper-left" className="h-full" />
        </div>
        <div className="absolute bottom-0 z-20 h-full w-full bg-white opacity-70" />
      </div>
      <PlusIcon className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2" />
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        <Button className="w-full bg-[#d9d9d9] text-black">꽃다발 생성</Button>
      </footer>
    </div>
  )
}

export default UncreatedBouquet
