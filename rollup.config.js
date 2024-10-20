import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
    input: 'index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].mjs'
    },
    plugins: [
        typescript(),
        terser({
            format: {
                comments: 'some',
                beautify: true,
                ecma: 'nodeNext',
            },
            compress: false,
            mangle: false,
            module: true,
        }),
        json({
            compact:true
        })
    ]
};