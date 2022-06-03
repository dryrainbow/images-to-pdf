const typescript = require('rollup-plugin-typescript2');
const externals = require('rollup-plugin-node-externals').externals;
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const plugins = [
    // terser({
    //     ecma: 2020,
    //     module: true,
    //     compress: {
    //         passes: 4,
    //         unsafe: true,
    //     },
    // }),
    typescript({
        clean: true,
    }),
    externals({
        deps: true,
    }),
    nodeResolve({
        browser: true,
    }),
];

module.exports = [
    {
        input: './src/background.ts',
        output: [
            {
                file: './dist/bundle/background/background.js',
                format: 'cjs',
                name: 'background',
                sourcemap: false,
                exports: 'auto',
            },
        ],
        plugins,
    },
    {
        input: './src/frontend/popup.ts',
        output: [
            {
                file: './dist/bundle/popup/popup.js',
                format: 'cjs',
                name: 'popup',
                sourcemap: false,
                exports: 'auto',
            },
        ],
        plugins,
    },
];
