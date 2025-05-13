import React from 'react';
import { IconType } from 'react-icons';
import { getIconByName } from '../constants/iconMappings';

export interface SkillIconProps {
  name: string;
  size?: number;
  color?: string;
  customIcon?: IconType;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  size = 24,
  color,
  customIcon,
  className,
}) => {
  const mapping = getIconByName(name);
  const Icon = customIcon || (mapping?.icon);

  if (!Icon) {
    console.warn(`Icon not found for skill: ${name}`);
    return null;
  }

  return (
    <Icon
      size={size}
      color={color}
      className={className}
      title={name}
    />
  );
};