import { Button } from '@/components'
import { Header, GiftBox } from './components'
import { Canvas } from '@react-three/fiber'
import { useState, useMemo } from 'react'
import { CoinIcon } from '@/assets/Icons'

// imsy 데이터
const userName = '주하'
const userCoin = 3000

const CoinDrawPage = () => {
  // imsy 데이터
  const [haveTodayChance, setHaveTodayChance] = useState<boolean>(true)
  const [drawingStatus, setDrawingStatus] = useState<
    'before' | 'loading' | 'after'
  >('before')
  const [getCoinValue, setGetCoinValue] = useState<number>(0)

  const getRandomNumber = useMemo(() => {
    return (
      Math.round((Math.floor(Math.random() * (500 - 50 + 1)) + 50) / 10) * 10
    )
  }, [])

  const handleClickButton = () => {
    setHaveTodayChance(false)
    setDrawingStatus('loading')
    setGetCoinValue(getRandomNumber)
  }

  return (
    <>
      <Header />
      <div className="relative flex h-full flex-col justify-between px-6 py-2">
        <div
          className={`${
            drawingStatus !== 'before' && 'invisible'
          } flex flex-col gap-2`}
        >
          <div className="text-base font-light text-[rgb(103,103,103)]">
            <p>{userName} 님이</p>
            <p>현재 보유하고 있는 코인</p>
          </div>
          <div className="flex items-center gap-1.5">
            <CoinIcon />
            <p className="text-xl font-bold">
              {userCoin.toLocaleString()} 코인
            </p>
          </div>
        </div>
        {drawingStatus === 'after' && (
          <div className="absolute left-0 top-[10%] flex w-full flex-col items-center justify-center gap-2">
            <h2>축하합니다!</h2>
            <div className="flex flex-col gap-1.5 text-center">
              <h1 className="text-xl font-bold">{`${getCoinValue} 코인`}</h1>
              <p className="text-[#d9d9d9]">상점에서 선물을 구매해보세요.</p>
            </div>
          </div>
        )}

        <div className="flex min-h-[400px] shrink">
          <Canvas>
            <ambientLight intensity={5} />
            <pointLight position={[10, 10, 10]} />
            <GiftBox
              haveTodayChance={haveTodayChance}
              setDrawingStatus={setDrawingStatus}
            />
          </Canvas>
        </div>

        <div className="flex flex-col justify-center gap-[0.44rem] py-3">
          {drawingStatus === 'before' && (
            <>
              <p className="text-center text-xs font-light text-[#959595]">
                {haveTodayChance ? '1/1' : '0/1'}
              </p>
              <Button className="w-full" onClick={handleClickButton}>
                {haveTodayChance ? '코인 뽑기' : '기회 끝'}
              </Button>
            </>
          )}
          {drawingStatus === 'after' && (
            <Button className="w-full">상점가기</Button>
          )}
        </div>
      </div>
    </>
  )
}

export default CoinDrawPage
