import React, { useRef, useEffect, Suspense } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  const [colorMap, normalMap, roughnessMap, cloudsMap] = useTexture([
    '/earth-model/textures/earth_basecolor.jpeg',
    '/earth-model/textures/normal.jpeg',
    '/earth-model/textures/metallic_roughness.png',
    '/earth-model/textures/earth_cloud.jpeg',
  ]);

  useEffect(() => {
    [colorMap, normalMap, roughnessMap].forEach((texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.anisotropy = 16;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
    });

    normalMap.encoding = THREE.LinearEncoding;
  }, [colorMap, normalMap, roughnessMap]);

  useEffect(() => {
    if (modelRef.current) {
      scene.scale.set(6, 6, 6);
      modelRef.current.position.set(0, 0, 0);

      // Set the initial rotation here for a more textured start position
      modelRef.current.rotation.y = Math.PI / 4; // Adjust this value as needed
      modelRef.current.rotation.x = Math.PI / 270;

      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhysicalMaterial({
            map: colorMap,
            normalMap: normalMap,
            normalScale: new THREE.Vector2(2.5, 2.5),
            roughnessMap: roughnessMap,
            roughness: 0.8, 
            metalness: 0.05, 
            clearcoat: 0.3, 
            clearcoatRoughness: 0.4,
            envMapIntensity: 1.2,
            side: THREE.FrontSide,
          });

          child.material.onBeforeCompile = (shader) => {
            shader.fragmentShader = shader.fragmentShader.replace(
              '#include <color_fragment>',
              `
              #include <color_fragment>
              vec3 texColor = diffuseColor.rgb;
              vec3 oceanColor = vec3(0.07, 0.15, 1.5);
              vec3 landColor = vec3(0.2, 1.5, 0.15);
              float landMask = smoothstep(0.35, 0.65, texColor.g);
              diffuseColor.rgb = mix(
                mix(oceanColor, texColor, 0.5),
                mix(landColor, texColor, 0.7),
                landMask
              );
              diffuseColor.rgb = pow(diffuseColor.rgb, vec3(0.95));
              `
            );
          };

          child.material.emissive = new THREE.Color(0x112244);
          child.material.emissiveIntensity = 0.1;
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene, colorMap, normalMap, roughnessMap]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Slower rotation for Earth
    }
  });

  const cloudsRef = useRef();
  useFrame(() => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0015; // Faster rotation for clouds
    }
  });

  return (
    <>
      <primitive ref={modelRef} object={scene} />
      <mesh ref={cloudsRef} scale={[6.1, 6.1, 6.1]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.2}
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          roughness={1}
          metalness={0}
        />
      </mesh>
      <mesh scale={[6.4, 6.4, 6.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color="#4169e1"
          transparent={true}
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

const Earth = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Canvas
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
        camera={{ position: [0, 0, 20], fov: 45 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={45} />
        <ambientLight intensity={0.4} />
        <directionalLight
          intensity={1.8}
          position={[5, 3, 5]}
          castShadow
          color="#fdfbd3"
        />
        <pointLight intensity={0.5} position={[-10, -10, -10]} color="#4169e1" />
        <hemisphereLight
          intensity={0.4}
          color="#ffffff"
          groundColor="#000033"
        />
        <Suspense fallback={null}>
          <Model url="/earth-model/scene.gltf" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          minDistance={12}
          maxDistance={30}
          enablePan={false}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Earth;
