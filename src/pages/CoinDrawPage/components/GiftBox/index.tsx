import { useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh, TextureLoader } from 'three'
import { Box, PerspectiveCamera } from '@react-three/drei'

const GiftBox = () => {
  const boxRef = useRef<Mesh>(null)
  const [animate, setAnimate] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)

  const texture = useLoader(
    TextureLoader,
    new URL('@/assets/images/wrapper.jpeg', import.meta.url).href,
  )

  const handleAnimation = () => {
    if (animate) return

    const timer = setTimeout(() => {
      setAnimate(false)

      if (!boxRef.current) return
      boxRef.current.rotation.z = 0
    }, 1500)

    setAnimate(true)

    return () => clearTimeout(timer)
  }

  useFrame(({ clock }) => {
    if (!animate || !boxRef.current) {
      if (boxRef.current) {
        boxRef.current.rotation.z = 0
      }

      return
    }

    const time = clock.getElapsedTime()
    // 시간에 따라 회전 각도를 조정하여 시소 움직임 구현
    boxRef.current.rotation.z = Math.sin(time * 10) * Math.PI * 0.06
  })

  const handleClickBox = () => {
    handleAnimation()
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -2, 20]} />
      <Box
        ref={boxRef}
        scale={hovered ? [4.1, 4.1, 4.1] : [4, 4, 4]}
        args={[1, 1, 1]}
        position={[0, 0.5, 1]}
        onPointerDown={handleClickBox} // click
        onPointerOver={() => setHovered(true)} // hover
        onPointerOut={() => setHovered(false)}
        rotation={[0.4, -0.5, 0]}
      >
        <meshStandardMaterial map={texture} attach="material" />
      </Box>
    </>
  )
}

export default GiftBox
