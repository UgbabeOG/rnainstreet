
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
      {/* Top Layer */}
      <path
        d="M2 7L12 2L22 7L12 12L2 7Z"
        className="fill-primary"
      />
      {/* Middle Layer */}
      <path
        d="M2 12L12 7L22 12L12 17L2 12Z"
        className="fill-accent"
        transform="translate(0, 2)"
      />
      {/* Bottom Layer */}
      <path
        d="M2 17L12 12L22 17L12 22L2 17Z"
        className="fill-primary opacity-60"
        transform="translate(0, 4)"
      />
    </svg>
  );
}
