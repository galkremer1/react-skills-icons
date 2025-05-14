// Import everything from the iconImports file
import * as Icons from './iconImports';



export interface SkillIconMapping {
  skill: Icons.SkillName; 
  title: string;
  icon: Icons.IconType;
  category: 'programming' | 'framework' | 'database' | 'cloud' | 'tool' | 'platform';
  aliases: string[];
}

export const iconMappings: SkillIconMapping[] = [
  // ==========================================
  // PROGRAMMING LANGUAGES
  // ==========================================
  
  // JavaScript & TypeScript
  {
    skill: 'javascript',  
    title: 'JavaScript',
    icon: Icons.SiJavascript,
    category: 'programming',
    aliases: ['js', 'ecmascript', 'es6', 'es2015', 'vanilla-js', 'frontend-language']
  },
  {
    skill: 'typescript',
    title: 'TypeScript',
    icon: Icons.SiTypescript,
    category: 'programming',
    aliases: ['ts', 'typed-javascript', 'microsoft-typescript', 'static-js']
  },
  {
    skill: 'javascript1',
    title: 'JavaScript',
    icon: Icons.DiJavascript,
    category: 'programming',
    aliases: ['js-alt', 'ecmascript-alt', 'browser-language']
  },
  {
    skill: 'javascript-badge',
    title: 'JavaScript',
    icon: Icons.DiJsBadge,
    category: 'programming',
    aliases: ['js-badge', 'javascript-icon']
  },
  
  // Python
  {
    skill: 'python',
    title: 'Python',
    icon: Icons.SiPython,
    category: 'programming',
    aliases: ['py', 'python3', 'cpython', 'data-science-language']
  },
  {
    skill: 'python1',
    title: 'Python',
    icon: Icons.DiPython,
    category: 'programming',
    aliases: ['py-alt', 'python-alt', 'scripting-language']
  },
  
  // JVM Languages
  {
    skill: 'java',
    title: 'Java',
    icon: Icons.FaJava,
    category: 'programming',
    aliases: ['jvm', 'oracle-java', 'openjdk', 'enterprise-language']
  },
  {
    skill: 'java1',
    title: 'Java',
    icon: Icons.DiJava,
    category: 'programming',
    aliases: ['jvm-alt', 'java-alt', 'java-programming']
  },
  {
    skill: 'kotlin',
    title: 'Kotlin',
    icon: Icons.SiKotlin,
    category: 'programming',
    aliases: ['android-language', 'jetbrains-kotlin', 'modern-java', 'kotlin-jvm']
  },
  {
    skill: 'scala',
    title: 'Scala',
    icon: Icons.SiScala,
    category: 'programming',
    aliases: ['scala-jvm', 'functional-jvm', 'spark-language', 'typesafe-language']
  },
  {
    skill: 'scala1',
    title: 'Scala',
    icon: Icons.DiScala,
    category: 'programming',
    aliases: ['scala-alt', 'scala-language', 'akka-language']
  },
  {
    skill: 'groovy',
    title: 'Groovy',
    icon: Icons.SiApachegroovy,
    category: 'programming',
    aliases: ['groovy-jvm', 'gradle-language', 'jenkins-language', 'scripting-jvm']
  },
  {
    skill: 'groovy1',
    title: 'Groovy',
    icon: Icons.DiGroovy,
    category: 'programming',
    aliases: ['groovy-alt', 'groovy-language', 'apache-groovy']
  },
  
  // Systems Programming
  {
    skill: 'rust',
    title: 'Rust',
    icon: Icons.SiRust,
    category: 'programming',
    aliases: ['rs', 'rustlang', 'systems-programming', 'memory-safe']
  },
  {
    skill: 'rust1',
    title: 'Rust',
    icon: Icons.DiRust,
    category: 'programming',
    aliases: ['rs-alt', 'rust-alt', 'mozilla-rust']
  },
  {
    skill: 'go',
    title: 'Go',
    icon: Icons.SiGo,
    category: 'programming',
    aliases: ['golang', 'google-go', 'go-lang', 'concurrent-language']
  },
  {
    skill: 'cpp',
    title: 'C++',
    icon: Icons.SiCplusplus,
    category: 'programming',
    aliases: ['c++', 'cpp', 'cplusplus', 'systems-language', 'game-development']
  },
  {
    skill: 'csharp',
    title: 'C#',
    icon: Icons.TbBrandCSharp,
    category: 'programming',
    aliases: ['c#', 'dotnet', 'csharp', 'microsoft-csharp', 'unity-language']
  },
  {
    skill: 'assembly',
    title: 'Assembly',
    icon: Icons.SiAssemblyscript,
    category: 'programming',
    aliases: ['asm', 'assembler', 'low-level', 'machine-code']
  },
  
  // Web Development
  {
    skill: 'php',
    title: 'PHP',
    icon: Icons.SiPhp,
    category: 'programming',
    aliases: ['php-language', 'server-language', 'web-backend', 'php-development']
  },
  {
    skill: 'php1',
    title: 'PHP',
    icon: Icons.DiPhp,
    category: 'programming',
    aliases: ['php-alt', 'php-language', 'web-scripting']
  },
  {
    skill: 'html',
    title: 'HTML',
    icon: Icons.DiHtml5,
    category: 'programming',
    aliases: ['html5', 'markup', 'web-markup', 'hypertext-markup']
  },
  {
    skill: 'css',
    title: 'CSS',
    icon: Icons.DiCss3,
    category: 'programming',
    aliases: ['css3', 'styles', 'web-styles', 'cascading-style-sheets']
  },
  {
    skill: 'css3-full',
    title: 'CSS3',
    icon: Icons.DiCss3Full,
    category: 'programming',
    aliases: ['css-full', 'css3-logo', 'css-styling']
  },
  
  // Mobile Development
  {
    skill: 'swift',
    title: 'Swift',
    icon: Icons.SiSwift,
    category: 'programming',
    aliases: ['ios', 'apple-language', 'ios-development', 'macos-development']
  },
  {
    skill: 'swift1',
    title: 'Swift',
    icon: Icons.DiSwift,
    category: 'programming',
    aliases: ['swift-alt', 'apple-language', 'apple-swift']
  },
  {
    skill: 'dart',
    title: 'Dart',
    icon: Icons.SiDart,
    category: 'programming',
    aliases: ['flutter-lang', 'google-dart', 'flutter-language', 'cross-platform-language']
  },
  {
    skill: 'dart1',
    title: 'Dart',
    icon: Icons.DiDart,
    category: 'programming',
    aliases: ['dart-alt', 'flutter-language-alt', 'dart-vm']
  },  
  // Scripting & Automation
  {
    skill: 'ruby',
    title: 'Ruby',
    icon: Icons.DiRuby,
    category: 'programming',
    aliases: ['rb', 'rails', 'ruby-language', 'ruby-on-rails', 'scripting'
    ]
  },
  {
    skill: 'perl',
    title: 'Perl',
    icon: Icons.SiPerl,
    category: 'programming',
    aliases: ['pl', 'text-processing', 'perl-scripting', 'system-admin']
  },
  {
    skill: 'perl1',
    title: 'Perl',
    icon: Icons.DiPerl,
    category: 'programming',
    aliases: ['perl-alt', 'pl-alt', 'practical-extraction']
  },
  {
    skill: 'bash',
    title: 'Bash',
    icon: Icons.SiGnubash,
    category: 'programming',
    aliases: ['shell', 'shell-scripting', 'unix-shell', 'command-line']
  },
  {
    skill: 'powershell',
    title: 'PowerShell',
    icon: Icons.SiPowershell,
    category: 'programming',
    aliases: ['ps', 'microsoft-powershell', 'windows-scripting', 'automation']
  },
  
  // Functional Languages
  {
    skill: 'elixir',
    title: 'Elixir',
    icon: Icons.SiElixir,
    category: 'programming',
    aliases: ['ex', 'exs', 'erlang-vm', 'phoenix-framework', 'functional']
  },
  {
    skill: 'haskell',
    title: 'Haskell',
    icon: Icons.SiHaskell,
    category: 'programming',
    aliases: ['hs', 'purely-functional', 'haskell-language', 'advanced-functional']
  },
  {
    skill: 'haskell1',
    title: 'Haskell',
    icon: Icons.DiHaskell,
    category: 'programming',
    aliases: ['hs-alt', 'haskell-alt', 'haskell-logo']
  },
  {
    skill: 'erlang',
    title: 'Erlang',
    icon: Icons.SiErlang,
    category: 'programming',
    aliases: ['erl', 'concurrent-programming', 'telecom', 'fault-tolerant']
  },
  {
    skill: 'erlang1',
    title: 'Erlang',
    icon: Icons.DiErlang,
    category: 'programming',
    aliases: ['erl-alt', 'erlang-alt', 'beam-vm']
  },
  {
    skill: 'clojure',
    title: 'Clojure',
    icon: Icons.SiClojure,
    category: 'programming',
    aliases: ['clj', 'lisp-dialect', 'jvm-lisp', 'functional-jvm']
  },
  {
    skill: 'clojure1',
    title: 'Clojure',
    icon: Icons.DiClojure,
    category: 'programming',
    aliases: ['clj-alt', 'clojurescript', 'clojure-alt']
  },
  {
    skill: 'fsharp',
    title: 'F#',
    icon: Icons.SiFsharp,
    category: 'programming',
    aliases: ['fs', 'dotnet-functional', 'microsoft-fsharp', 'ml-family']
  },
  {
    skill: 'fsharp1',
    title: 'F#',
    icon: Icons.DiFsharp,
    category: 'programming',
    aliases: ['fs-alt', 'functional-dotnet', 'fsharp-alt']
  },
  {
    skill: 'ocaml',
    title: 'OCaml',
    icon: Icons.SiOcaml,
    category: 'programming',
    aliases: ['ml', 'ocaml-language', 'functional-systems', 'ml-family']
  },
  
  // Scientific & Data Languages
  {
    skill: 'r',
    title: 'R',
    icon: Icons.SiR,
    category: 'programming',
    aliases: ['rlang', 'statistics', 'data-analysis', 'data-science']
  },
  {
    skill: 'julia',
    title: 'Julia',
    icon: Icons.SiJulia,
    category: 'programming',
    aliases: ['jl', 'scientific-computing', 'numerical-analysis', 'technical-computing']
  },
  {
    skill: 'fortran',
    title: 'Fortran',
    icon: Icons.SiFortran,
    category: 'programming',
    aliases: ['scientific-computing', 'numerical', 'hpc', 'high-performance']
  },
  
  // Document & Markup Languages
  {
    skill: 'latex',
    title: 'LaTeX',
    icon: Icons.SiLatex,
    category: 'programming',
    aliases: ['tex', 'document-preparation', 'typesetting', 'academic-writing']
  },
  {
    skill: 'markdown',
    title: 'Markdown',
    icon: Icons.DiMarkdown,
    category: 'tool',
    aliases: ['md', 'markdown-syntax', 'lightweight-markup', 'documentation']
  },
  {
    skill: 'json',
    title: 'JSON',
    icon: Icons.SiJson,
    category: 'programming',
    aliases: ['javascript-object-notation', 'data-format', 'data-interchange', 'web-data']
  },
  {
    skill: 'yaml',
    title: 'YAML',
    icon: Icons.SiYaml,
    category: 'programming',
    aliases: ['yml', 'config-format', 'data-serialization', 'human-readable']
  },
  
  // Specialty Languages
  {
    skill: 'wasm',
    title: 'WebAssembly',
    icon: Icons.SiWebassembly,
    category: 'programming',
    aliases: ['webassembly', 'wasm-binary', 'browser-binary', 'web-performance']
  },
  {
    skill: 'solidity',
    title: 'Solidity',
    icon: Icons.SiSolidity,
    category: 'programming',
    aliases: ['sol', 'ethereum', 'smart-contracts', 'blockchain', 'web3']
  },
  {
    skill: 'lua',
    title: 'Lua',
    icon: Icons.SiLua,
    category: 'programming',
    aliases: ['embedded-scripting', 'game-scripting', 'lightweight-language', 'embeddable']
  },
  {
    skill: 'prolog',
    title: 'Prolog',
    icon: Icons.DiProlog,
    category: 'programming',
    aliases: ['pl', 'logic-programming', 'ai-language', 'declarative']
  },
  {
    skill: 'coffeescript',
    title: 'CoffeeScript',
    icon: Icons.SiCoffeescript,
    category: 'programming',
    aliases: ['coffee', 'javascript-transpiler', 'js-alternative', 'clean-syntax']
  },
  {
    skill: 'vbnet',
    title: 'VB.NET',
    icon: Icons.SiDotnet,
    category: 'programming',
    aliases: ['visualbasic', 'visual-basic', 'vb', 'microsoft-basic']
  },
  {
    skill: 'delphi',
    title: 'Delphi',
    icon: Icons.SiDelphi,
    category: 'programming',
    aliases: ['object-pascal', 'pascal', 'rad-tool', 'windows-development']
  },

  // ==========================================
  // FRONTEND FRAMEWORKS & LIBRARIES
  // ==========================================
  
  // React Ecosystem
  {
    skill: 'react',
    title: 'React',
    icon: Icons.SiReact,
    category: 'framework',
    aliases: ['reactjs', 'react.js', 'react-dom', 'facebook-react', 'ui-library']
  },
  {
    skill: 'react1',
    title: 'React',
    icon: Icons.DiReact,
    category: 'framework',
    aliases: ['reactjs-alt', 'react-alt', 'react-library']
  },
  {
    skill: 'redux',
    title: 'Redux',
    icon: Icons.SiRedux,
    category: 'framework',
    aliases: ['react-redux', 'state-management', 'flux-pattern', 'store'
    ]
  },
  {
    skill: 'next',
    title: 'Next.js',
    icon: Icons.SiNextdotjs,
    category: 'framework',
    aliases: ['nextjs', 'next.js', 'react-framework', 'ssr-react', 'vercel']
  },
  
  // Vue Ecosystem
  {
    skill: 'vue',
    title: 'Vue.js',
    icon: Icons.SiVuedotjs,
    category: 'framework',
    aliases: ['vuejs', 'vue.js', 'vue-framework', 'progressive-framework', 'evan-you']
  },
  
  // Angular Ecosystem
  {
    skill: 'angular',
    title: 'Angular',
    icon: Icons.SiAngular,
    category: 'framework',
    aliases: ['ng', 'angular2+', 'google-angular', 'typescript-framework', 'spa-framework']
  },
  {
    skill: 'angular1',
    title: 'Angular',
    icon: Icons.DiAngularSimple,
    category: 'framework',
    aliases: ['ng-alt', 'angularjs', 'angular-alt']
  },
  
  // UI Component Libraries
  {
    skill: 'materialui',
    title: 'Material-UI',
    icon: Icons.SiMaterialdesign,
    category: 'framework',
    aliases: ['mui', 'material-design', 'react-components', 'ui-library']
  },
  {
    skill: 'antdesign',
    title: 'Ant Design',
    icon: Icons.SiAntdesign,
    category: 'framework',
    aliases: ['antd', 'ant-design', 'alibaba-design', 'react-ui']
  },
  {
    skill: 'chakraui',
    title: 'Chakra UI',
    icon: Icons.SiChakraui,
    category: 'framework',
    aliases: ['chakra', 'react-chakra', 'accessible-ui', 'modern-components']
  },
  
  // CSS Frameworks
  {
    skill: 'tailwind',
    title: 'Tailwind CSS',
    icon: Icons.SiTailwindcss,
    category: 'framework',
    aliases: ['tailwindcss', 'utility-css', 'atomic-css', 'utility-first', 'tailwind css']
  },
  {
    skill: 'bootstrap',
    title: 'Bootstrap',
    icon: Icons.SiBootstrap,
    category: 'framework',
    aliases: ['twitter-bootstrap', 'responsive-framework', 'css-framework', 'ui-toolkit']
  },
  {
    skill: 'bootstrap1',
    title: 'Bootstrap',
    icon: Icons.DiBootstrap,
    category: 'framework',
    aliases: ['bootstrap-alt', 'bootstrap-framework', 'responsive-design']
  },
  {
    skill: 'bulma',
    title: 'Bulma',
    icon: Icons.SiBulma,
    category: 'framework',
    aliases: ['bulma-css', 'flexbox-framework', 'modern-css', 'lightweight-framework']
  },
  {
    skill: 'materialize',
    title: 'Materialize CSS',
    icon: Icons.DiMaterializecss,
    category: 'framework',
    aliases: ['materializecss', 'material-design-css', 'responsive-materialize']
  },
  
  // CSS Preprocessors
  {
    skill: 'sass',
    title: 'Sass',
    icon: Icons.SiSass,
    category: 'tool',
    aliases: ['scss', 'css-preprocessor', 'sass-lang', 'advanced-css']
  },
  {
    skill: 'sass1',
    title: 'Sass',
    icon: Icons.DiSass,
    category: 'tool',
    aliases: ['scss-alt', 'sass-preprocessor', 'css-extension']
  },
  {
    skill: 'less',
    title: 'Less',
    icon: Icons.SiLess,
    category: 'tool',
    aliases: ['lesscss', 'css-preprocessor', 'dynamic-css', 'stylesheet-language']
  },
  {
    skill: 'stylus',
    title: 'Stylus',
    icon: Icons.DiStylus,
    category: 'tool',
    aliases: ['css-preprocessor', 'stylus-lang', 'expressive-css', 'indented-css']
  },
  {
    skill: 'postcss',
    title: 'PostCSS',
    icon: Icons.SiPostcss,
    category: 'tool',
    aliases: ['css-postprocessor', 'css-transformation', 'autoprefixer', 'modern-css-tools']
  },
  
  // Other Frontend Libraries
  {
    skill: 'jquery',
    title: 'jQuery',
    icon: Icons.DiJqueryLogo,
    category: 'framework',
    aliases: ['js-library', 'dom-manipulation', 'legacy-js', 'cross-browser']
  },
  {
    skill: 'backbone',
    title: 'Backbone.js',
    icon: Icons.DiBackbone,
    category: 'framework',
    aliases: ['backbonejs', 'mvc-framework', 'spa-library', 'lightweight-framework']
  },
  {
    skill: 'ember',
    title: 'Ember.js',
    icon: Icons.DiEmber,
    category: 'framework',
    aliases: ['emberjs', 'ember-framework', 'ambitious-web-apps', 'convention-over-configuration']
  },
  {
    skill: 'mootools',
    title: 'MooTools',
    icon: Icons.DiMootools,
    category: 'framework',
    aliases: ['javascript-framework', 'modular-js', 'legacy-framework', 'oop-js']
  },
  {
    skill: 'sizzlejs',
    title: 'SizzleJS',
    icon: Icons.DiSizzlejs,
    category: 'framework',
    aliases: ['sizzle', 'css-selector-engine', 'jquery-core', 'dom-selector']
  },
  {
    skill: 'extjs',
    title: 'ExtJS',
    icon: Icons.DiExtjs,
    category: 'framework',
    aliases: ['sencha', 'enterprise-web-apps', 'rich-internet-applications', 'desktop-like-web']
  },

  // ==========================================
  // BACKEND FRAMEWORKS
  // ==========================================
  
  // Node.js Ecosystem
  {
    skill: 'nodejs',
    title: 'Node.js',
    icon: Icons.SiNodedotjs,
    category: 'framework',
    aliases: ['node', 'nodejs', 'server-javascript', 'javascript-runtime', 'v8-runtime', 'node.js']
  },
  {
    skill: 'nodejs1',
    title: 'Node.js',
    icon: Icons.DiNodejs,
    category: 'framework',
    aliases: ['node-alt', 'server-js', 'node-runtime', 'js-backend']
  },
  {
    skill: 'nodejs-small',
    title: 'Node.js',
    icon: Icons.DiNodejsSmall,
    category: 'framework',
    aliases: ['node-small', 'nodejs-icon', 'node-server']
  },
  {
    skill: 'express',
    title: 'Express.js',
    icon: Icons.SiExpress,
    category: 'framework',
    aliases: ['expressjs', 'node-web-framework', 'minimalist-framework', 'web-server-framework']
  },
  {
    skill: 'nest',
    title: 'NestJS',
    icon: Icons.SiNestjs,
    category: 'framework',
    aliases: ['nestjs', 'typescript-framework', 'angular-inspired', 'node-enterprise-framework']
  },
  
  // Python Web Frameworks
  {
    skill: 'django',
    title: 'Django',
    icon: Icons.SiDjango,
    category: 'framework',
    aliases: ['py-web', 'python-web-framework', 'batteries-included', 'orm-framework']
  },
  {
    skill: 'django1',
    title: 'Django',
    icon: Icons.DiDjango,
    category: 'framework',
    aliases: ['django-alt', 'python-mvc', 'full-stack-python']
  },
  {
    skill: 'flask',
    title: 'Flask',
    icon: Icons.SiFlask,
    category: 'framework',
    aliases: ['python-microframework', 'lightweight-python', 'wsgi-framework', 'minimalist-web']
  },
  
  // PHP Frameworks
  {
    skill: 'laravel',
    title: 'Laravel',
    icon: Icons.DiLaravel,
    category: 'framework',
    aliases: ['php-framework', 'modern-php', 'eloquent-orm', 'blade-templates']
  },
  {
    skill: 'symfony',
    title: 'Symfony',
    icon: Icons.DiSymfony,
    category: 'framework',
    aliases: ['php-components', 'enterprise-php', 'modular-framework', 'high-performance']
  },
  {
    skill: 'codeigniter',
    title: 'CodeIgniter',
    icon: Icons.DiCodeigniter,
    category: 'framework',
    aliases: ['php-mvc', 'lightweight-php', 'small-footprint', 'rapid-development']
  },
  
  // Java/JVM Frameworks
  {
    skill: 'spring',
    title: 'Spring',
    icon: Icons.SiSpring,
    category: 'framework',
    aliases: ['spring-boot', 'java-framework', 'enterprise-java', 'dependency-injection', 'spring-ecosystem']
  },
  
  // Mobile Frameworks
  {
    skill: 'flutter',
    title: 'Flutter',
    icon: Icons.SiFlutter,
    category: 'framework',
    aliases: ['flutter-framework', 'mobile', 'cross-platform-ui', 'google-flutter', 'dart-ui']
  },
  {
    skill: 'ionic',
    title: 'Ionic Framework',
    icon: Icons.DiIonic,
    category: 'framework',
    aliases: ['ionic-framework', 'mobile', 'hybrid-mobile', 'cross-platform-mobile', 'angular-mobile']
  },
  
  // Desktop Application Frameworks
  {
    skill: 'electron',
    title: 'Electron',
    icon: Icons.SiElectron,
    category: 'framework',
    aliases: ['electron-js', 'desktop-apps', 'cross-platform-desktop', 'js-desktop', 'chromium-apps']
  },
  
  // CMS & E-commerce
  {
    skill: 'wordpress',
    title: 'WordPress',
    icon: Icons.DiWordpress,
    category: 'framework',
    aliases: ['wp', 'cms', 'blogging-platform', 'content-management', 'php-cms']
  },
  {
    skill: 'drupal',
    title: 'Drupal',
    icon: Icons.DiDrupal,
    category: 'framework',
    aliases: ['cms', 'enterprise-cms', 'content-framework', 'php-cms']
  },
  {
    skill: 'joomla',
    title: 'Joomla',
    icon: Icons.DiJoomla,
    category: 'framework',
    aliases: ['cms', 'content-management', 'php-cms', 'website-framework']
  },
  {
    skill: 'magento',
    title: 'Magento',
    icon: Icons.DiMagento,
    category: 'framework',
    aliases: ['e-commerce', 'online-store', 'php-ecommerce', 'adobe-commerce']
  },
  {
    skill: 'typo3',
    title: 'TYPO3',
    icon: Icons.DiTypo3,
    category: 'framework',
    aliases: ['cms', 'enterprise-cms', 'german-cms', 'content-management-system']
  },

  // ==========================================
  // DATABASES & DATA STORAGE
  // ==========================================
  
  // SQL Databases
  {
    skill: 'postgresql',
    title: 'PostgreSQL',
    icon: Icons.SiPostgresql,
    category: 'database',
    aliases: ['postgres', 'relational-db', 'sql-database', 'advanced-sql', 'open-source-db']
  },
  {
    skill: 'postgresql1',
    title: 'PostgreSQL',
    icon: Icons.DiPostgresql,
    category: 'database',
    aliases: ['postgres-alt', 'pg', 'pgsql', 'enterprise-database']
  },
  {
    skill: 'mysql',
    title: 'MySQL',
    icon: Icons.SiMysql,
    category: 'database',
    aliases: ['sql', 'relational-database', 'oracle-mysql', 'rdbms']
  },
  {
    skill: 'mysql1',
    title: 'MySQL',
    icon: Icons.DiMysql,
    category: 'database',
    aliases: ['mysql-alt', 'my-sql', 'sql-db']
  },
  {
    skill: 'mssql',
    title: 'Microsoft SQL Server',
    icon: Icons.DiMsqlServer,
    category: 'database',
    aliases: ['sql-server', 'tsql', 'microsoft-database', 'enterprise-sql']
  },
  {
    skill: 'sqlite',
    title: 'SQLite',
    icon: Icons.DiSqllite,
    category: 'database',
    aliases: ['embedded-database', 'file-database', 'lightweight-sql', 'mobile-database']
  },
  
  // NoSQL Databases
  {
    skill: 'mongodb',
    title: 'MongoDB',
    icon: Icons.SiMongodb,
    category: 'database',
    aliases: ['mongo', 'document-database', 'nosql', 'json-database']
  },
  {
    skill: 'mongodb1',
    title: 'MongoDB',
    icon: Icons.DiMongodb,
    category: 'database',
    aliases: ['mongo-alt', 'document-db', 'nosql-database']
  },
  {
    skill: 'redis',
    title: 'Redis',
    icon: Icons.SiRedis,
    category: 'database',
    aliases: ['cache', 'in-memory-db', 'key-value-store', 'data-structure-store']
  },
  {
    skill: 'redis1',
    title: 'Redis',
    icon: Icons.DiRedis,
    category: 'database',
    aliases: ['cache-alt', 'in-memory', 'fast-database']
  },
  {
    skill: 'neo4j',
    title: 'Neo4j',
    icon: Icons.SiNeo4J,
    category: 'database',
    aliases: ['graph-db', 'graph-database', 'cypher-query', 'relationship-database']
  },
  
  // API & Query Languages
  {
    skill: 'graphql',
    title: 'GraphQL',
    icon: Icons.SiGraphql,
    category: 'database',
    aliases: ['gql', 'query-language', 'api-query', 'facebook-graphql', 'data-fetching']
  },

  // ==========================================
  // DEVOPS & CLOUD
  // ==========================================
  
  // Cloud Providers
  {
    skill: 'aws',
    title: 'AWS',
    icon: Icons.FaAws,
    category: 'cloud',
    aliases: ['amazon', 'amazon-web-services', 'cloud-provider', 'aws-cloud']
  },
  {
    skill: 'aws1',
    title: 'AWS',
    icon: Icons.DiAws,
    category: 'cloud',
    aliases: ['amazon-web-services-alt', 'aws-alt', 'amazon-cloud']
  },
  {
    skill: 'gcp',
    title: 'Google Cloud',
    icon: Icons.SiGooglecloud,
    category: 'cloud',
    aliases: ['google-cloud', 'gcp', 'google-cloud-platform', 'cloud-provider']
  },
  {
    skill: 'azure',
    title: 'Azure',
    icon: Icons.TbBrandAzure,
    category: 'cloud',
    aliases: ['microsoft-azure', 'azure-cloud', 'ms-cloud', 'cloud-provider']
  },
  {
    skill: 'heroku',
    title: 'Heroku',
    icon: Icons.DiHeroku,
    category: 'cloud',
    aliases: ['paas', 'salesforce-heroku', 'cloud-platform', 'app-hosting']
  },
  {
    skill: 'digitalocean',
    title: 'DigitalOcean',
    icon: Icons.DiDigitalOcean,
    category: 'cloud',
    aliases: ['do', 'vps-provider', 'cloud-hosting', 'droplets']
  },
  {
    skill: 'openshift',
    title: 'OpenShift',
    icon: Icons.DiOpenshift,
    category: 'cloud',
    aliases: ['redhat-openshift', 'kubernetes-platform', 'enterprise-kubernetes', 'container-platform']
  },
  
  // Containers & Orchestration
  {
    skill: 'docker',
    title: 'Docker',
    icon: Icons.SiDocker,
    category: 'tool',
    aliases: ['container', 'containerization', 'container-platform', 'virtualization']
  },
  {
    skill: 'docker1',
    title: 'Docker',
    icon: Icons.DiDocker,
    category: 'tool',
    aliases: ['container-alt', 'docker-containers', 'docker-platform']
  },
  {
    skill: 'kubernetes',
    title: 'Kubernetes',
    icon: Icons.SiKubernetes,
    category: 'tool',
    aliases: ['k8s', 'container-orchestration', 'container-management', 'cloud-native']
  },
  
  // CI/CD
  {
    skill: 'jenkins',
    title: 'Jenkins',
    icon: Icons.SiJenkins,
    category: 'tool',
    aliases: ['ci', 'continuous-integration', 'build-automation', 'cd-pipeline']
  },
  {
    skill: 'jenkins1',
    title: 'Jenkins',
    icon: Icons.DiJenkins,
    category: 'tool',
    aliases: ['jenkins-alt', 'ci-server', 'automation-server']
  },
  {
    skill: 'circleci',
    title: 'CircleCI',
    icon: Icons.SiCircleci,
    category: 'tool',
    aliases: ['ci', 'continuous-delivery', 'cloud-ci', 'automated-testing']
  },
  {
    skill: 'travis',
    title: 'Travis CI',
    icon: Icons.SiTravisci,
    category: 'tool',
    aliases: ['ci', 'github-ci', 'continuous-testing', 'open-source-ci']
  },
  {
    skill: 'travis1',
    title: 'Travis CI',
    icon: Icons.DiTravis,
    category: 'tool',
    aliases: ['ci-alt', 'travis-alt', 'build-system']
  },

  // ==========================================
  // DEVELOPER TOOLS
  // ==========================================
  
  // Version Control
  {
    skill: 'git',
    title: 'Git',
    icon: Icons.SiGit,
    category: 'tool',
    aliases: ['vcs', 'version-control', 'source-control', 'distributed-vcs']
  },
  {
    skill: 'git1',
    title: 'Git',
    icon: Icons.DiGit,
    category: 'tool',
    aliases: ['vcs-alt', 'source-management', 'git-scm']
  },
  {
    skill: 'github',
    title: 'GitHub',
    icon: Icons.SiGithub,
    category: 'platform',
    aliases: ['code-hosting', 'git-platform', 'microsoft-github', 'project-management']
  },
  {
    skill: 'github1',
    title: 'GitHub',
    icon: Icons.DiGithub,
    category: 'platform',
    aliases: ['github-alt', 'git-hosting', 'code-collaboration']
  },
  
  // Package Management
  {
    skill: 'npm',
    title: 'npm',
    icon: Icons.DiNpm,
    category: 'tool',
    aliases: ['node-package-manager', 'javascript-packages', 'package-registry', 'dependency-manager']
  },
  {
    skill: 'bower',
    title: 'Bower',
    icon: Icons.DiBower,
    category: 'tool',
    aliases: ['package-manager', 'frontend-packages', 'web-package-manager', 'legacy-dependency']
  },
  
  // Build Tools
  {
    skill: 'grunt',
    title: 'Grunt',
    icon: Icons.DiGrunt,
    category: 'tool',
    aliases: ['task-runner', 'javascript-automation', 'build-tool', 'task-automation']
  },
  {
    skill: 'gulp',
    title: 'Gulp',
    icon: Icons.DiGulp,
    category: 'tool',
    aliases: ['task-runner', 'streaming-build', 'automation-toolkit', 'js-task-runner']
  },
  {
    skill: 'webpack',
    title: 'Webpack',
    icon: Icons.SiWebpack,
    category: 'tool',
    aliases: ['module-bundler', 'asset-bundler', 'js-bundler', 'build-tool']
  },
  
  // Testing
  {
    skill: 'jest',
    title: 'Jest',
    icon: Icons.SiJest,
    category: 'tool',
    aliases: ['testing', 'javascript-testing', 'react-testing', 'test-framework']
  },
  {
    skill: 'cypress',
    title: 'Cypress',
    icon: Icons.SiCypress,
    category: 'tool',
    aliases: ['e2e', 'end-to-end-testing', 'frontend-testing', 'browser-testing']
  },
  {
    skill: 'selenium',
    title: 'Selenium',
    icon: Icons.SiSelenium,
    category: 'tool',
    aliases: ['webdriver', 'browser-automation', 'ui-testing', 'automated-testing']
  },
  
  // Server Software
  {
    skill: 'nginx',
    title: 'Nginx',
    icon: Icons.DiNginx,
    category: 'tool',
    aliases: ['web-server', 'proxy', 'load-balancer', 'reverse-proxy', 'high-performance-server']
  },
  
  // IDEs & Text Editors
  {
    skill: 'intellij',
    title: 'IntelliJ IDEA',
    icon: Icons.DiIntellij,
    category: 'tool',
    aliases: ['idea', 'jetbrains-ide', 'java-ide', 'integrated-development']
  },
  {
    skill: 'vscode',
    title: 'Visual Studio Code',
    icon: Icons.SiVisualstudiocode,
    category: 'tool',
    aliases: ['vs-code', 'code-editor', 'microsoft-editor', 'javascript-editor']
  },
  {
    skill: 'visualstudio',
    title: 'Visual Studio',
    icon: Icons.DiVisualstudio,
    category: 'tool',
    aliases: ['vs', 'microsoft-ide', 'dotnet-ide', 'windows-development']
  },
  {
    skill: 'atom',
    title: 'Atom',
    icon: Icons.DiAtom,
    category: 'tool',
    aliases: ['atom-editor', 'github-editor', 'hackable-editor', 'electron-editor']
  },
  {
    skill: 'sublime',
    title: 'Sublime Text',
    icon: Icons.DiSublime,
    category: 'tool',
    aliases: ['text-editor', 'code-editor', 'fast-editor', 'cross-platform-editor']
  },
  {
    skill: 'vim',
    title: 'Vim',
    icon: Icons.DiVim,
    category: 'tool',
    aliases: ['neovim', 'text-editor', 'terminal-editor', 'modal-editor']
  },
  {
    skill: 'eclipse',
    title: 'Eclipse',
    icon: Icons.DiEclipse,
    category: 'tool',
    aliases: ['eclipse-ide', 'java-ide', 'open-source-ide', 'plugin-platform']
  },
  {
    skill: 'netbeans',
    title: 'NetBeans',
    icon: Icons.DiNetbeans,
    category: 'tool',
    aliases: ['java-ide', 'apache-netbeans', 'cross-platform-ide', 'multi-language-ide']
  },
  {
    skill: 'dreamweaver',
    title: 'Dreamweaver',
    icon: Icons.DiDreamweaver,
    category: 'tool',
    aliases: ['adobe-dreamweaver', 'web-editor', 'visual-editor', 'wysiwyg-editor']
  },
  {
    skill: 'komodo',
    title: 'Komodo IDE',
    icon: Icons.DiKomodo,
    category: 'tool',
    aliases: ['activestate', 'python-ide', 'multi-language-ide', 'scripting-ide']
  },
  {
    skill: 'coda',
    title: 'Coda',
    icon: Icons.DiCoda,
    category: 'tool',
    aliases: ['panic', 'mac-editor', 'web-development-tool', 'all-in-one-editor']
  },
  {
    skill: 'brackets',
    title: 'Brackets',
    icon: Icons.DiBrackets,
    category: 'tool',
    aliases: ['adobe-brackets', 'web-editor', 'frontend-editor', 'open-source-editor']
  },
  
  // Design Tools
  {
    skill: 'figma',
    title: 'Figma',
    icon: Icons.SiFigma,
    category: 'tool',
    aliases: ['ui-design', 'interface-design', 'collaborative-design', 'web-design']
  },
  {
    skill: 'invision',
    title: 'InVision',
    icon: Icons.SiInvision,
    category: 'tool',
    aliases: ['prototyping', 'design-collaboration', 'ui-prototyping', 'design-workflow']
  },
  {
    skill: 'illustrator',
    title: 'Adobe Illustrator',
    icon: Icons.DiIllustrator,
    category: 'tool',
    aliases: ['ai', 'vector-graphics', 'adobe-suite', 'graphic-design']
  },
  {
    skill: 'photoshop',
    title: 'Adobe Photoshop',
    icon: Icons.DiPhotoshop,
    category: 'tool',
    aliases: ['ps', 'image-editing', 'adobe-suite', 'raster-graphics']
  },
  
  // Mobile Development Tools
  {
    skill: 'phonegap',
    title: 'PhoneGap',
    icon: Icons.DiPhonegap,
    category: 'tool',
    aliases: ['cordova', 'apache-cordova', 'hybrid-mobile', 'cross-platform-mobile']
  },

  // ==========================================
  // PLATFORMS & OPERATING SYSTEMS
  // ==========================================
  
  // Desktop Operating Systems
  {
    skill: 'linux',
    title: 'Linux',
    icon: Icons.DiLinux,
    category: 'platform',
    aliases: ['gnu-linux', 'open-source-os', 'unix-like', 'linux-kernel']
  },
  {
    skill: 'ubuntu',
    title: 'Ubuntu',
    icon: Icons.DiUbuntu,
    category: 'platform',
    aliases: ['debian-based', 'linux-distribution', 'canonical', 'open-source-os']
  },
  {
    skill: 'debian',
    title: 'Debian',
    icon: Icons.DiDebian,
    category: 'platform',
    aliases: ['linux-distro', 'package-management', 'apt', 'stable-linux']
  },
  {
    skill: 'windows',
    title: 'Windows',
    icon: Icons.DiWindows,
    category: 'platform',
    aliases: ['microsoft-windows', 'win10', 'win11', 'desktop-os']
  },
  {
    skill: 'apple',
    title: 'Apple',
    icon: Icons.DiApple,
    category: 'platform',
    aliases: ['macos', 'ios-platform', 'apple-ecosystem', 'mac']
  },
  
  // Mobile Operating Systems
  {
    skill: 'android',
    title: 'Android',
    icon: Icons.DiAndroid,
    category: 'platform',
    aliases: ['android-sdk', 'mobile-os', 'google-android', 'android-platform']
  },
  {
    skill: 'blackberry',
    title: 'BlackBerry',
    icon: Icons.DiBlackberry,
    category: 'platform',
    aliases: ['rim', 'bb10', 'blackberry-os', 'legacy-mobile-platform']
  },
  
  // Cloud Platforms
  {
    skill: 'cloud9',
    title: 'Cloud9',
    icon: Icons.DiCloud9,
    category: 'tool',
    aliases: ['c9', 'aws-cloud9', 'cloud-ide', 'online-development']
  },

  // ==========================================
  // WEB BROWSERS
  // ==========================================
  {
    skill: 'chrome',
    title: 'Chrome',
    icon: Icons.DiChrome,
    category: 'tool',
    aliases: ['chrome-browser', 'google-chrome', 'web-browser', 'chromium']
  },
  {
    skill: 'firefox',
    title: 'Firefox',
    icon: Icons.DiFirefox,
    category: 'tool',
    aliases: ['mozilla-firefox', 'browser', 'web-browser', 'gecko']
  },
  {
    skill: 'ie',
    title: 'Internet Explorer',
    icon: Icons.DiIe,
    category: 'tool',
    aliases: ['internet-explorer', 'browser', 'microsoft-browser', 'legacy-browser']
  },
  {
    skill: 'safari',
    title: 'Safari',
    icon: Icons.DiSafari,
    category: 'tool',
    aliases: ['apple-safari', 'browser', 'webkit', 'apple-browser']
  },
  {
    skill: 'opera',
    title: 'Opera',
    icon: Icons.DiOpera,
    category: 'tool',
    aliases: ['opera-browser', 'browser', 'blink-browser', 'norwegian-browser']
  },

  // ==========================================
  // FILE STORAGE & CLOUD SERVICES
  // ==========================================
  {
    skill: 'dropbox',
    title: 'Dropbox',
    icon: Icons.DiDropbox,
    category: 'tool',
    aliases: ['cloud-storage', 'file-sharing', 'file-sync', 'online-storage']
  },
  {
    skill: 'onedrive',
    title: 'OneDrive',
    icon: Icons.DiOnedrive,
    category: 'tool',
    aliases: ['microsoft-onedrive', 'cloud-storage', 'ms-storage', 'file-sync']
  },
  {
    skill: 'googledrive',
    title: 'Google Drive',
    icon: Icons.DiGoogleDrive,
    category: 'tool',
    aliases: ['gdrive', 'cloud-storage', 'google-storage', 'online-documents']
  },

  // ==========================================
  // ANALYTICS & MONITORING
  // ==========================================
  {
    skill: 'googleanalytics',
    title: 'Google Analytics',
    icon: Icons.DiGoogleAnalytics,
    category: 'tool', 
    aliases: ['ga', 'web-analytics', 'site-tracking', 'user-metrics']
  },
  {
    skill: 'modernizr',
    title: 'Modernizr',
    icon: Icons.DiModernizr,
    category: 'tool',
    aliases: ['feature-detection', 'browser-compatibility', 'feature-testing', 'progressive-enhancement']
  },

  // ==========================================
  // GAME DEVELOPMENT
  // ==========================================
  {
    skill: 'unity',
    title: 'Unity',
    icon: Icons.DiUnitySmall,
    category: 'tool',
    aliases: ['unity3d', 'game-engine', 'cross-platform-games', '3d-development']
  },

  // ==========================================
  // HTML5 SPECIALTIES
  // ==========================================
  {
    skill: 'html5-3d',
    title: 'HTML5 3D Effects',
    icon: Icons.DiHtml53DEffects,
    category: 'programming',
    aliases: ['html-3d', 'web-3d', 'webgl', 'canvas-3d']
  },
  {
    skill: 'html5-connectivity',
    title: 'HTML5 Connectivity',
    icon: Icons.DiHtml5Connectivity,
    category: 'programming',
    aliases: ['html-connectivity', 'websockets', 'sse', 'web-rtc']
  },
  {
    skill: 'html5-device',
    title: 'HTML5 Device Access',
    icon: Icons.DiHtml5DeviceAccess,
    category: 'programming',
    aliases: ['html-device', 'geolocation', 'device-apis', 'web-bluetooth']
  },
  {
    skill: 'html5-multimedia',
    title: 'HTML5 Multimedia',
    icon: Icons.DiHtml5Multimedia,
    category: 'programming',
    aliases: ['html-multimedia', 'web-audio', 'video-element', 'media-capture']
  },
  // ==========================================
// ADDITIONAL FRAMEWORKS & LIBRARIES
// ==========================================

  // PHP Frameworks
  {
    skill: 'yii',
    title: 'Yii Framework',
    icon: Icons.DiYii,
    category: 'framework',
    aliases: ['yii-framework', 'php-yii', 'rapid-development-framework', 'component-based']
  },

  // JavaScript Libraries & Frameworks 
  {
    skill: 'meteor',
    title: 'Meteor.js',
    icon: Icons.DiMeteor,
    category: 'framework',
    aliases: ['meteorjs', 'meteor-framework', 'isomorphic-javascript', 'real-time-web']
  },
  {
    skill: 'requirejs',
    title: 'RequireJS',
    icon: Icons.DiRequirejs,
    category: 'framework',
    aliases: ['amd', 'module-loader', 'js-dependency-management', 'asynchronous-module-definition']
  },
  {
    skill: 'krakenjs',
    title: 'KrakenJS',
    icon: Icons.DiKrakenjs,
    category: 'framework',
    aliases: ['kraken', 'paypal-framework', 'express-framework', 'security-focused-nodejs']
  },

// ==========================================
// DEVELOPER TOOLS
// ==========================================

  // Terminal & Command Line
  {
    skill: 'terminal',
    title: 'Terminal',
    icon: Icons.DiTerminal,
    category: 'tool',
    aliases: ['command-line', 'cli', 'shell', 'console', 'bash-terminal']
  }
];

// Export helper function to get icons
export const getIconBySkill = (skill: string): SkillIconMapping | undefined => {
  const normalizedSkill = skill.toLowerCase();
  return iconMappings.find(
    mapping => 
      mapping.skill === normalizedSkill || 
      mapping.aliases?.includes(normalizedSkill)
  );
};