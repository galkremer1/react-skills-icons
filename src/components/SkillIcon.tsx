import React from 'react';
import { IconType } from 'react-icons';
import { getIconByName } from '../constants/iconMappings';

export interface SkillIconProps {
  name: string;
  size?: number;
  color?: string;
  customIcon?: IconType;
  className?: string;
  customLabel?: string;
  showLabel?: boolean;
  labelClassName?: string;
  textSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

export const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  size = 24,
  color,
  customIcon,
  className,
  showLabel = true,
  labelClassName = '',
  customLabel= '',
  textSize = 'xs',
}) => {
  const mapping = getIconByName(name);
  const Icon = customIcon || (mapping?.icon);

  if (!Icon) {
    console.warn(`Icon not found for skill: ${name}`);
    return null;
  }

  return (
    <div 
      className={`flex flex-col items-center ${className}`}
      data-testid={`skill-icon-${name}`}
    >
      <Icon size={size} color={color} />
      {showLabel && (
        <span className={`mt-2 text-${textSize} ${labelClassName}`}>
          {customLabel || name}
        </span>
      )}
    </div>
  );
};