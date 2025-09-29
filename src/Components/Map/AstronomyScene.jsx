// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Environment, Text, Sphere, Stars } from '@react-three/drei';
// import InteractiveMap from './InteractiveMap';
// import { Mesh } from 'three';

// const StarField = () => {
//   const starsRef = useRef(null);
  
//   useFrame((state) => {
//     if (starsRef.current) {
//       starsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
//     }
//   });

//   return (
//     <group ref={starsRef}>
//       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
//       {/* Distant galaxies/nebulae */}
//       <Sphere args={[0.1]} position={[5, 2, -8]}>
//         <meshBasicMaterial color="#9C27B0" transparent opacity={0.6} />
//       </Sphere>
//       <Sphere args={[0.15]} position={[-6, -1, -10]}>
//         <meshBasicMaterial color="#FF5722" transparent opacity={0.4} />
//       </Sphere>
//       <Sphere args={[0.08]} position={[3, -3, -7]}>
//         <meshBasicMaterial color="#2196F3" transparent opacity={0.7} />
//       </Sphere>
//     </group>
//   );
// };

// const AstronomyScene = ({ onLocationSelect }: { onLocationSelect?: (location: any) => void }) => {
//   return (
//     <div className="w-full h-full relative">
//       {/* 3D Space Background */}
//       <div className="absolute inset-0 opacity-60">
//         <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//           <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.1} />
//           <Environment preset="night" />
          
//           <StarField />
          
//           {/* Earth for reference */}
//           <Sphere args={[0.8]} position={[0, 0, 0]}>
//             <meshStandardMaterial 
//               color="#1976D2" 
//               transparent 
//               opacity={0.8}
//               emissive="#001f3f"
//               emissiveIntensity={0.2}
//             />
//           </Sphere>
          
//           <Text position={[0, 3, 0]} fontSize={0.3} color="#E3F2FD">
//             Astronomy Explorer
//           </Text>
//           <Text position={[0, -3, 0]} fontSize={0.15} color="#BBDEFB">
//             Observatory Locations Worldwide
//           </Text>
//         </Canvas>
//       </div>

//       {/* Interactive Map Overlay */}
//       <div className="absolute inset-0 z-10">
//         <InteractiveMap 
//           mapType="astronomy"
//           onLocationSelect={onLocationSelect}
//           className="w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default AstronomyScene;