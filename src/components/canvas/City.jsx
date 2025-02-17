import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const City = ({ isMobile }) => {
   const city = useGLTF('../../public/cybercity/scene.gltf')

   return (
      <mesh>
         <hemisphereLight intensity={0.15} groundColor="black" />
         <pointLight color="#915eff" intensity={15} />
         <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
         <primitive object={city.scene} scale={1.5} position={[2, -3.25, -2.4]} rotation={[0, -Math.PI / 1.5, 0]} />
      </mesh>
   )
}

const CityCanvas = () => {
   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)')

      setIsMobile(mediaQuery.matches)
  
      const handleMediaQueryChange = (e) => {
        setIsMobile(e.matches)
      }
  
      mediaQuery.addEventListener('change', handleMediaQueryChange)
  
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
   }, [])

   return (
      <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 20 }} gl={{ preserveDrawingBuffer: true }} >
         <Suspense fallback={ <CanvasLoader/> }>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <City isMobile={isMobile} />
         </Suspense>

         <Preload all/>
      </Canvas>
   )
}

export default CityCanvas
