import {
  청량한_한여름밤의_꿈,
  신비로운_새벽_하늘,
  햇살_가득한_향기,
  초승달처럼_빛나는_미소,
  가느다란_안개_속_오솔길,
  달콤한_소원,
  반짝이는_달빛_호수,
  반짝이는_하늘별,
  봄날의_첫사랑,
  부드러운_사랑의_온기,
  빛나는_새로운_시작,
  산새소리에_깃든_선율,
  새싹처럼_피어난_산하늘,
  신비로운_미래의_이슬,
  우아한_나비의_향연,
  은은한_오로라,
  차분한_노랫소리,
  평온_속_고요한_숲,
  화려한_푸른_달빛,
  화양연화,
} from '../'

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

const flowerStroke: FlowerStrokeType = {
  '청량한-한여름밤의-꿈': 청량한_한여름밤의_꿈,
  '신비로운-새벽-하늘': 신비로운_새벽_하늘,
  '햇살-가득한-향기': 햇살_가득한_향기,
  '초승달처럼-빛나는-미소': 초승달처럼_빛나는_미소,
  '가느다란-안개-속-오솔길': 가느다란_안개_속_오솔길,
  '달콤한-소원': 달콤한_소원,
  '반짝이는-달빛-호수': 반짝이는_달빛_호수,
  '반짝이는-하늘별': 반짝이는_하늘별,
  '봄날의-첫사랑': 봄날의_첫사랑,
  '부드러운-사랑의-온기': 부드러운_사랑의_온기,
  '빛나는-새로운-시작': 빛나는_새로운_시작,
  '산새소리에-깃든-선율': 산새소리에_깃든_선율,
  '새싹처럼-피어난-산하늘': 새싹처럼_피어난_산하늘,
  '신비로운-미래의-이슬': 신비로운_미래의_이슬,
  '우아한-나비의-향연': 우아한_나비의_향연,
  '은은한-오로라': 은은한_오로라,
  '차분한-노랫소리': 차분한_노랫소리,
  '평온-속-고요한-숲': 평온_속_고요한_숲,
  '화려한-푸른-달빛': 화려한_푸른_달빛,
  화양연화,
}

const FlowerFrame = ({ flowers }: FlowerFrameProps) => {
  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/bigItems/${name}.png`, import.meta.url)
      .href
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
