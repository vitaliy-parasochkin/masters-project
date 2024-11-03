import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, label, type = 'text' }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-blue-800 font-medium">{label}</label>
      <input
        {...register(name)}
        type={type}
        id={name}
        className="px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 placeholder-gray-500"
      />
    </div>
  );
};

export default TextInput;
