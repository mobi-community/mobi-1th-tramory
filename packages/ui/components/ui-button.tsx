'use client';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from 'shared-lib';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // 초록 직사각형 버튼
        default:
          'bg-primaryGreen text-[12px] text-primary-foreground rounded-[0px] hover:opacity-80 transition-all duration-300',
        // 흰색 직사각형 버튼
        nonrounded:
          'bg-white text-[12px] text-primaryGray-400 rounded-[0px] hover:bg-primaryGray-100 transition-all duration-300',
        // 네이비 라인 투명 배경 버튼
        roundednavy:
          'bg-transparent p-0 border border-solid border-primaryBlue-500 text-primaryBlue-500 hover:bg-primaryBlue-700 hover:text-white hover:bg-opacity-70 transition-all duration-300',

        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        // 네이비 라인 투명 배경 버튼
        roundednavy:
          'bg-transparent p-0 border border-solid border-primaryBlue-500 text-primaryBlue-500 hover:bg-primaryBlue-700 hover:text-white hover:bg-opacity-70 transition-all duration-300',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xsm: 'h-9 rounded-sm',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        // 패딩없는 사이즈로 쓰고싶다면 사용
        xsm: 'h-9 rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
