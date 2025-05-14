import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpring,
  SiRust,
  SiGo,
  SiCplusplus,
  SiPhp,
  SiSwift,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiRedis,
  SiNeo4J,
  SiGraphql,
  SiTailwindcss,
  SiSass,
  SiJest,
  SiCypress,
  SiSelenium,
  SiJenkins,
  SiCircleci,
  SiTravisci,
} from 'react-icons/si';

import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { FaAws, FaJava } from "react-icons/fa";

import {
  DiGit,
  DiDocker,
  DiJavascript,
  DiPython,
  DiJava,
  DiRuby,
  DiRust,
  DiPostgresql,
  DiMysql,
  DiMongodb,
  DiRedis,
  DiNginx,
  DiHtml5,
  DiCss3,
  DiSass,
} from 'react-icons/di';
import { IconType } from 'react-icons';

export interface SkillIconMapping {
  skill: string;  
  title: string;
  icon: IconType;
  category: 'programming' | 'framework' | 'database' | 'cloud' | 'tool' | 'platform';
  aliases: string[];
}

export const iconMappings: SkillIconMapping[] = [
  {
    skill: 'javascript',  
    title: 'JavaScript',
    icon: SiJavascript,
    category: 'programming',
    aliases: ['js', 'ecmascript']
  },
  {
    skill: 'typescript',
    title: 'TypeScript',
    icon: SiTypescript,
    category: 'programming',
    aliases: ['ts']
  },
  {
    skill: 'python',
    title: 'Python',
    icon: SiPython,
    category: 'programming',
    aliases: ['py']
  },
  {
    skill: 'java',
    title: 'Java',
    icon: FaJava,
    category: 'programming',
    aliases: ['jvm']
  },
  {
    skill: 'rust',
    title: 'Rust',
    icon: SiRust,
    category: 'programming',
    aliases: ['rs']
  },
  {
    skill: 'go',
    title: 'Go',
    icon: SiGo,
    category: 'programming',
    aliases: ['golang']
  },
  {
    skill: 'cpp',
    title: 'C++',
    icon: SiCplusplus,
    category: 'programming',
    aliases: ['c++']
  },
  {
    skill: 'csharp',
    title: 'C#',
    icon: TbBrandCSharp,
    category: 'programming',
    aliases: ['c#', 'dotnet']
  },
  {
    skill: 'php',
    title: 'PHP',
    icon: SiPhp,
    category: 'programming',
    aliases: []
  },
  {
    skill: 'swift',
    title: 'Swift',
    icon: SiSwift,
    category: 'programming',
    aliases: ['ios']
  },
  {
    skill: 'kotlin',
    title: 'Kotlin',
    icon: SiKotlin,
    category: 'programming',
    aliases: ['android']
  },

  // Additional Programming Languages
  {
    skill: 'ruby',
    title: 'Ruby',
    icon: DiRuby,
    category: 'programming',
    aliases: ['rb', 'rails']
  },
  {
    skill: 'dart',
    title: 'Dart',
    icon: SiDart,
    category: 'programming',
    aliases: ['flutter-lang']
  },

  // Frontend Frameworks
  {
    skill: 'react',
    title: 'React',
    icon: SiReact,
    category: 'framework',
    aliases: ['reactjs', 'react.js']
  },
  {
    skill: 'vue',
    title: 'Vue.js',
    icon: SiVuedotjs,
    category: 'framework',
    aliases: ['vuejs', 'vue.js']
  },
  {
    skill: 'angular',
    title: 'Angular',
    icon: SiAngular,
    category: 'framework',
    aliases: ['ng']
  },
  {
    skill: 'next',
    title: 'Next.js',
    icon: SiNextdotjs,
    category: 'framework',
    aliases: ['nextjs', 'next.js']
  },

  // Backend Frameworks
  {
    skill: 'nodejs',
    title: 'Node.js',
    icon: SiNodedotjs,
    category: 'framework',
    aliases: ['node', 'nodejs']
  },
  {
    skill: 'express',
    title: 'Express.js',
    icon: SiExpress,
    category: 'framework',
    aliases: ['expressjs']
  },
  {
    skill: 'nest',
    title: 'NestJS',
    icon: SiNestjs,
    category: 'framework',
    aliases: ['nestjs']
  },
  {
    skill: 'django',
    title: 'Django',
    icon: SiDjango,
    category: 'framework',
    aliases: ['py-web']
  },
  {
    skill: 'flask',
    title: 'Flask',
    icon: SiFlask,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'spring',
    title: 'Spring',
    icon: SiSpring,
    category: 'framework',
    aliases: ['spring-boot']
  },

  // Databases
  {
    skill: 'mongodb',
    title: 'MongoDB',
    icon: SiMongodb,
    category: 'database',
    aliases: ['mongo']
  },
  {
    skill: 'postgresql',
    title: 'PostgreSQL',
    icon: SiPostgresql,
    category: 'database',
    aliases: ['postgres']
  },
  {
    skill: 'mysql',
    title: 'MySQL',
    icon: SiMysql,
    category: 'database',
    aliases: []
  },
  {
    skill: 'redis',
    title: 'Redis',
    icon: SiRedis,
    category: 'database',
    aliases: ['cache']
  },
  {
    skill: 'neo4j',
    title: 'Neo4j',
    icon: SiNeo4J,
    category: 'database',
    aliases: ['graph-db']
  },
  {
    skill: 'graphql',
    title: 'GraphQL',
    icon: SiGraphql,
    category: 'database',
    aliases: ['gql']
  },

  // Cloud & DevOps
  {
    skill: 'aws',
    title: 'AWS',
    icon: FaAws,
    category: 'cloud',
    aliases: ['amazon']
  },
  {
    skill: 'gcp',
    title: 'Google Cloud',
    icon: SiGooglecloud,
    category: 'cloud',
    aliases: ['google-cloud']
  },
  {
    skill: 'azure',
    title: 'Azure',
    icon: TbBrandAzure,
    category: 'cloud',
    aliases: ['microsoft-azure']
  },
  {
    skill: 'docker',
    title: 'Docker',
    icon: SiDocker,
    category: 'tool',
    aliases: ['container']
  },
  {
    skill: 'kubernetes',
    title: 'Kubernetes',
    icon: SiKubernetes,
    category: 'tool',
    aliases: ['k8s']
  },

  // Testing
  {
    skill: 'jest',
    title: 'Jest',
    icon: SiJest,
    category: 'tool',
    aliases: ['testing']
  },
  {
    skill: 'cypress',
    title: 'Cypress',
    icon: SiCypress,
    category: 'tool',
    aliases: ['e2e']
  },
  {
    skill: 'selenium',
    title: 'Selenium',
    icon: SiSelenium,
    category: 'tool',
    aliases: ['webdriver']
  },

  // CI/CD
  {
    skill: 'jenkins',
    title: 'Jenkins',
    icon: SiJenkins,
    category: 'tool',
    aliases: ['ci']
  },
  {
    skill: 'circleci',
    title: 'CircleCI',
    icon: SiCircleci,
    category: 'tool',
    aliases: ['ci']
  },
  {
    skill: 'travis',
    title: 'Travis CI',
    icon: SiTravisci,
    category: 'tool',
    aliases: ['ci']
  },

  // Version Control
  {
    skill: 'git',
    title: 'Git',
    icon: SiGit,
    category: 'tool',
    aliases: ['vcs']
  },
  {
    skill: 'github',
    title: 'GitHub',
    icon: SiGithub,
    category: 'platform',
    aliases: []
  },

  // Styling
  {
    skill: 'tailwind',
    title: 'Tailwind CSS',
    icon: SiTailwindcss,
    category: 'framework',
    aliases: ['tailwindcss']
  },
  {
    skill: 'sass',
    title: 'Sass',
    icon: SiSass,
    category: 'tool',
    aliases: ['scss']
  },

  // Frontend Technologies
  {
    skill: 'html',
    title: 'HTML',
    icon: DiHtml5,
    category: 'programming',
    aliases: ['html5', 'markup']
  },
  {
    skill: 'css',
    title: 'CSS',
    icon: DiCss3,
    category: 'programming',
    aliases: ['css3', 'styles']
  },
  {
    skill: 'flutter',
    title: 'Flutter',
    icon: SiFlutter,
    category: 'framework',
    aliases: ['flutter-framework', 'mobile']
  },

  // Infrastructure & Tools
  {
    skill: 'nginx',
    title: 'Nginx',
    icon: DiNginx,
    category: 'tool',
    aliases: ['web-server', 'proxy', 'load-balancer']
  },

  // Alternative DevIcon versions
  {
    skill: 'git1',
    title: 'Git',
    icon: DiGit,
    category: 'tool',
    aliases: ['vcs-alt']
  },
  {
    skill: 'docker1',
    title: 'Docker',
    icon: DiDocker,
    category: 'tool',
    aliases: ['container-alt']
  },
  {
    skill: 'javascript1',
    title: 'JavaScript',
    icon: DiJavascript,
    category: 'programming',
    aliases: ['js-alt', 'ecmascript-alt']
  },
  {
    skill: 'python1',
    title: 'Python',
    icon: DiPython,
    category: 'programming',
    aliases: ['py-alt']
  },
  {
    skill: 'java1',
    title: 'Java',
    icon: DiJava,
    category: 'programming',
    aliases: ['jvm-alt']
  },
  {
    skill: 'rust1',
    title: 'Rust',
    icon: DiRust,
    category: 'programming',
    aliases: ['rs-alt']
  },
  {
    skill: 'postgresql1',
    title: 'PostgreSQL',
    icon: DiPostgresql,
    category: 'database',
    aliases: ['postgres-alt']
  },
  {
    skill: 'mysql1',
    title: 'MySQL',
    icon: DiMysql,
    category: 'database',
    aliases: ['mysql-alt']
  },
  {
    skill: 'mongodb1',
    title: 'MongoDB',
    icon: DiMongodb,
    category: 'database',
    aliases: ['mongo-alt']
  },
  {
    skill: 'redis1',
    title: 'Redis',
    icon: DiRedis,
    category: 'database',
    aliases: ['cache-alt']
  },
  {
    skill: 'sass1',
    title: 'Sass',
    icon: DiSass,
    category: 'tool',
    aliases: ['scss-alt']
  }
];

export const getIconBySkill = (skill: string): SkillIconMapping | undefined => {
  const normalizedSkill = skill.toLowerCase();
  return iconMappings.find(
    mapping => 
      mapping.skill === normalizedSkill || 
      mapping.aliases?.includes(normalizedSkill)
  );
};