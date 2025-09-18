import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import InteractiveMap from './InteractiveMap';
import { Card } from '@/components/ui/card';

const GeographicScene = ({ onLocationSelect }: { onLocationSelect?: (location: any) => void }) => {
  return (
    <div className="w-full h-full relative">
      {/* 3D Globe Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Environment preset="night" />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          {/* Earth Globe */}
          <mesh>
            <sphereGeometry args={[1, 64, 32]} />
            <meshStandardMaterial 
              color="#4fc3f7" 
              transparent 
              opacity={0.8}
              wireframe
            />
          </mesh>
          
          <Text position={[0, 2, 0]} fontSize={0.2} color="white">
            Geographic Explorer
          </Text>
        </Canvas>
      </div>

      {/* Interactive Map Overlay */}
      <div className="absolute inset-0 z-10">
        <InteractiveMap 
          mapType="geography"
          onLocationSelect={onLocationSelect}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default GeographicScene;