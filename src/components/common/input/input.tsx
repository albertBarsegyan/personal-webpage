import { ChangeEvent } from 'react';

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({ placeholder, value, onChange, className }: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-blueberry-200 focus:shadow-outline appearance-none rounded-3xl border-2 border-solid bg-transparent px-6 py-4 leading-tight text-white focus:outline-none ${className ?? ''}`}
      type="text"
    />
  );
};
