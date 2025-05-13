import { IconType } from 'react-icons';

export type SkillCategory = 
  | 'programming'
  | 'framework'
  | 'database'
  | 'cloud'
  | 'tool'
  | 'platform';

export interface SkillIconMapping {
  name: string;
  icon: IconType;
  category: SkillCategory;
  aliases?: string[];
}