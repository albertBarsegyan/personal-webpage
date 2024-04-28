import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface ButtonProps extends  PropsWithChildren {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'filled' | 'icon';
  className?: string;
  disabled?: boolean
}

export function Button({ disabled = false, type = 'button', children, onClick, variant = 'primary',className }:ButtonProps) {
  const buttonStyles = classNames(className,{
    ['h-12 flex-center rounded-3xl px-8 font-bold']: true,
    ['bg-secondary border-0']: variant === 'primary',
    ['bg-transparent border border-white color-transparent']: variant === 'secondary',
    ['bg-white text-secondary border-0']: variant === 'filled',
    ['bg-transparent border-0']: variant === 'icon'
  });

  return (
    <button className={buttonStyles} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
