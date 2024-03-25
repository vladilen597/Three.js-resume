import { Box, Float, OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

const Sphere = (props) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      'textures/metal/Metal001_1K-JPG_Color.jpg',
      'textures/metal/Metal001_1K-JPG_Displacement.jpg',
      'textures/metal/Metal001_1K-JPG_NormalDX.jpg',
      'textures/metal/Metal001_1K-JPG_Roughness.jpg',
    ]
  )
  const sphereRef = useRef()

  useFrame((props) => {
    // sphereRef.current.rotation.x += 0.001
    // sphereRef.current.rotation.x += 0.001
  })

  return (
    <mesh {...props} castShadow ref={sphereRef} useDrag>
      <sphereGeometry args={[2, 64, 64]} />
      {/* <meshStandardMaterial color={'silver'} /> */}
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  )
}

export default Sphere
