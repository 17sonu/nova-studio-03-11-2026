import { useMemo, useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { plasmaVertexShader, plasmaFragmentShader } from "./PlasmaShader";
import { SpherePhysics } from "./SpherePhysics";

const PlasmaMaterial = shaderMaterial(
  { uTime: 0, uPulse: 0, uOpacity: 1, uViolet: 0 },
  plasmaVertexShader,
  plasmaFragmentShader
);
extend({ PlasmaMaterial });

function OrbitParticles({ opacity }) {
  const points = useRef();
  const particleMaterial = useRef();
  const positions = useMemo(() => {
    const values = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.25 + Math.random() * .42;
      values[i*3] = Math.cos(a) * r;
      values[i*3+1] = (Math.random() - .5) * 2.1;
      values[i*3+2] = Math.sin(a) * r;
    }
    return values;
  }, []);
  useFrame((state, delta) => {
    if (points.current) points.current.rotation.y += delta * .16;
    if (particleMaterial.current) particleMaterial.current.opacity = opacity.current * .72;
  });
  return <points ref={points}>
    <bufferGeometry><bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} /></bufferGeometry>
    <pointsMaterial ref={particleMaterial} color="#8ceaff" size={0.022} transparent opacity={0.72} sizeAttenuation depthWrite={false} />
  </points>;
}

export default function PlasmaSphere({ motion }) {
  const group = useRef();
  const material = useRef();
  const shellMaterial = useRef();
  const light = useRef();
  const physics = useMemo(() => new SpherePhysics(), []);
  const time = useRef(0);
  const lastSurge = useRef(0);
  const opacity = useRef(1);

  useFrame((state, delta) => {
    if (!group.current) return;
    const dt = Math.min(delta, .04);
    const target = motion.current;
    time.current += dt;

    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, target.x, 2.8, dt);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, target.y + physics.step(dt) * .2, 3.4, dt);
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, target.z || 0, 2.5, dt);

    const desiredScale = target.scale || 1;
    const scale = THREE.MathUtils.damp(group.current.scale.x, desiredScale, 3.8, dt);
    group.current.scale.setScalar(scale);

    opacity.current = THREE.MathUtils.damp(opacity.current, target.opacity, 3.2, dt);
    group.current.visible = opacity.current > 0.002;

    group.current.rotation.y += dt * .22;
    group.current.rotation.x += dt * .09;

    if (material.current) {
      material.current.uTime = time.current;
      material.current.uPulse = .5 + .5 * Math.sin(time.current * 1.7);
      material.current.uOpacity = opacity.current;
      material.current.uViolet = target.tone || 0;
    }
    if (shellMaterial.current) shellMaterial.current.opacity = .075 * opacity.current;
    if (light.current) light.current.intensity = 2.1 * opacity.current;

    if (time.current - lastSurge.current > 8) {
      physics.nudge(.7 + Math.random() * .7);
      lastSurge.current = time.current;
    }
  });

  return (
    <group ref={group} scale={0.001}>
      <mesh>
        <sphereGeometry args={[1, 96, 96]} />
        <plasmaMaterial ref={material} transparent depthWrite={false} />
      </mesh>
      <mesh scale={1.055}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial ref={shellMaterial} color="#398aff" transparent opacity={0.075} depthWrite={false} side={THREE.BackSide} />
      </mesh>
      <OrbitParticles opacity={opacity} />
      <pointLight ref={light} color="#338bff" intensity={2.1} distance={4.5} />
    </group>
  );
}
