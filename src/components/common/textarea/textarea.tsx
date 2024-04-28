import { ChangeEvent } from 'react';

interface TextareaProps {
  value:string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>)=>void;
  placeholder?:string;
  className?: string
}

export const Textarea = ({ value, onChange, placeholder, className }:TextareaProps) => {
  return (
    <textarea
      rows={4}
      className={`w-full resize-none py-2 md:py-4 px-4 md:px-6 bg-transparent border-2 text-white border-blueberry-200 rounded-3xl focus:outline-none focus:shadow-outline ${className ?? ''}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
