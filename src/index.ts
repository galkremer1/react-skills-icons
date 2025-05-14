// import './styles/tailwind.css';

// Components
export { SkillIcon } from './components/SkillIcon';

// Types
export type { SkillIconProps } from './components/SkillIcon';
export type { SkillName } from './constants/iconImports';
export type { SkillIconMapping } from './constants/iconMappings'; 

// Utilities
export { getIconBySkill } from './constants/iconMappings';
export { iconMappings } from './constants/iconMappings';

// Icons (consider if you want to export all icons)
export * as Icons from './constants/iconImports';