import { useTexture } from '@react-three/drei'
import containerTextureFront from './images/container-front.jpg'
import containerTextureSide from './images/container-side.jpg'
import React from 'react'

const Box = (props) => {
  const containerMap1 = useTexture(containerTextureFront)
  const containerMap2 = useTexture(containerTextureSide)

  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 4]} />
      <meshStandardMaterial attach='material-0' map={containerMap2} />
      <meshStandardMaterial attach='material-1' map={containerMap2} />
      <meshStandardMaterial attach='material-2' map={containerMap2} />
      <meshStandardMaterial attach='material-3' map={containerMap2} />
      <meshStandardMaterial attach='material-4' map={containerMap1} />
      <meshStandardMaterial attach='material-5' map={containerMap1} />
    </mesh>
  )
}

export default Box
