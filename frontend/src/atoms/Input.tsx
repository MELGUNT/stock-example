// Input.tsx
'use client'

import { Input as HeadlessInput, InputProps as HeadlessInputProps } from '@headlessui/react';

export type InputProps = HeadlessInputProps;
export const Input = (props: InputProps) => (
  <HeadlessInput
    {...props}
    className={`w-full bg-background rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary ${props.className}`}
  />
);
