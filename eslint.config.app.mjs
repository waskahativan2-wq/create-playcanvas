import typescriptConfig from '@playcanvas/eslint-config/typescript';

export default [
    {
        // lint only the PlayCanvas app; the CLI source, templates and vendored skills keep their own setup
        ignores: [
            '.claude',
            '.agents',
            'public/ammo',
            'templates',
            'skills',
            'dist',
            'dist-app',
            'src',
            '!src/playcanvas',
            'build.config.ts',
            'eslint.config.tool.mjs',
            'prettier.config.tool.mjs',
            'release.sh'
        ]
    },
    ...typescriptConfig
];
