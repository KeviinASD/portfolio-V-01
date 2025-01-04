"use client"
import { useRef, useEffect, useState } from 'react';

type Wave = {
  amplitude: number;
  frequency: number;
  length: number;
  increment: number;
}

const OndasAnimation = ({className}: {className?: string}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waves = useRef<Wave[]>([
    { amplitude: 100, frequency: 0.009, length: 0.001, increment: 0.01},
    { amplitude: 100, frequency: 0.009, length: 0.002, increment: 0.01},
    { amplitude: 100, frequency: 0.009, length: 0.003, increment: 0.01},
  ]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = 306;
    let animationId: number;

    const draw = () => {
      console.log("w,h: ", canvas.width, canvas.height);
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

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      className={className}
      ref={canvasRef}
    />
  );
};

export default OndasAnimation;
