import { Button } from '@/components'
import { FlowerFrame } from '../'
import { PlusIcon } from '@/assets/Icons'
import { WrapperFrontImage, WrapperBackImage } from '@/assets/images'

const UncreatedBouquet = () => {
  const flowers = [
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
    { flowerType: 'flower1' },
  ]

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
        <div className="absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-1/2 -translate-y-[60%]">
          <WrapperBackImage className="h-full w-full" />
        </div>
        <FlowerFrame flowers={flowers} />
        <div className="absolute left-1/2 top-1/2 z-20 w-[70%] -translate-x-1/2 -translate-y-[15%]">
          <WrapperFrontImage className="h-full w-full object-contain" />
        </div>
        <div className="absolute bottom-0 z-20 h-full w-full bg-white opacity-50" />
      </div>
      <PlusIcon className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2" />
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        <Button className="w-full bg-[#d9d9d9] text-black">꽃다발 생성</Button>
      </footer>
    </div>
  )
}

export default UncreatedBouquet
