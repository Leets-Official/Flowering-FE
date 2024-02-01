import { Button, Header } from '@/components'
// import { GiftBox } from './components'
// import { Canvas } from '@react-three/fiber'
import { useState, useMemo } from 'react'
import { CoinIcon } from '@/assets/Icons'
import { ICONS } from '@/constants'
import { useGetUser } from '@/apis/hooks'

const CoinDrawPage = () => {
  // imsy 데이터
  const [haveTodayChance, setHaveTodayChance] = useState<boolean>(true)
  const [drawingStatus, setDrawingStatus] = useState<
    'before' | 'loading' | 'after'
  >('before')
  const [getCoinValue, setGetCoinValue] = useState<number>(0)
  const [isWiggling, setIsWiggling] = useState<boolean>(false)

  const { data: userInfo } = useGetUser()

  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/giftBox/${name}.png`, import.meta.url)
      .href
  }

  const clickCoinBox = () => {
    if (drawingStatus === 'before') return
    setIsWiggling(false)
    setHaveTodayChance(false)
    setDrawingStatus('after')
  }

  const getRandomNumber = useMemo(() => {
    return (
      Math.round((Math.floor(Math.random() * (500 - 50 + 1)) + 50) / 10) * 10
    )
  }, [])

  const handleClickButton = () => {
    setIsWiggling(true)
    setDrawingStatus('loading')
    setGetCoinValue(getRandomNumber)
  }

  return (
    <>
      <Header leftIcon={ICONS.HOME} />
      <div className="relative flex h-full flex-col justify-between px-6 py-2">
        <div
          className={`${
            drawingStatus !== 'before' && 'invisible'
          } flex flex-col gap-2`}
        >
          <div className="text-base font-light text-[rgb(103,103,103)]">
            <p>{userInfo.nickname} 님이</p>
            <p>현재 보유하고 있는 코인</p>
          </div>
          <div className="flex items-center gap-1.5">
            <CoinIcon />
            <p className="text-xl font-bold">
              {userInfo.coin.toLocaleString()} 코인
            </p>
          </div>
        </div>
        {drawingStatus === 'after' && (
          <div className="absolute left-0 top-[10%] flex w-full flex-col items-center justify-center gap-2">
            <h2 className="font-lg text-[#5B5B5B]">축하합니다!</h2>
            <div className="flex flex-col gap-1.5 text-center">
              <h1 className="font-xl text-[#282828]">{`${getCoinValue} 코인`}</h1>
              <p className="font-lg text-[#d9d9d9]">
                상점에서 선물을 구매해보세요.
              </p>
            </div>
          </div>
        )}
        <div className="flex w-full justify-center">
          {drawingStatus !== 'after' ? (
            <img
              src={getImageUrl('giftBox')}
              alt="giftBox"
              onClick={clickCoinBox}
              className={`${isWiggling && 'animate-wiggle'}`}
            />
          ) : (
            <div className="flex w-full flex-col items-center justify-center">
              <img
                src={getImageUrl('giftBoxTop')}
                alt="giftBox"
                onClick={clickCoinBox}
                className={`w-[53%]`}
              />
              <img
                src={getImageUrl('giftBoxBottom')}
                alt="giftBox"
                onClick={clickCoinBox}
                className={`w-[98%]`}
              />
            </div>
          )}
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
          {drawingStatus === 'loading' && (
            <p className="font-lg w-full py-4 text-center text-gray-400">
              상자를 터치해 보세요!
            </p>
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
