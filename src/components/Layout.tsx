'use client';

import * as React from 'react';
import { ReactLenis } from 'lenis/react';

export default function Layout({ children }: { children: React.ReactNode }) {
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
      <ReactLenis root options={{ autoRaf: false }} ref={refLenis}>
        <div className="texture"></div>
        <div className="layout">{children}</div>
      </ReactLenis>
    </>
  );
}
