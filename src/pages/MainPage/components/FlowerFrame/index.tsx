interface Flower {
  flowerId?: number
  sender?: string
  flowerType: string
}

interface FlowerFrameProps {
  flowers: Flower[]
}

const flowerPositionOption = [
  '-translate-x-1/2 -translate-y-1/2 z-[12]',
  'z-[11] -translate-x-[80%] -translate-y-[65%] -rotate-[30deg] -scale-x-100',
  'z-[11] -translate-x-[24%] -translate-y-[65%] rotate-[30deg] ',
  'z-[10] -translate-x-[72%] -translate-y-[90%] -rotate-[15deg] -scale-x-100',
  'z-[10] -translate-x-[28%] -translate-y-[90%] rotate-[15deg]',
]

const FlowerFrame = ({ flowers }: FlowerFrameProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/flowers/${name}.png`, import.meta.url)
      .href
  }

  return (
    <>
      {flowers.map(({ flowerId, flowerType }, idx) => (
        <div
          key={flowerId || idx}
          className={`absolute left-1/2 top-1/2 flex ${flowerPositionOption[idx]} aspect-[1/1.5] w-[50vw] justify-center desktop:h-[270px] desktop:w-[180px]`}
        >
          <img
            src={getImageUrl(flowerType)}
            alt="flower"
            className="h-full object-contain"
          />
        </div>
      ))}
    </>
  )
}

export default FlowerFrame
