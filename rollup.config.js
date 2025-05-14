import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';

// Import package.json without using assert
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default [
  // Main bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'es',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      }
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {}), 
      'react/jsx-runtime'
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.json',
        exclude: ["**/__tests__", "**/*.test.ts", "**/*.test.tsx"],
        declaration: false // Let the separate declaration build handle this
      }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    ]
  },
  // Type definitions bundle
  {
    input: 'src/index.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];