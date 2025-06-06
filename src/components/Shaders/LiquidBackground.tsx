'use client';

import React, { useRef } from 'react';
import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useTheme } from 'styled-components';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    vec2 fragCoord = vUv * uResolution;
    vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

    for(float i = 1.0; i < 10.0; i++) {
      uv.x += 0.5 / i * cos(i * 2.5 * uv.y + uTime);
      uv.y += 0.5 / i * cos(i * 1.5 * uv.x + uTime);
    }

    vec3 color = uColor / abs(sin(uTime - uv.y - uv.x));
    gl_FragColor = vec4(color, 1.0);
  }
`;

const LiquidMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(0, 0),
    uColor: new THREE.Color(0, 0, 0),
  },
  vertexShader,
  fragmentShader
);

extend({ LiquidMaterial });

interface LiquidMaterialType extends THREE.ShaderMaterial {
  uniforms: {
    uTime: { value: number };
    uResolution: { value: THREE.Vector2 };
    uColor: { value: THREE.Color };
  };
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    liquidMaterial: any;
  }
}

interface LiquidBackgroundProps {
  color?: string;
}

const LiquidBackground: React.FC<LiquidBackgroundProps> = props => {
  const theme = useTheme();

  const { color = theme?.COLOR.PRIMARY || '#1a1a1a' } = props;
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<LiquidMaterialType>(null);

  const { width, height } = useThree(state => state.size);
  const aspect = width / height;

  useFrame(({ clock, size }) => {
    if (!materialRef.current) return;
    const speedFactor = 0.5;
    materialRef.current.uniforms.uTime.value =
      clock.getElapsedTime() * speedFactor;
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);

    if (color) {
      materialRef.current.uniforms.uColor.value.set(color);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[aspect * 2, 2]} />
      <liquidMaterial ref={materialRef} />
    </mesh>
  );
};

export default LiquidBackground;
