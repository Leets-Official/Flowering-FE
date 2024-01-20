import { Button } from '@/components'
import { PlusIcon } from '@/assets/Icons'

const UncreatedBouquet = () => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

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
      <div className="relative flex h-full w-full items-center justify-center">
        <img
          src={getImageUrl('flower_blur')}
          alt="flower_blur"
          className="w-full object-contain"
        />
      </div>
      <PlusIcon className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2" />
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        <Button className="w-full bg-[#d9d9d9] text-black">꽃다발 생성</Button>
      </footer>
    </div>
  )
}

export default UncreatedBouquet
