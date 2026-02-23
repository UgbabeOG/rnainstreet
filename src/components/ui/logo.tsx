
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
        d="M3 17L12 13L21 17L12 21L3 17Z"
        className="fill-primary opacity-30"
      />
      {/* Middle Plane */}
      <path
        d="M3 11L12 7L21 11L12 15L3 11Z"
        className="fill-accent"
      />
      {/* Top Plane */}
      <path
        d="M3 5L12 1L21 5L12 9L3 5Z"
        className="fill-primary"
      />
    </svg>
  );
}
