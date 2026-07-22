"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WOOD = "#8c5e3c";
const WOOD_DARK = "#6b4226";
const FABRIC = "#3f5b4c";
const FABRIC_LIGHT = "#557a66";
const BRASS = "#c08a3e";
const FLOOR = "#e9dfd3";

function Room() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y += delta * 0.18;
    group.current.position.y = Math.sin(t * 0.8) * 0.06;
  });

  return (
    <group ref={group} position={[0, -0.6, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <cylinderGeometry args={[2.6, 2.6, 0.04, 48]} />
        <meshStandardMaterial color={FLOOR} roughness={0.9} />
      </mesh>

      {/* Sofa base */}
      <mesh position={[-0.9, 0.32, -0.5]} castShadow>
        <boxGeometry args={[1.7, 0.45, 0.75]} />
        <meshStandardMaterial color={FABRIC} roughness={0.85} />
      </mesh>
      {/* Sofa back */}
      <mesh position={[-0.9, 0.75, -0.82]} castShadow>
        <boxGeometry args={[1.7, 0.75, 0.18]} />
        <meshStandardMaterial color={FABRIC} roughness={0.85} />
      </mesh>
      {/* Sofa arms */}
      <mesh position={[-1.83, 0.55, -0.5]} castShadow>
        <boxGeometry args={[0.18, 0.75, 0.75]} />
        <meshStandardMaterial color={FABRIC_LIGHT} roughness={0.85} />
      </mesh>
      <mesh position={[0.03, 0.55, -0.5]} castShadow>
        <boxGeometry args={[0.18, 0.75, 0.75]} />
        <meshStandardMaterial color={FABRIC_LIGHT} roughness={0.85} />
      </mesh>
      {/* Cushions */}
      <mesh position={[-1.3, 0.62, -0.42]} castShadow>
        <boxGeometry args={[0.7, 0.22, 0.6]} />
        <meshStandardMaterial color={FABRIC_LIGHT} roughness={0.9} />
      </mesh>
      <mesh position={[-0.5, 0.62, -0.42]} castShadow>
        <boxGeometry args={[0.7, 0.22, 0.6]} />
        <meshStandardMaterial color={FABRIC_LIGHT} roughness={0.9} />
      </mesh>

      {/* Coffee table top */}
      <mesh position={[0.2, 0.5, 0.7]} castShadow>
        <boxGeometry args={[1.3, 0.08, 0.7]} />
        <meshStandardMaterial color={WOOD} roughness={0.55} />
      </mesh>
      {/* Coffee table legs */}
      {[
        [-0.35, 0.45],
        [0.75, 0.45],
        [-0.35, 0.95],
        [0.75, 0.95],
      ].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, 0.24, z]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 0.46, 12]} />
          <meshStandardMaterial color={WOOD_DARK} roughness={0.6} />
        </mesh>
      ))}

      {/* Wood wall panel */}
      <mesh position={[0.6, 1.15, -1.35]} castShadow>
        <boxGeometry args={[2.2, 2.0, 0.08]} />
        <meshStandardMaterial color={WOOD} roughness={0.7} />
      </mesh>
      {/* Panel slats */}
      {[-0.2, 0.2, 0.6, 1.0, 1.4].map((x) => (
        <mesh key={x} position={[x, 1.15, -1.29]}>
          <boxGeometry args={[0.06, 2.0, 0.04]} />
          <meshStandardMaterial color={WOOD_DARK} roughness={0.65} />
        </mesh>
      ))}

      {/* Pendant lamp */}
      <mesh position={[0.2, 1.6, 0.7]} castShadow>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color={BRASS}
          roughness={0.3}
          metalness={0.6}
          emissive={BRASS}
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh position={[0.2, 2.0, 0.7]}>
        <cylinderGeometry args={[0.012, 0.012, 0.7, 8]} />
        <meshStandardMaterial color={WOOD_DARK} />
      </mesh>

      {/* Plant */}
      <mesh position={[-1.9, 0.5, 0.7]} castShadow>
        <cylinderGeometry args={[0.16, 0.2, 0.35, 16]} />
        <meshStandardMaterial color={WOOD_DARK} roughness={0.8} />
      </mesh>
      <mesh position={[-1.9, 0.95, 0.7]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={FABRIC} roughness={0.9} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [3.4, 2.4, 4.6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 3, -2]} intensity={0.35} color="#f3e2c7" />
      <Room />
    </Canvas>
  );
}
