import { Header, GiftBox } from './components'
import { Canvas } from '@react-three/fiber'

const userName = '주하'
const userCoin = 3000

const CoinDrawPage = () => {
  return (
    <>
      <Header />
      <div className="flex h-full flex-col bg-gray-200 px-6 py-2">
        <div className="flex flex-col gap-2">
          <div className="text-base font-light text-[#676767]">
            <p>{userName} 님이</p>
            <p>현재 보유하고 있는 코인</p>
          </div>
          <p className="text-xl font-bold">{userCoin.toLocaleString()} 코인</p>
        </div>
        <div className="flex h-full">
          <Canvas>
            <ambientLight intensity={5} />
            <pointLight position={[10, 10, 10]} />
            <GiftBox />
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default CoinDrawPage
