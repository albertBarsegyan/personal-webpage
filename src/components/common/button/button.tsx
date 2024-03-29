import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface ButtonProps extends  PropsWithChildren {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'icon';
  className?: string
}

export function Button({ type = 'button', children, onClick, variant = 'primary',className }:ButtonProps) {
  const buttonStyles = classNames({
    ['h-12 flex-center rounded-3xl px-8 font-bold']:true,
    ['bg-secondary border-0']: variant === 'primary',
    ['bg-transparent border border-white color-transparent']: variant === 'secondary',
    ['bg-transparent border-0']: variant === 'icon'
  }, className);

  return (
    <button className={buttonStyles} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
