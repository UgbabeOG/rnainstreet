
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
    >
      {/* Bottom Plane */}
      <path
        d="M2 16L12 11L22 16L12 21L2 16Z"
        className="fill-primary opacity-40"
      />
      {/* Middle Plane */}
      <path
        d="M2 12L12 7L22 12L12 17L2 12Z"
        className="fill-accent"
      />
      {/* Top Plane */}
      <path
        d="M2 8L12 3L22 8L12 13L2 8Z"
        className="fill-primary"
      />
    </svg>
  );
}
