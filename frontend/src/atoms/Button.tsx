'use client';

import { Button as HeadlessButton, ButtonProps as HeadlessButtonProps } from '@headlessui/react';

export type ButtonProps = HeadlessButtonProps;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <HeadlessButton
    {...props}
    className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
  >
    {children}
  </HeadlessButton>
);
