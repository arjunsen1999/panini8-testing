import React, { FocusEventHandler, useEffect } from 'react';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface TextInputComponentProps {
  label?: string;
  name: string;
  type: string;
  required?: boolean;
  defaultVal?: string | number;
  placeholder?: string;
  icon?: string;
  className?: string;
  labelClassName?: string;
  isLabelVisible?: boolean;
  options?: {
    minLength?: {
      value?: number;
      message?: string;
    };
    maxLength?: {
      value?: number;
      message?: string;
    };
    pattern?: {
      value?: RegExp;
      message?: string;
    };
    required?:
      | string
      | {
          value?: boolean;
          message?: string;
        };
    onBlur?: any;
    validate?: Record<string, (value: string) => boolean | string>;
  };
  register: any;
  errors: any;
  isDisabled?: boolean;
  variant?: 'filled' | 'outline';
  onChange?: any;
  minVal?: number;
  minimize?: boolean;
  maxVal?: number;
}

const TextInputComponent = ({
  label,
  name,
  placeholder,
  icon,
  type = 'text',
  required = false,
  defaultVal = '',
  className = '',
  labelClassName = '',
  isLabelVisible = true,
  register,
  errors,
  options = {},
  isDisabled = false,
  variant = 'outline',
  onChange,
  minVal,
  maxVal,
  minimize,
}: TextInputComponentProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  // prevent on wheel default action
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (type === 'number') {
        event.preventDefault();
      }
    };
    const inputElement = document.getElementById(name) as HTMLInputElement;
    if (type === 'number' && inputElement) {
      inputElement.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        inputElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, [type, name]);

  return (
    <div className={minimize ? 'w-max' : 'w-full'}>
      <label htmlFor={name} className={cn(`text-sm`, isLabelVisible ? 'block mb-1' : 'hidden', labelClassName)}>
        {label} {required && <span className="text-[#292828]">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute -translate-y-1/2 pointer-events-none right-2 top-1/2">
            <Image src={icon} alt="icon" width={21} height={21} />
          </span>
        )}
        <input
          name={name}
          {...register(name, {
            required: required ? `${label ? label : 'This field '} is required` : false,
            minLength: {
              value: options?.minLength ? options?.minLength?.value : 0,
              message: options?.minLength ? options?.minLength?.message : '',
            },
            maxLength: {
              value: options?.maxLength?.value, //it shouldnot take  value as zero
              message: options?.maxLength ? options?.maxLength?.message : '',
            },
            ...options,
          })}
          type={type}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          id={name}
          className={cn(
            `w-full rounded-md px-2.5 py-2 text-xs focus:outline-none`,
            variant === 'outline' ? 'border' : 'border border-transparent bg-gray-100',
            className
          )}
          // autoComplete={'off'}
          disabled={isDisabled}
          defaultValue={defaultVal}
          onChange={onChange}
          min={minVal}
          max={maxVal}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">
          {errors[name].message.charAt(0).toUpperCase() + errors[name].message.slice(1) + ` !`}
        </p>
      )}
    </div>
  );
};

export default TextInputComponent;
