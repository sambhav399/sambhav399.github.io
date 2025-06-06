import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { ReactLenis } from 'lenis/react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import BGTexture from '@/assets/images/bg_texture.png';

const MousePointer = dynamic(() => import('@/components/Shaders/MousePointer'));
const LiquidBackground = dynamic(
  () => import('@/components/Shaders/LiquidBackground')
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const refLenis = React.useRef<any>(null);

  React.useEffect(() => {
    let animationFrameId: number;

    const update = (time: number) => {
      refLenis.current?.lenis?.raf(time);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.15,
        }}
      >
        <LiquidBackground />
      </Canvas>
      <Styled.BaseTexture />
      <MousePointer />
      <ReactLenis root options={{ autoRaf: false }} ref={refLenis}>
        <Styled.Layout className="container">{children}</Styled.Layout>
      </ReactLenis>
    </>
  );
};

export default Layout;

const Styled = {
  Layout: styled.main`
    position: relative;
    z-index: 2;
  `,
  BaseTexture: styled.div`
    position: fixed;
    inset: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    pointer-events: none;
    background-image: url(${BGTexture.src});
    background-repeat: repeat;
    background-size: 10rem;
    opacity: 0.1;
  `,
};
