import { SiJavascript, SiTypescript, SiPython, SiReact, SiVuedotjs, SiAngular, SiNodedotjs, SiMongodb, SiPostgresql, SiMysql, SiGooglecloud, SiDocker, SiKubernetes, SiGit, SiGithub, SiNextdotjs, SiNestjs, SiExpress, SiDjango, SiFlask, SiSpring, SiRust, SiGo, SiCplusplus, SiPhp, SiSwift, SiKotlin, SiDart, SiFlutter, SiRedis, SiNeo4J, SiGraphql, SiTailwindcss, SiSass, SiJest, SiCypress, SiSelenium, SiJenkins, SiCircleci, SiTravisci, } from 'react-icons/si';
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import { FaAws, FaJava } from "react-icons/fa";
import { DiGit, DiDocker, DiJavascript, DiPython, DiJava, DiRuby, DiRust, DiPostgresql, DiMysql, DiMongodb, DiRedis, DiNginx, DiHtml5, DiCss3, DiSass, } from 'react-icons/di';
export var iconMappings = [
    // Programming Languages
    {
        name: 'javascript',
        icon: SiJavascript,
        category: 'programming',
        aliases: ['js', 'ecmascript']
    },
    {
        name: 'typescript',
        icon: SiTypescript,
        category: 'programming',
        aliases: ['ts']
    },
    {
        name: 'python',
        icon: SiPython,
        category: 'programming',
        aliases: ['py']
    },
    {
        name: 'java',
        icon: FaJava,
        category: 'programming',
        aliases: ['jvm']
    },
    {
        name: 'rust',
        icon: SiRust,
        category: 'programming',
        aliases: ['rs']
    },
    {
        name: 'go',
        icon: SiGo,
        category: 'programming',
        aliases: ['golang']
    },
    {
        name: 'cpp',
        icon: SiCplusplus,
        category: 'programming',
        aliases: ['c++']
    },
    {
        name: 'csharp',
        icon: TbBrandCSharp,
        category: 'programming',
        aliases: ['c#', 'dotnet']
    },
    {
        name: 'php',
        icon: SiPhp,
        category: 'programming',
        aliases: []
    },
    {
        name: 'swift',
        icon: SiSwift,
        category: 'programming',
        aliases: ['ios']
    },
    {
        name: 'kotlin',
        icon: SiKotlin,
        category: 'programming',
        aliases: ['android']
    },
    // Additional Programming Languages
    {
        name: 'ruby',
        icon: DiRuby,
        category: 'programming',
        aliases: ['rb', 'rails']
    },
    {
        name: 'dart',
        icon: SiDart,
        category: 'programming',
        aliases: ['flutter-lang']
    },
    // Frontend Frameworks
    {
        name: 'react',
        icon: SiReact,
        category: 'framework',
        aliases: ['reactjs', 'react.js']
    },
    {
        name: 'vue',
        icon: SiVuedotjs,
        category: 'framework',
        aliases: ['vuejs', 'vue.js']
    },
    {
        name: 'angular',
        icon: SiAngular,
        category: 'framework',
        aliases: ['ng']
    },
    {
        name: 'next',
        icon: SiNextdotjs,
        category: 'framework',
        aliases: ['nextjs', 'next.js']
    },
    // Backend Frameworks
    {
        name: 'node',
        icon: SiNodedotjs,
        category: 'framework',
        aliases: ['nodejs', 'node.js']
    },
    {
        name: 'express',
        icon: SiExpress,
        category: 'framework',
        aliases: ['expressjs']
    },
    {
        name: 'nest',
        icon: SiNestjs,
        category: 'framework',
        aliases: ['nestjs']
    },
    {
        name: 'django',
        icon: SiDjango,
        category: 'framework',
        aliases: ['py-web']
    },
    {
        name: 'flask',
        icon: SiFlask,
        category: 'framework',
        aliases: []
    },
    {
        name: 'spring',
        icon: SiSpring,
        category: 'framework',
        aliases: ['spring-boot']
    },
    // Databases
    {
        name: 'mongodb',
        icon: SiMongodb,
        category: 'database',
        aliases: ['mongo']
    },
    {
        name: 'postgresql',
        icon: SiPostgresql,
        category: 'database',
        aliases: ['postgres']
    },
    {
        name: 'mysql',
        icon: SiMysql,
        category: 'database',
        aliases: []
    },
    {
        name: 'redis',
        icon: SiRedis,
        category: 'database',
        aliases: ['cache']
    },
    {
        name: 'neo4j',
        icon: SiNeo4J,
        category: 'database',
        aliases: ['graph-db']
    },
    {
        name: 'graphql',
        icon: SiGraphql,
        category: 'database',
        aliases: ['gql']
    },
    // Cloud & DevOps
    {
        name: 'aws',
        icon: FaAws,
        category: 'cloud',
        aliases: ['amazon']
    },
    {
        name: 'gcp',
        icon: SiGooglecloud,
        category: 'cloud',
        aliases: ['google-cloud']
    },
    {
        name: 'azure',
        icon: TbBrandAzure,
        category: 'cloud',
        aliases: ['microsoft-azure']
    },
    {
        name: 'docker',
        icon: SiDocker,
        category: 'tool',
        aliases: ['container']
    },
    {
        name: 'kubernetes',
        icon: SiKubernetes,
        category: 'tool',
        aliases: ['k8s']
    },
    // Testing
    {
        name: 'jest',
        icon: SiJest,
        category: 'tool',
        aliases: ['testing']
    },
    {
        name: 'cypress',
        icon: SiCypress,
        category: 'tool',
        aliases: ['e2e']
    },
    {
        name: 'selenium',
        icon: SiSelenium,
        category: 'tool',
        aliases: ['webdriver']
    },
    // CI/CD
    {
        name: 'jenkins',
        icon: SiJenkins,
        category: 'tool',
        aliases: ['ci']
    },
    {
        name: 'circleci',
        icon: SiCircleci,
        category: 'tool',
        aliases: ['ci']
    },
    {
        name: 'travis',
        icon: SiTravisci,
        category: 'tool',
        aliases: ['ci']
    },
    // Version Control
    {
        name: 'git',
        icon: SiGit,
        category: 'tool',
        aliases: ['vcs']
    },
    {
        name: 'github',
        icon: SiGithub,
        category: 'platform',
        aliases: []
    },
    // Styling
    {
        name: 'tailwind',
        icon: SiTailwindcss,
        category: 'framework',
        aliases: ['tailwindcss']
    },
    {
        name: 'sass',
        icon: SiSass,
        category: 'tool',
        aliases: ['scss']
    },
    // Frontend Technologies
    {
        name: 'html',
        icon: DiHtml5,
        category: 'programming',
        aliases: ['html5', 'markup']
    },
    {
        name: 'css',
        icon: DiCss3,
        category: 'programming',
        aliases: ['css3', 'styles']
    },
    {
        name: 'flutter',
        icon: SiFlutter,
        category: 'framework',
        aliases: ['flutter-framework', 'mobile']
    },
    // Infrastructure & Tools
    {
        name: 'nginx',
        icon: DiNginx,
        category: 'tool',
        aliases: ['web-server', 'proxy', 'load-balancer']
    },
    // Alternative DevIcon versions
    {
        name: 'git1',
        icon: DiGit,
        category: 'tool',
        aliases: ['vcs-alt']
    },
    {
        name: 'docker1',
        icon: DiDocker,
        category: 'tool',
        aliases: ['container-alt']
    },
    {
        name: 'javascript1',
        icon: DiJavascript,
        category: 'programming',
        aliases: ['js-alt', 'ecmascript-alt']
    },
    {
        name: 'python1',
        icon: DiPython,
        category: 'programming',
        aliases: ['py-alt']
    },
    {
        name: 'java1',
        icon: DiJava,
        category: 'programming',
        aliases: ['jvm-alt']
    },
    {
        name: 'rust1',
        icon: DiRust,
        category: 'programming',
        aliases: ['rs-alt']
    },
    {
        name: 'postgresql1',
        icon: DiPostgresql,
        category: 'database',
        aliases: ['postgres-alt']
    },
    {
        name: 'mysql1',
        icon: DiMysql,
        category: 'database',
        aliases: ['mysql-alt']
    },
    {
        name: 'mongodb1',
        icon: DiMongodb,
        category: 'database',
        aliases: ['mongo-alt']
    },
    {
        name: 'redis1',
        icon: DiRedis,
        category: 'database',
        aliases: ['cache-alt']
    },
    {
        name: 'sass1',
        icon: DiSass,
        category: 'tool',
        aliases: ['scss-alt']
    }
];
export var getIconByName = function (name) {
    var normalizedName = name.toLowerCase();
    return iconMappings.find(function (mapping) {
        var _a;
        return mapping.name === normalizedName ||
            ((_a = mapping.aliases) === null || _a === void 0 ? void 0 : _a.includes(normalizedName));
    });
};
//# sourceMappingURL=iconMappings.js.map