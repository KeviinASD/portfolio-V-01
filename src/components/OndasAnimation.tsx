"use client"
import { useRef, useEffect, useState, useCallback } from 'react';

type Wave = {
  amplitude: number;
  frequency: number;
  length: number;
  increment: number;
}

interface OndasAnimationProps {
  className?: string;
  canvasRef?: React.RefObject<HTMLCanvasElement | null>; 
}

const OndasAnimation = ({className, canvasRef}: OndasAnimationProps) => {
  if (!canvasRef) {
    canvasRef = useRef<HTMLCanvasElement>(null);
  }
  const waves = useRef<Wave[]>([
    { amplitude: 100, frequency: 0.009, length: 0.001, increment: 0.01},
    { amplitude: 100, frequency: 0.009, length: 0.002, increment: 0.01},
    { amplitude: 100, frequency: 0.009, length: 0.003, increment: 0.01},
  ]);
  const animationId = useRef<number | null>(null);

  const resizeCanvas = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = 306;
    }
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waves.current.forEach((wave) => {
      const { amplitude, frequency, length, increment} = wave;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for(let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * length + increment) * amplitude;
        ctx.lineTo(x, y);
      }

      wave.increment += frequency;
      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
      ctx.stroke();
    })

    animationId.current = requestAnimationFrame(draw);
  }, [])

  useEffect(() => {
    resizeCanvas();

    animationId.current = requestAnimationFrame(draw);
    window.addEventListener('resize', resizeCanvas);


    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current);
      window.removeEventListener('resize', resizeCanvas);
    }
  }, []);

  return (
    <canvas
      className={className}
      ref={canvasRef}
    />
  );
};

export default OndasAnimation;
