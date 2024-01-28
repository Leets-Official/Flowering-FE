import { 청량한_한여름밤의_꿈, 신비로운_새벽_하늘 } from '../'

interface Flower {
  flowerId?: number
  sender?: string
  flowerType: string
}

interface FlowerFrameProps {
  flowers: Flower[]
}

type FlowerStrokeType = {
  [key: string]: React.ComponentType<{ onClick: () => void }>
}

const flowerPositionOption = [
  '-translate-x-1/2 -translate-y-[calc(33%+1rem)] z-[25]',
  'z-[20] -translate-x-[calc(50%+2.9rem)] -translate-y-[calc(33%+5rem)] -rotate-[30deg]',
  'z-[10] -translate-x-[calc(50%-2.1rem)] -translate-y-[calc(33%+5rem)] rotate-[30deg] -scale-x-100',
  'z-[5] -translate-x-[calc(50%+2.65rem)] -translate-y-[calc(33%+9rem)] -rotate-[15deg]',
  'z-[5] -translate-x-[calc(50%-1.6rem)] -translate-y-[calc(33%+9rem)] rotate-[15deg] -scale-x-100',
]

const FlowerFrame = ({ flowers }: FlowerFrameProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
  }

  const flowerStroke: FlowerStrokeType = {
    '청량한-한여름밤의-꿈': 청량한_한여름밤의_꿈,
    '신비로운-새벽-하늘': 신비로운_새벽_하늘,
  }

  return (
    <>
      {flowers.map(({ flowerId, flowerType }, idx) => {
        const ComponentStroke = flowerStroke[flowerType]

        return (
          <div key={flowerId || idx}>
            <div
              className={`absolute left-1/2 top-1/2 flex ${flowerPositionOption[idx]} aspect-[154/220] w-[50vw] justify-center desktop:h-[220px] desktop:w-[154px]`}
            >
              <img
                src={getImageUrl(flowerType)}
                alt="flower"
                className="h-full object-contain"
              />
            </div>
            <div
              className={`absolute left-1/2 top-1/2 flex ${flowerPositionOption[idx]} aspect-[154/220] w-[50vw] justify-center desktop:h-[220px] desktop:w-[154px]`}
            >
              <ComponentStroke onClick={() => console.log(idx)} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default FlowerFrame
