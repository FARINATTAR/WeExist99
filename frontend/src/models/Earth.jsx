import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      scene.scale.set(7, 7, 7); // Ensure it's centered and scaled correctly
      modelRef.current.position.set(0, 0, 0);
    }
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

const Earth = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Canvas
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
        camera={{ position: [0, 0, 20], fov: 50 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
        <ambientLight intensity={1} />
        <directionalLight intensity={2} position={[5, 5, 5]} />
        <pointLight intensity={1} position={[10, 10, 10]} />
        <Model url="/earth-model/scene.gltf" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default Earth;
