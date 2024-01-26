interface Flower {
  flowerId?: number
  sender?: string
  flowerType: string
}

interface FlowerFrameProps {
  flowers: Flower[]
}

const flowerPositionOption = [
  '-translate-x-1/2 -translate-y-1/3 z-[25]',
  'z-[20] -translate-x-[calc(50%+2.9rem)] -translate-y-[calc(33%+4.5rem)] -rotate-[30deg]',
  'z-[10] -translate-x-[calc(50%-2.1rem)] -translate-y-[calc(33%+4.5rem)] rotate-[30deg] -scale-x-100',
  'z-[5] -translate-x-[calc(50%+2.65rem)] -translate-y-[calc(33%+8.25rem)] -rotate-[15deg]',
  'z-[5] -translate-x-[calc(50%-1.6rem)] -translate-y-[calc(33%+8.25rem)] rotate-[15deg] -scale-x-100',
]

const FlowerFrame = ({ flowers }: FlowerFrameProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
  }

  return (
    <>
      {flowers.map(({ flowerId, flowerType }, idx) => (
        <div
          key={flowerId || idx}
          className={`absolute left-1/2 top-1/2 flex ${flowerPositionOption[idx]} aspect-[154/220] w-[50vw] justify-center desktop:h-[220px] desktop:w-[154px]`}
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
