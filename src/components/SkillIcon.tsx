import React from 'react';
import { IconType } from 'react-icons';
import { getIconBySkill } from '../constants/iconMappings';

export const TEXT_SIZES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] as const;
export type TextSize = typeof TEXT_SIZES[number];

export interface SkillIconProps {
  skill: string;
  size?: number;
  color?: string;
  customIcon?: IconType;
  className?: string;
  customLabel?: string;
  showLabel?: boolean;
  labelClassName?: string;
  textSize?: TextSize;
}

export const SkillIcon: React.FC<SkillIconProps> = ({
  skill,
  size = 24,
  color,
  customIcon,
  className,
  showLabel = true,
  labelClassName = '',
  customLabel = '',
  textSize = 'base',
}) => {
  const mapping = getIconBySkill(skill);
  const Icon = customIcon || (mapping?.icon);
  const label = customLabel || mapping?.title || skill;

  if (!Icon) {
    console.warn(`Icon not found for skill: ${skill}`);
    return null;
  }

  return (
    <div 
      className={`flex flex-col items-center text-center ${className}`}
      data-testid={`skill-icon-${skill.toLowerCase()}`}
    >
      <Icon size={size} color={color} />
      {showLabel && (
        <span className={`mt-2 text-${textSize} ${labelClassName}`}>
          {label}
        </span>
      )}
    </div>
  );
};