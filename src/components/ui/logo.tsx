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
        fill="#0EA5E9"
      />
      {/* Middle Layer */}
      <path
        d="M2 12L12 7L22 12L12 17L2 12Z"
        fill="#14B8A6"
        transform="translate(0, 2)"
      />
      {/* Bottom Layer */}
      <path
        d="M2 17L12 12L22 17L12 22L2 17Z"
        fill="#10B981"
        transform="translate(0, -2)"
      />
      {/* Adjusting the paths for a cleaner stacked look */}
      <g transform="translate(0, 2)">
         <path d="M2 10L12 15L22 10L12 5L2 10Z" fill="#14B8A6" />
      </g>
      <g transform="translate(0, 7)">
         <path d="M2 10L12 15L22 10L12 5L2 10Z" fill="#10B981" />
      </g>
      <g transform="translate(0, -3)">
         <path d="M2 10L12 15L22 10L12 5L2 10Z" fill="#0EA5E9" />
      </g>
    </svg>
  );
}
