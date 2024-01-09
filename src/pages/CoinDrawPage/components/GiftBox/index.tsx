import { useFrame, useLoader } from '@react-three/fiber'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Mesh, TextureLoader } from 'three'
import { Box, PerspectiveCamera } from '@react-three/drei'

interface GiftBoxProps {
  haveTodayChance: boolean
  setDrawingStatus: Dispatch<SetStateAction<'before' | 'loading' | 'after'>>
}

const GiftBox = ({ haveTodayChance, setDrawingStatus }: GiftBoxProps) => {
  const boxRef = useRef<Mesh>(null)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [scale, setScale] = useState<number>(6)

  const texture = useLoader(
    TextureLoader,
    new URL('@/assets/images/wrapper.jpeg', import.meta.url).href,
  )

  const openBox = useCallback(() => {
    setIsAnimating(true)
    setScale(7) // 클릭 시 상자를 확대
    setDrawingStatus('loading')

    setTimeout(() => {
      setIsAnimating(false)
      setScale(6) // 애니메이션 종료 후 원래 크기로
      setDrawingStatus('after')
    }, 2000) // 1.5초 후에 애니메이션 종료
  }, [setDrawingStatus])

  useEffect(() => {
    if (haveTodayChance) return

    openBox()
  }, [haveTodayChance, openBox])

  useFrame(({ clock }) => {
    if (boxRef.current) {
      const currentScale = boxRef.current.scale.x
      const time = clock.getElapsedTime()

      // scale 변경
      boxRef.current.scale.set(
        currentScale + (scale - currentScale) * 0.1,
        currentScale + (scale - currentScale) * 0.1,
        currentScale + (scale - currentScale) * 0.1,
      )

      // 꿈틀꿈틀 거리는 애니메이션
      boxRef.current.rotation.z = isAnimating
        ? Math.sin(time * 10) * Math.PI * 0.06
        : 0
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -2, 20]} />
      <Box
        ref={boxRef}
        args={[1, 1, 1]}
        position={[0, -2, 2]}
        rotation={[0.4, -0.5, 0]}
      >
        <meshStandardMaterial map={texture} attach="material" />
      </Box>
    </>
  )
}

export default GiftBox
