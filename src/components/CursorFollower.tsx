'use client';

import * as React from 'react';
import gsap from 'gsap';

export default function CursorFollower() {
  const circleRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!circleRef.current) {
      return undefined;
    }

    const canUsePointer =
      window.matchMedia('(pointer:fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canUsePointer) {
      return undefined;
    }

    const xTo = gsap.quickTo(circleRef.current, 'x', {
      duration: 0.4,
      ease: 'power3.out'
    });
    const yTo = gsap.quickTo(circleRef.current, 'y', {
      duration: 0.4,
      ease: 'power3.out'
    });

    const handleMove = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return <div ref={circleRef} className="cursor-follower" aria-hidden="true" />;
}
