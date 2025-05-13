import React from 'react';
import { IconType } from 'react-icons';

export interface SkillIconProps {
  name: string;
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
  showLabel?: boolean;
  labelClassName?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  icon: Icon,
  size = 30,
  color,
  className = '',
  showLabel = true,
  labelClassName = '',
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Icon size={size} color={color} />
      {showLabel && (
        <span className={`mt-2 text-sm ${labelClassName}`}>{name}</span>
      )}
    </div>
  );
};