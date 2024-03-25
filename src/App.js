import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import Box from './components/Shared/Box/Box'
import { Float, OrbitControls } from '@react-three/drei'
import Plane from './components/Shared/Plane/Plane'
import Wall from './components/Shared/Wall/Wall'
import Chain from './components/Shared/Chain/Chain'

function App() {
  return (
    <div className='app'>
      <Suspense fallback={null}>
        <Canvas style={{ height: '100vh' }} shadows>
          <color attach='background' args={['#131862', '#2e4482']} />
          <Float rotationIntensity={0}>
            <OrbitControls />
            <ambientLight intensity={0.3} />
            <directionalLight
              position={[0, 5, 1]}
              intensity={2}
              color={'white'}
              castShadow
            />
            <Box position={[5, 0, 0]} />
            <Box position={[5, 2, 0]} />
            <Box position={[-5, 0, 0]} />
            <Box position={[-5, 2, 0]} />

            <Box position={[5, 0, -4.25]} />
            <Box position={[5, 2, -4.25]} />
            <Box position={[-5, 0, -4.25]} />
            <Box position={[-5, 2, -4.25]} />
            <Box position={[-5, 4, -4.25]} />

            <Chain position={[-2, 4, 0]} />
            <Chain position={[2, 4, 0]} />

            <Box position={[5, 0, -8.5]} />
            <Box position={[5, 2, -8.5]} />
            <Box position={[5, 4, -8.5]} />
            <Box position={[-5, 0, -8.5]} />
            <Box position={[-5, 2, -8.5]} />
            <Box position={[-5, 4, -8.5]} />
            <Wall position={[-8, 2, 0]} />
            <Wall position={[8, 2, 0]} />
            <Plane />
          </Float>
          <Wall position={[0, 2, -12]} rotation={[0, Math.PI * 0.5, 0]} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
