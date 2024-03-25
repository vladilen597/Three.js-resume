import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import React from 'react'
import wallTexture from './images/wall.png'

const Wall = (props) => {
  const wall = useTexture(wallTexture)
  wall.wrapS = wall.wrapT = THREE.RepeatWrapping

  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[2, 8, 25]} />
      <meshStandardMaterial map={wall} map-repeat={[10, 10]} />
    </mesh>
  )
}

export default Wall
