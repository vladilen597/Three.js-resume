import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import React from 'react'
import floor from './images/floor.png'

const Plane = ({ props }) => {
  const floorMap = useTexture(floor)
  floorMap.wrapS = floorMap.wrapT = THREE.RepeatWrapping

  return (
    <mesh position={[0, -1, 0]} rotation={[Math.PI * 1.5, 0, 0]}>
      <planeGeometry args={[64, 64]} />
      <meshStandardMaterial map={floorMap} map-repeat={[8, 8]} />
    </mesh>
  )
}

export default Plane
