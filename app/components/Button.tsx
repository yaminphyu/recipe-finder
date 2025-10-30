import clsx from 'clsx';
import React from 'react'

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  customClass?: string;
  disabled?: boolean;
  children?: React.ReactNode,
  ariaLabel: string,
};

export default function Button({
  label,
  children,
  onClick,
  type = 'button',
  customClass = '',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={
        clsx(
          'bg-green-900 border-2 border-green-900 text-base text-white px-4 py-2 rounded-md font-medium hover:bg-green-800 hover:border-green-800 transition duration-300',
          disabled && 'opacity-50 cursor-not-allowed',
          customClass
        )
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children ?? label}
    </button>
  )
};
