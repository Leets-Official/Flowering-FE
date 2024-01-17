interface Flower {
  flowerId: number
  sender: string
  flowerType: string
}

interface FlowerFrameProps {
  flowers: Flower[]
}

const flowerPositionOption = [
  '-translate-x-1/2 -translate-y-1/3 z-[12]',
  'z-[11] -translate-x-[80%] -translate-y-[27%] -rotate-[30deg] -scale-x-100',
  'z-[11] -translate-x-[24%] -translate-y-[27%] rotate-[30deg] ',
  'z-[10] -translate-x-[78%] -translate-y-2/3 -rotate-[15deg] -scale-x-100',
  'z-[10] -translate-x-[22%] -translate-y-2/3 rotate-[15deg]',
]

const FlowerFrame = ({ flowers }: FlowerFrameProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/flowers/${name}.png`, import.meta.url)
      .href
  }

  return (
    <div className="relative flex h-full w-full flex-col">
      {flowers.map(({ flowerId, flowerType }, idx) => (
        <div
          key={flowerId}
          className={`absolute bottom-[2vh] left-1/2 flex ${flowerPositionOption[idx]} aspect-[1/1.5] w-[50vw] justify-center desktop:h-[270px] desktop:w-[180px]`}
        >
          <img
            src={getImageUrl(flowerType)}
            alt="flower"
            className="h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default FlowerFrame
