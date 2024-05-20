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
    ['h-12 flex-center px-8 py-2 relative font-bold hover:left-3 hover:top-2 border border-blue-dark-1']: true,
    ['bg-violet-dark']: variant === 'primary',
    ['bg-white text-blue-dark-1']: variant === 'secondary',
    ['bg-white text-secondary border border-blue-dark-1']: variant === 'filled',
    ['bg-transparent border-0']: variant === 'icon'
  });

  const buttonBackground = classNames({
    ['w-full h-12 absolute -z-10 left-3 top-2 border border-blue-dark-1']: true,
    ['bg-white']: variant === 'primary',
    ['bg-violet-dark']: variant === 'secondary',
  });

  return (
    <div className='relative'>
    <button className={buttonStyles} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
      <div className={buttonBackground} />
    </div>
  );
}
