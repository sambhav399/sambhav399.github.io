'use client';

import * as React from 'react';
import { ReactLenis } from 'lenis/react';
import CursorFollower from './CursorFollower';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactLenis
        root
        options={{
          autoRaf: true,
          smoothWheel: true,
          syncTouch: true,
          touchMultiplier: 1.1,
          lerp: 0.1
        }}
      >
        <CursorFollower />
        <div className="texture"></div>
        <div className="layout">{children}</div>
      </ReactLenis>
    </>
  );
}
