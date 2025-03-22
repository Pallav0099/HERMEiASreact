import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Iphone16(props) {
  const { nodes, materials } = useGLTF('./iphone16.glb')
  return (
    <group scale={[3,3,3]} {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-0.328, 2.26, 0.199]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_black002_0.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_basecolor001_0.geometry}
            material={materials['basecolor.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_metaL001_0.geometry}
            material={materials['metaL.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_glass002_0.geometry}
            material={materials['glass.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_apple_logo001_0.geometry}
            material={materials['apple_logo.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_screen001_0.geometry}
            material={materials['screen.001']}
          />
        </group>
        <group position={[-1.412, 78.525, -2.209]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_black002_0.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_glass002_0.geometry}
            material={materials['glass.002']}
          />
        </group>
        <group
          position={[-0.395, -6.001, -38.303]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={1.482}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_black002_0.geometry}
            material={materials['black.002']}
          />
        </group>
        <group
          position={[5.382, 71.83, 25.412]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[8.288, 8.288, 2.595]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_black002_0.geometry}
            material={materials['black.002']}
          />
        </group>
        <group
          position={[5.382, 51.985, 25.276]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[8.288, 8.288, 2.595]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_black002_0.geometry}
            material={materials['black.002']}
          />
        </group>
        <group
          position={[5.382, 61.853, 6.769]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[8.288, 8.288, 2.595]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_black002_0.geometry}
            material={materials['black.002']}
          />
        </group>
        <group position={[2.335, 75.921, 6.84]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021_Material_0.geometry}
            material={materials.Material}
          />
        </group>
        <group
          position={[5.841, 63.502, 15.678]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={19.937}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_glass002_0.geometry}
            material={materials['glass.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_basecolor001_0.geometry}
            material={materials['basecolor.001']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010_black002_0.geometry}
          material={materials['black.002']}
          position={[7.94, 61.852, 6.767]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={3.777}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle011_black002_0.geometry}
          material={materials['black.002']}
          position={[7.825, 71.855, 25.405]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={1.701}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012_black002_0.geometry}
          material={materials['black.002']}
          position={[7.924, 51.987, 25.288]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={2.424}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013_black002_0.geometry}
          material={materials['black.002']}
          position={[-4.604, 78.558, 7.249]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={1.643}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0.034, -79.376, -0.696]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_black002_0.geometry}
          material={materials['black.002']}
          position={[0.848, 47.824, 6.803]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={3.346}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.len11001_glass002_0.geometry}
          material={materials['glass.002']}
          position={[5.382, 71.83, 25.412]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[8.288, 8.288, 2.595]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.len22001_glass002_0.geometry}
          material={materials['glass.002']}
          position={[5.382, 61.853, 6.769]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[8.288, 8.288, 2.595]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.len33001_glass002_0.geometry}
          material={materials['glass.002']}
          position={[5.382, 51.985, 25.276]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[8.288, 8.288, 2.595]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object003_gray001_0.geometry}
          material={materials['gray.001']}
          position={[-0.191, -80.599, -0.721]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_metalframe002_0.geometry}
          material={materials['metalframe.002']}
          position={[5.367, 51.214, 0.79]}
          rotation={[-Math.PI / 4, Math.PI / 2, 0]}
          scale={0.394}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_metaL001_0.geometry}
          material={materials['metaL.001']}
          position={[-0.219, -81.443, 11.407]}
          rotation={[Math.PI / 2, 0, -2.356]}
          scale={1.058}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_metaL001_0.geometry}
          material={materials['metaL.001']}
          position={[-0.219, -81.443, -20.018]}
          rotation={[Math.PI / 2, 0, -2.356]}
          scale={1.058}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_lensinglass_0.geometry}
          material={materials.lensinglass}
          position={[7.297, 71.865, 25.4]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.557, 1.255, 1.255]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_lensinglass_0.geometry}
          material={materials.lensinglass}
          position={[7.337, 51.995, 25.291]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.952, 2.145, 2.145]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere012_lensinglass_0.geometry}
          material={materials.lensinglass}
          position={[7.375, 61.87, 6.748]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.641, 2.918, 2.918]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013_lensinglass_0.geometry}
          material={materials.lensinglass}
          position={[-4.094, 78.567, 7.254]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[0.538, 1.212, 1.212]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./iphone16.glb')