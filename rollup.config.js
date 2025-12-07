// rollup.config.js
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const resolve = require('@rollup/plugin-node-resolve').default;
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');
const json = require('@rollup/plugin-json');

const pkg = require('./package.json'); // CommonJS require

module.exports = {
  input: 'src/index.tsx',
  // output: [
  //   { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'named' },
  //   { file: pkg.module, format: 'es', sourcemap: true, exports: 'named' },
  // ],
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  plugins: [
    external(),
    json(),
    postcss({ modules: true }),
    url(),
    svgr(),
    resolve({ browser: true, extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      rootDir: 'src',
    }),
    commonjs(),
  ],
  external: ['react', 'react-dom'],
};
