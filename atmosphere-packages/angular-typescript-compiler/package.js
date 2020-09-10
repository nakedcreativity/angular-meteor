Package.describe({
  name: 'digicore:angular-typescript-compiler',
  version: '0.4.1',
  summary: 'Angular TypeScript Compiler Package',
  git: 'https://github.com/cosmin-dumitrache/angular-meteor/tree/master/atmosphere-packages/angular-typescript-compiler',
  documentation: null
});

Npm.depends({
  '@digicore/meteor-typescript': '0.9.4',
  'rollup': '2.26.11',
  'rollup-plugin-node-resolve': '5.2.0',
  'rollup-plugin-hypothetical': '2.1.0',
  'rollup-plugin-commonjs': '10.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.11');
  api.use([
    'ecmascript',
    'babel-compiler@7.5.3',
    'digicore:angular-html-compiler@0.4.1',
    'digicore:angular-scss-compiler@0.4.1'
  ], 'server');
  api.mainModule('index.js', 'server');
});
