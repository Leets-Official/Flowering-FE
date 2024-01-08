import { useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh, TextureLoader } from 'three'
import { Box, PerspectiveCamera } from '@react-three/drei'

const GiftBox = () => {
  const boxRef = useRef<Mesh>(null)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [scale, setScale] = useState<number>(4)

  const texture = useLoader(
    TextureLoader,
    new URL('@/assets/images/wrapper.jpeg', import.meta.url).href,
  )

  const handleClickBox = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setScale(5) // 클릭 시 상자를 확대

      setTimeout(() => {
        setIsAnimating(false)
        setScale(4) // 애니메이션 종료 후 원래 크기로
      }, 1500) // 1.5초 후에 애니메이션 종료
    }
  }

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
        position={[0, 0.5, 1]}
        onPointerDown={handleClickBox}
        rotation={[0.4, -0.5, 0]}
      >
        <meshStandardMaterial map={texture} attach="material" />
      </Box>
    </>
  )
}

export default GiftBox
