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
  SiElixir,
  SiHaskell,
  SiErlang,
  SiLua,
  SiPerl,
  SiR,
  SiScala,
  SiClojure,
  SiJulia,
  SiOcaml,
  SiFsharp,
  SiLatex,
  SiWebassembly,
  SiSolidity,
  SiAssemblyscript,
  SiGnubash,
  SiPowershell,
  SiFortran,
  SiApachegroovy,
  SiDotnet,
  SiDelphi,
  SiBulma,
  SiBootstrap,
  SiAntdesign,
  SiChakraui,
  SiLess,
  SiPostcss,
  SiCoffeescript,
  SiJson,
  SiYaml,
} from 'react-icons/si';

import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { FaAws, FaJava } from "react-icons/fa";

import {
  DiAndroid,
  DiAngularSimple,
  DiApple,
  DiAtom,
  DiAws,
  DiBackbone,
  DiBootstrap,
  DiChrome,
  DiClojure,
  DiCloud9,
  DiCodeigniter,
  DiCoda,
  DiDart,
  DiDebian,
  DiDigitalOcean,
  DiDjango,
  DiDocker,
  DiDreamweaver,
  DiDropbox,
  DiDrupal,
  DiEclipse,
  DiEmber,
  DiErlang,
  DiExtjs,
  DiFirefox,
  DiFsharp,
  DiGit,
  DiGithub,
  DiGoogleAnalytics,
  DiGoogleDrive,
  DiGroovy,
  DiGrunt,
  DiGulp,
  DiHaskell,
  DiHeroku,
  DiHtml5,
  DiHtml53DEffects,
  DiHtml5Connectivity,
  DiHtml5DeviceAccess,
  DiHtml5Multimedia,
  DiIe,
  DiIllustrator,
  DiIntellij,
  DiIonic,
  DiJava,
  DiJavascript,
  DiJenkins,
  DiJoomla,
  DiJqueryLogo,
  DiJsBadge,
  DiKomodo,
  DiKrakenjs,
  DiLaravel,
  DiLinux,
  DiMagento,
  DiMarkdown,
  DiMaterializecss,
  DiMeteor,
  DiModernizr,
  DiMongodb,
  DiMootools,
  DiMsqlServer,
  DiMysql,
  DiNetbeans,
  DiNginx,
  DiNodejs,
  DiNodejsSmall,
  DiNpm,
  DiOnedrive,
  DiOpenshift,
  DiOpera,
  DiPerl,
  DiPhonegap,
  DiPhotoshop,
  DiPhp,
  DiPostgresql,
  DiProlog,
  DiPython,
  DiReact,
  DiRedis,
  DiRequirejs,
  DiRuby,
  DiRust,
  DiSafari,
  DiSass,
  DiScala,
  DiSizzlejs,
  DiSqllite,
  DiStylus,
  DiSublime,
  DiSwift,
  DiSymfony,
  DiTerminal,
  DiTravis,
  DiTypo3,
  DiUbuntu,
  DiUnitySmall,
  DiVim,
  DiVisualstudio,
  DiWindows,
  DiWordpress,
  DiYii,
  DiCss3,
  DiCss3Full,
  DiBower,
  DiBrackets,
  DiBlackberry
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
  {
    skill: 'elixir',
    title: 'Elixir',
    icon: SiElixir,
    category: 'programming',
    aliases: ['ex', 'exs']
  },
  {
    skill: 'haskell',
    title: 'Haskell',
    icon: SiHaskell,
    category: 'programming',
    aliases: ['hs']
  },
  {
    skill: 'erlang',
    title: 'Erlang',
    icon: SiErlang,
    category: 'programming',
    aliases: ['erl']
  },
  {
    skill: 'lua',
    title: 'Lua',
    icon: SiLua,
    category: 'programming',
    aliases: []
  },
  {
    skill: 'perl',
    title: 'Perl',
    icon: SiPerl,
    category: 'programming',
    aliases: ['pl']
  },
  {
    skill: 'r',
    title: 'R',
    icon: SiR,
    category: 'programming',
    aliases: ['rlang']
  },
  {
    skill: 'scala',
    title: 'Scala',
    icon: SiScala,
    category: 'programming',
    aliases: []
  },
  {
    skill: 'clojure',
    title: 'Clojure',
    icon: SiClojure,
    category: 'programming',
    aliases: ['clj']
  },
  {
    skill: 'julia',
    title: 'Julia',
    icon: SiJulia,
    category: 'programming',
    aliases: ['jl']
  },
  {
    skill: 'ocaml',
    title: 'OCaml',
    icon: SiOcaml,
    category: 'programming',
    aliases: ['ml']
  },
  {
    skill: 'fsharp',
    title: 'F#',
    icon: SiFsharp,
    category: 'programming',
    aliases: ['fs']
  },
  {
    skill: 'latex',
    title: 'LaTeX',
    icon: SiLatex,
    category: 'programming',
    aliases: ['tex']
  },
  {
    skill: 'wasm',
    title: 'WebAssembly',
    icon: SiWebassembly,
    category: 'programming',
    aliases: ['webassembly']
  },
  {
    skill: 'solidity',
    title: 'Solidity',
    icon: SiSolidity,
    category: 'programming',
    aliases: ['sol', 'ethereum']
  },
  {
    skill: 'prolog',
    title: 'Prolog',
    icon: DiProlog,
    category: 'programming',
    aliases: ['pl']
  },
  {
    skill: 'assembly',
    title: 'Assembly',
    icon: SiAssemblyscript,
    category: 'programming',
    aliases: ['asm']
  },
  {
    skill: 'bash',
    title: 'Bash',
    icon: SiGnubash,
    category: 'programming',
    aliases: ['shell']
  },
  {
    skill: 'powershell',
    title: 'PowerShell',
    icon: SiPowershell,
    category: 'programming',
    aliases: []
  },
  {
    skill: 'fortran',
    title: 'Fortran',
    icon: SiFortran,
    category: 'programming',
    aliases: []
  },
  {
    skill: 'groovy',
    title: 'Groovy',
    icon: SiApachegroovy,
    category: 'programming',
    aliases: []
  },
  {
    skill: 'vbnet',
    title: 'VB.NET',
    icon: SiDotnet,
    category: 'programming',
    aliases: ['visualbasic']
  },
  {
    skill: 'delphi',
    title: 'Delphi',
    icon: SiDelphi,
    category: 'programming',
    aliases: []
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
  },
    // Styling Frameworks
  {
    skill: 'bulma',
    title: 'Bulma',
    icon: SiBulma,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'bootstrap',
    title: 'Bootstrap',
    icon: SiBootstrap,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'antdesign',
    title: 'Ant Design',
    icon: SiAntdesign,
    category: 'framework',
    aliases: ['antd']
  },
  {
    skill: 'chakraui',
    title: 'Chakra UI',
    icon: SiChakraui,
    category: 'framework',
    aliases: []
  },

  // CSS Preprocessors & Tools
  {
    skill: 'less',
    title: 'Less',
    icon: SiLess,
    category: 'tool',
    aliases: []
  },
  {
    skill: 'postcss',
    title: 'PostCSS',
    icon: SiPostcss,
    category: 'tool',
    aliases: []
  },

  // Additional Languages & Tools
  {
    skill: 'coffeescript',
    title: 'CoffeeScript',
    icon: SiCoffeescript,
    category: 'programming',
    aliases: ['coffee']
  },
  {
    skill: 'json',
    title: 'JSON',
    icon: SiJson,
    category: 'programming',
    aliases: []
  },
  {
    skill: 'yaml',
    title: 'YAML',
    icon: SiYaml,
    category: 'programming',
    aliases: []
  },


  // Development Tools & Environments
  {
    skill: 'android',
    title: 'Android',
    icon: DiAndroid,
    category: 'platform',
    aliases: ['android-sdk']
  },
  {
    skill: 'atom',
    title: 'Atom',
    icon: DiAtom,
    category: 'tool',
    aliases: ['atom-editor']
  },
  {
    skill: 'eclipse',
    title: 'Eclipse',
    icon: DiEclipse,
    category: 'tool',
    aliases: ['eclipse-ide']
  },
  {
    skill: 'intellij',
    title: 'IntelliJ IDEA',
    icon: DiIntellij,
    category: 'tool',
    aliases: ['idea']
  },
  {
    skill: 'netbeans',
    title: 'NetBeans',
    icon: DiNetbeans,
    category: 'tool',
    aliases: []
  },
  {
    skill: 'vim',
    title: 'Vim',
    icon: DiVim,
    category: 'tool',
    aliases: ['neovim']
  },
  {
    skill: 'visualstudio',
    title: 'Visual Studio',
    icon: DiVisualstudio,
    category: 'tool',
    aliases: ['vs']
  },

  // Frameworks & Libraries
  {
    skill: 'backbone',
    title: 'Backbone.js',
    icon: DiBackbone,
    category: 'framework',
    aliases: ['backbonejs']
  },
  {
    skill: 'codeigniter',
    title: 'CodeIgniter',
    icon: DiCodeigniter,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'drupal',
    title: 'Drupal',
    icon: DiDrupal,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'ember',
    title: 'Ember.js',
    icon: DiEmber,
    category: 'framework',
    aliases: ['emberjs']
  },
  {
    skill: 'jquery',
    title: 'jQuery',
    icon: DiJqueryLogo,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'laravel',
    title: 'Laravel',
    icon: DiLaravel,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'materialize',
    title: 'Materialize CSS',
    icon: DiMaterializecss,
    category: 'framework',
    aliases: ['materializecss']
  },
  {
    skill: 'meteor',
    title: 'Meteor.js',
    icon: DiMeteor,
    category: 'framework',
    aliases: ['meteorjs']
  },
  {
    skill: 'symfony',
    title: 'Symfony',
    icon: DiSymfony,
    category: 'framework',
    aliases: []
  },
  {
    skill: 'wordpress',
    title: 'WordPress',
    icon: DiWordpress,
    category: 'framework',
    aliases: ['wp']
  },
  {
    skill: 'yii',
    title: 'Yii Framework',
    icon: DiYii,
    category: 'framework',
    aliases: []
  },

  // Development Tools
  {
    skill: 'npm',
    title: 'npm',
    icon: DiNpm,
    category: 'tool',
    aliases: ['node-package-manager']
  },
  {
    skill: 'terminal',
    title: 'Terminal',
    icon: DiTerminal,
    category: 'tool',
    aliases: ['cli', 'command-line']
  },
  {
    skill: 'unity',
    title: 'Unity',
    icon: DiUnitySmall,
    category: 'tool',
    aliases: ['unity3d']
  },

  // Operating Systems & Platforms
  {
    skill: 'debian',
    title: 'Debian',
    icon: DiDebian,
    category: 'platform',
    aliases: []
  },
  {
    skill: 'linux',
    title: 'Linux',
    icon: DiLinux,
    category: 'platform',
    aliases: ['gnu-linux']
  },
  {
    skill: 'ubuntu',
    title: 'Ubuntu',
    icon: DiUbuntu,
    category: 'platform',
    aliases: []
  },

  // Databases
  {
    skill: 'sqlite',
    title: 'SQLite',
    icon: DiSqllite,
    category: 'database',
    aliases: []
  },

  // Documentation & Markup
  {
    skill: 'markdown',
    title: 'Markdown',
    icon: DiMarkdown,
    category: 'tool',
    aliases: ['md']
  },

  // Alternative DevIcon versions (continued)
  {
    skill: 'angular1',
    title: 'Angular',
    icon: DiAngularSimple,
    category: 'framework',
    aliases: ['ng-alt']
  },
  {
    skill: 'bootstrap1',
    title: 'Bootstrap',
    icon: DiBootstrap,
    category: 'framework',
    aliases: ['bootstrap-alt']
  },
  {
    skill: 'clojure1',
    title: 'Clojure',
    icon: DiClojure,
    category: 'programming',
    aliases: ['clj-alt']
  },
  {
    skill: 'django1',
    title: 'Django',
    icon: DiDjango,
    category: 'framework',
    aliases: ['django-alt']
  },
  {
    skill: 'nodejs1',
    title: 'Node.js',
    icon: DiNodejs,
    category: 'framework',
    aliases: ['node-alt']
  },
  {
    skill: 'erlang1',
    title: 'Erlang',
    icon: DiErlang,
    category: 'programming',
    aliases: ['erl-alt']
  },
  {
    skill: 'fsharp1',
    title: 'F#',
    icon: DiFsharp,
    category: 'programming',
    aliases: ['fs-alt']
  },
  {
    skill: 'github1',
    title: 'GitHub',
    icon: DiGithub,
    category: 'platform',
    aliases: ['github-alt']
  },
  {
    skill: 'haskell1',
    title: 'Haskell',
    icon: DiHaskell,
    category: 'programming',
    aliases: ['hs-alt']
  },
  {
    skill: 'jenkins1',
    title: 'Jenkins',
    icon: DiJenkins,
    category: 'tool',
    aliases: ['jenkins-alt']
  },
  {
    skill: 'apple',
    title: 'Apple',
    icon: DiApple,
    category: 'platform',
    aliases: ['macos', 'ios-platform']
  },
  {
    skill: 'chrome',
    title: 'Chrome',
    icon: DiChrome,
    category: 'tool',
    aliases: ['chrome-browser']
  },
  {
    skill: 'cloud9',
    title: 'Cloud9',
    icon: DiCloud9,
    category: 'tool',
    aliases: ['c9']
  },
  {
    skill: 'illustrator',
    title: 'Adobe Illustrator',
    icon: DiIllustrator,
    category: 'tool',
    aliases: ['ai']
  },
  // Additional Web Development Tools & Frameworks
{
  skill: 'sizzlejs',
  title: 'SizzleJS',
  icon: DiSizzlejs,
  category: 'framework',
  aliases: ['sizzle', 'css-selector-engine']
},
{
  skill: 'stylus',
  title: 'Stylus',
  icon: DiStylus,
  category: 'tool',
  aliases: ['css-preprocessor']
},
{
  skill: 'firefox',
  title: 'Firefox',
  icon: DiFirefox,
  category: 'tool',
  aliases: ['mozilla-firefox', 'browser']
},
{
  skill: 'ie',
  title: 'Internet Explorer',
  icon: DiIe,
  category: 'tool',
  aliases: ['internet-explorer', 'browser']
},
{
  skill: 'safari',
  title: 'Safari',
  icon: DiSafari,
  category: 'tool',
  aliases: ['apple-safari', 'browser']
},
{
  skill: 'opera',
  title: 'Opera',
  icon: DiOpera,
  category: 'tool',
  aliases: ['opera-browser', 'browser']
},
{
  skill: 'modernizr',
  title: 'Modernizr',
  icon: DiModernizr,
  category: 'tool',
  aliases: ['feature-detection']
},

// DevOps & Cloud Platforms
{
  skill: 'aws1',
  title: 'AWS',
  icon: DiAws,
  category: 'cloud',
  aliases: ['amazon-web-services-alt']
},
{
  skill: 'heroku',
  title: 'Heroku',
  icon: DiHeroku,
  category: 'cloud',
  aliases: ['paas']
},
{
  skill: 'openshift',
  title: 'OpenShift',
  icon: DiOpenshift,
  category: 'cloud',
  aliases: ['redhat-openshift']
},
{
  skill: 'digitalocean',
  title: 'DigitalOcean',
  icon: DiDigitalOcean,
  category: 'cloud',
  aliases: ['do']
},
{
  skill: 'travis1',
  title: 'Travis CI',
  icon: DiTravis,
  category: 'tool',
  aliases: ['ci-alt']
},

// Content Management Systems & E-commerce
{
  skill: 'joomla',
  title: 'Joomla',
  icon: DiJoomla,
  category: 'framework',
  aliases: ['cms']
},
{
  skill: 'magento',
  title: 'Magento',
  icon: DiMagento,
  category: 'framework',
  aliases: ['e-commerce']
},
{
  skill: 'typo3',
  title: 'TYPO3',
  icon: DiTypo3,
  category: 'framework',
  aliases: ['cms']
},

// Other Frameworks & Libraries
{
  skill: 'mootools',
  title: 'MooTools',
  icon: DiMootools,
  category: 'framework',
  aliases: ['javascript-framework']
},
{
  skill: 'requirejs',
  title: 'RequireJS',
  icon: DiRequirejs,
  category: 'framework',
  aliases: ['amd']
},
{
  skill: 'extjs',
  title: 'ExtJS',
  icon: DiExtjs,
  category: 'framework',
  aliases: ['sencha']
},
{
  skill: 'ionic',
  title: 'Ionic Framework',
  icon: DiIonic,
  category: 'framework',
  aliases: ['ionic-framework', 'mobile']
},
{
  skill: 'krakenjs',
  title: 'KrakenJS',
  icon: DiKrakenjs,
  category: 'framework',
  aliases: ['paypal']
},

// Development Tools & Environments
{
  skill: 'sublime',
  title: 'Sublime Text',
  icon: DiSublime,
  category: 'tool',
  aliases: ['text-editor']
},
{
  skill: 'dreamweaver',
  title: 'Dreamweaver',
  icon: DiDreamweaver,
  category: 'tool',
  aliases: ['adobe-dreamweaver']
},
{
  skill: 'komodo',
  title: 'Komodo IDE',
  icon: DiKomodo,
  category: 'tool',
  aliases: ['activestate']
},
{
  skill: 'coda',
  title: 'Coda',
  icon: DiCoda,
  category: 'tool',
  aliases: ['panic']
},
{
  skill: 'brackets',
  title: 'Brackets',
  icon: DiBrackets,
  category: 'tool',
  aliases: ['adobe-brackets']
},

// Other Technologies
{
  skill: 'phonegap',
  title: 'PhoneGap',
  icon: DiPhonegap,
  category: 'tool',
  aliases: ['cordova', 'apache-cordova']
},
{
  skill: 'bower',
  title: 'Bower',
  icon: DiBower,
  category: 'tool',
  aliases: ['package-manager']
},
{
  skill: 'grunt',
  title: 'Grunt',
  icon: DiGrunt,
  category: 'tool',
  aliases: ['task-runner']
},
{
  skill: 'gulp',
  title: 'Gulp',
  icon: DiGulp,
  category: 'tool',
  aliases: ['task-runner']
},

// Creative Software
{
  skill: 'photoshop',
  title: 'Adobe Photoshop',
  icon: DiPhotoshop,
  category: 'tool',
  aliases: ['ps', 'image-editing']
},

// Operating Systems & Platforms
{
  skill: 'windows',
  title: 'Windows',
  icon: DiWindows,
  category: 'platform',
  aliases: ['microsoft-windows']
},
{
  skill: 'blackberry',
  title: 'BlackBerry',
  icon: DiBlackberry,
  category: 'platform',
  aliases: ['rim']
},

// File Storage & Sync
{
  skill: 'dropbox',
  title: 'Dropbox',
  icon: DiDropbox,
  category: 'tool',
  aliases: ['cloud-storage']
},
{
  skill: 'onedrive',
  title: 'OneDrive',
  icon: DiOnedrive,
  category: 'tool',
  aliases: ['microsoft-onedrive', 'cloud-storage']
},
{
  skill: 'googledrive',
  title: 'Google Drive',
  icon: DiGoogleDrive,
  category: 'tool',
  aliases: ['gdrive', 'cloud-storage']
},

// Databases
{
  skill: 'mssql',
  title: 'Microsoft SQL Server',
  icon: DiMsqlServer,
  category: 'database',
  aliases: ['sql-server', 'tsql']
},

// Analytics
{
  skill: 'googleanalytics',
  title: 'Google Analytics',
  icon: DiGoogleAnalytics,
  category: 'tool', 
  aliases: ['ga', 'web-analytics']
},

// Additional Alternative Icons
{
  skill: 'javascript-badge',
  title: 'JavaScript',
  icon: DiJsBadge,
  category: 'programming',
  aliases: ['js-badge']
},
{
  skill: 'nodejs-small',
  title: 'Node.js',
  icon: DiNodejsSmall,
  category: 'framework',
  aliases: ['node-small']
},
{
  skill: 'html5-3d',
  title: 'HTML5 3D Effects',
  icon: DiHtml53DEffects,
  category: 'programming',
  aliases: ['html-3d']
},
{
  skill: 'html5-connectivity',
  title: 'HTML5 Connectivity',
  icon: DiHtml5Connectivity,
  category: 'programming',
  aliases: ['html-connectivity']
},
{
  skill: 'html5-device',
  title: 'HTML5 Device Access',
  icon: DiHtml5DeviceAccess,
  category: 'programming',
  aliases: ['html-device']
},
{
  skill: 'html5-multimedia',
  title: 'HTML5 Multimedia',
  icon: DiHtml5Multimedia,
  category: 'programming',
  aliases: ['html-multimedia']
},
{
  skill: 'css3-full',
  title: 'CSS3',
  icon: DiCss3Full,
  category: 'programming',
  aliases: ['css-full']
},
{
  skill: 'dart1',
  title: 'Dart',
  icon: DiDart,
  category: 'programming',
  aliases: ['dart-alt', 'flutter-language-alt']
},
{
  skill: 'groovy1',
  title: 'Groovy',
  icon: DiGroovy,
  category: 'programming',
  aliases: ['groovy-alt', 'groovy-language']
},
{
  skill: 'perl1',
  title: 'Perl',
  icon: DiPerl,
  category: 'programming',
  aliases: ['perl-alt', 'pl-alt']
},
{
  skill: 'react1',
  title: 'React',
  icon: DiReact,
  category: 'framework',
  aliases: ['reactjs-alt', 'react-alt']
},
{
  skill: 'php1',
  title: 'PHP',
  icon: DiPhp,
  category: 'programming',
  aliases: ['php-alt', 'php-language']
},
{
  skill: 'scala1',
  title: 'Scala',
  icon: DiScala,
  category: 'programming',
  aliases: ['scala-alt', 'scala-language']
},
{
  skill: 'swift1',
  title: 'Swift',
  icon: DiSwift,
  category: 'programming',
  aliases: ['swift-alt', 'apple-language']
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