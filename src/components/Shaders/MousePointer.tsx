'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getColor } from '@/styles/Helper.styled';

function MousePointer() {
  const secondaryCursor = useRef<HTMLSpanElement | null>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      if (secondaryCursor.current) {
        positionRef.current.mouseX =
          mouseX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY =
          mouseY - secondaryCursor.current.clientHeight / 2;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const currentPositionRef = positionRef.current;

    const followMouse = () => {
      currentPositionRef.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = currentPositionRef;

      if (!destinationX || !destinationY) {
        currentPositionRef.destinationX = mouseX;
        currentPositionRef.destinationY = mouseY;
      } else {
        currentPositionRef.distanceX = (mouseX - destinationX) * 0.1;
        currentPositionRef.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(currentPositionRef.distanceX) +
            Math.abs(currentPositionRef.distanceY) <
          0.1
        ) {
          currentPositionRef.destinationX = mouseX;
          currentPositionRef.destinationY = mouseY;
        } else {
          currentPositionRef.destinationX += distanceX;
          currentPositionRef.destinationY += distanceY;
        }
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${currentPositionRef.destinationX}px, ${currentPositionRef.destinationY}px, 0)`;
      }
    };

    followMouse();

    return () => {
      cancelAnimationFrame(currentPositionRef.key);
    };
  }, []);

  return <Styled.MousePointer ref={secondaryCursor} />;
}

export default MousePointer;

const Styled = {
  MousePointer: styled.span`
    --size: 20vmin;
    height: var(--size);
    width: var(--size);
    position: fixed;
    pointer-events: none;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
    background-image: ${p =>
      `linear-gradient(to right, ${getColor(p).PRIMARY}, ${getColor(p).SECONDARY})`};
    opacity: 0.35;
    filter: blur(64px);
  `,
};
