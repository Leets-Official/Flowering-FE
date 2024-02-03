import { Button, Header } from '@/components'
import { useState, useMemo } from 'react'
import { CoinIcon } from '@/assets/Icons'
import { ICONS } from '@/constants'
import { useNavigate } from 'react-router'
import { useGetUser, usePostCoin } from '@/apis/hooks'

const CoinDrawPage = () => {
  const [drawingStatus, setDrawingStatus] = useState<
    'before' | 'loading' | 'after'
  >('before')
  const [getCoinValue, setGetCoinValue] = useState<number>(0)
  const [isWiggling, setIsWiggling] = useState<boolean>(false)
  const navigate = useNavigate()

  const { data: userInfo } = useGetUser()
  const { mutate: addCoin } = usePostCoin()

  console.log(userInfo.coinAlreadyDrawn)

  const getGiftBoxImageUrl = (name: string) => {
    return new URL(`/src/assets/images/giftBox/${name}.png`, import.meta.url)
      .href
  }

  const getBackgroundImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

  const getRandomNumber = useMemo(() => {
    return (Math.floor(Math.random() * (70 - 30 + 1)) + 30) * 10
  }, [])

  const clickCoinBox = () => {
    if (drawingStatus === 'before') return
    setIsWiggling(false)
    addCoin({ coin: getCoinValue })
    setDrawingStatus('after')
  }

  const handleClickButton = () => {
    setIsWiggling(true)
    setDrawingStatus('loading')
    setGetCoinValue(getRandomNumber)
  }

  return (
    <div
      className="relative flex h-dvh flex-col"
      style={{
        backgroundImage: `${drawingStatus === 'after' && `url(${getBackgroundImageUrl('coinBackground')})`}`,
      }}
    >
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
          <div className="absolute left-0 top-[10%] flex w-full flex-col items-center justify-center gap-2 bg-white/85 px-4 py-3">
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
              src={getGiftBoxImageUrl('giftBox')}
              alt="giftBox"
              onClick={clickCoinBox}
              className={`${isWiggling && 'animate-wiggle'} ${drawingStatus === 'loading' ? 'w-[75%]' : 'w-[65%]'}`}
            />
          ) : (
            <div className="flex w-full flex-col items-center justify-center">
              <img
                src={getGiftBoxImageUrl('giftBoxTop')}
                alt="giftBox"
                onClick={clickCoinBox}
                className={`w-[53%]`}
              />
              <img
                src={getGiftBoxImageUrl('giftBoxBottom')}
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
                {userInfo.coinAlreadyDrawn ? '0/1' : '1/1'}
              </p>
              <Button
                className={`w-full`}
                disabled={userInfo.coinAlreadyDrawn}
                onClick={handleClickButton}
              >
                {userInfo.coinAlreadyDrawn ? '기회 끝' : '코인 뽑기'}
              </Button>
            </>
          )}
          {drawingStatus === 'loading' && (
            <p className="font-lg w-full py-4 text-center text-gray-400">
              상자를 터치해 보세요!
            </p>
          )}
          {drawingStatus === 'after' && (
            <Button className="w-full" onClick={() => navigate('/store')}>
              상점가기
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoinDrawPage
