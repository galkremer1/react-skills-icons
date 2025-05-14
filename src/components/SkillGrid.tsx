import React from 'react';
import { SkillIcon, SkillIconProps } from './SkillIcon';

export interface SkillGridProps {
  skills: SkillIconProps[];
  columns?: number;
  gap?: number;
  className?: string;
}

export const SkillGrid: React.FC<SkillGridProps> = ({
  skills,
  columns = 3,
  gap = 4,
  className = '',
}) => {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gap: `${gap * 0.25}rem`,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {skills.map((skill) => (
        <SkillIcon key={skill.skill} {...skill} />
      ))}
    </div>
  );
};