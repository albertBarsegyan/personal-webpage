import { ChangeEvent } from 'react';

interface InputProps {
  placeholder?: string
  value: string;
  onChange : (e: ChangeEvent<HTMLInputElement> ) => void
  className?: string
}

export const Input = ({ placeholder,value,onChange, className }:InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`appearance-none border-4 border-blueberry-200 border-solid rounded-3xl py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent ${className ?? ''}`}
      type="text"
    />
  );
};
