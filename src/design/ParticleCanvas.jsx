import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import circleTexture from '../assets/circle.png';

const Stars = () => {
  const group = useRef();
  const { gl, camera, size } = useThree();
  const [currentRotation, setCurrentRotation] = useState(new THREE.Vector2());
  const targetRotation = useRef(new THREE.Vector2());
  const mouse = useRef(new THREE.Vector2()); // Using useRef for persistent mouse coords.

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [gl]);

  const count = 700;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  const starsGeometry = new THREE.BufferGeometry();
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame(() => {
    if (group.current) {
      targetRotation.current.x = mouse.current.y * 0.05;
      targetRotation.current.y = mouse.current.x * 0.05;

      currentRotation.x = THREE.MathUtils.lerp(
        currentRotation.x,
        targetRotation.current.x,
        0.1
      );
      currentRotation.y = THREE.MathUtils.lerp(
        currentRotation.y,
        targetRotation.current.y,
        0.1
      );

      group.current.rotation.x = currentRotation.x;
      group.current.rotation.y = currentRotation.y;
    }
  });

  return (
    <group ref={group}>
      <points geometry={starsGeometry}>
        <pointsMaterial
          map={new THREE.TextureLoader().load(circleTexture)}
          size={0.2}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          alphaTest={0.5}
          color="white"
        />
      </points>
    </group>
  );
};

const StarrySky = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // Ensure canvas covers hero section
      camera={{ position: [0, 0, 10] }}
    >
      <Stars />
    </Canvas>
  );
};

export default StarrySky;