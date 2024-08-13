"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Adjust this import based on your project setup

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
}

const ShootingStars: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  const generateShootingStars = (width: number, height: number) => {
    const numStars = 5; // Adjust the number of shooting stars as needed
    return Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 2 + 1,
      speed: Math.random() * 3 + 1,
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      setShootingStars(generateShootingStars(canvas.width, canvas.height));
    };

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.unobserve(canvas);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shootingStars.forEach(star => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length, star.y + star.length);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;

        if (star.x > canvas.width || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = -star.length;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [shootingStars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0", className)}
      style={{ zIndex: 0 }} // Ensure it's behind other content
    />
  );
};

export default ShootingStars;
