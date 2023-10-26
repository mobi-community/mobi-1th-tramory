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
        //남색 저장하기 버튼
        defaultnavy:
          'bg-primaryBlue-default text-[14px] text-primaryGray-400 rounded-[0px] hover:bg-primaryGray-100 transition-all duration-300',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
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
        // 하늘색 버튼
        skyblue:
          'bg-skyblue hover:bg-primaryBlue-400 rounded-[30px] transition-all duration-150 text-[10px] font-bold text-white',
        // 분홍색 버튼
        coralpink:
          'bg-coralpink-100 hover:bg-coralpink-300 rounded-[30px] transition-all duration-150 text-[10px] font-bold text-white',
        // 진한 네이비 버튼
        deepnavy:
          'bg-primaryBlue-700 text-[14px] text-white rounded-[0px] hover:bg-primaryBlue-700/80 transition-all duration-300',
        // 연한 블루 버튼, 장소 모달 버튼
        lightblue:
          'bg-primaryBlue-100 text-[14px] font-bold text-primaryBlue-default rounded-full hover:bg-primaryBlue-100/50 transition-all duration-300',
      },
      size: {
        default: 'h-10 px-4 py-2',
        // 패딩없는 사이즈로 쓰고싶다면 사용
        xsm: 'h-9 rounded-sm',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      font: {
        default: 'text-sm', // 기본 14px
        xs: 'text-xs', // 12px
        base: 'text-base', // 16px
        lg: 'text-lg', // 18px
        xl: 'text-xl', // 20px
      },
      weight: {
        default: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
      },
      shape: {
        none: 'rounded-none', // none
        sm: 'rounded-sm', // 2px
        normal: 'rounded', // 4px
        md: 'rounded-md', // 6px
        lg: 'rounded-lg', // 8px
        xl: 'rounded-xl', // 12px
        xl2: 'rounded-2xl', // 16px
        xl3: 'rounded-3xl', // 24px
        full: 'rounded-full', // full
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      font: 'default',
      weight: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      font,
      weight,
      shape,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, font, weight, shape, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
