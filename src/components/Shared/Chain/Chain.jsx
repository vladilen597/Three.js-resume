import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

const Chain = (props) => {
  const { scene } = useGLTF('chain/scene.gltf')
  const copiedScene = useMemo(() => scene.clone(), [scene])

  return (
    <group {...props}>
      <primitive object={copiedScene} scale={0.001} />
    </group>
  )
}

export default Chain
