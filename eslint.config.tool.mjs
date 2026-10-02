import typescriptConfig from '@playcanvas/eslint-config/typescript';

export default [
    ...typescriptConfig,
    {
        // the PlayCanvas app, template projects and vendored skills ship their own setup; lint only this CLI's own source
        ignores: ['templates', 'skills', 'dist', 'dist-app', 'src/playcanvas']
    }
];
