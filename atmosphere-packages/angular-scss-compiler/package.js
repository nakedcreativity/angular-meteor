Package.describe({
  name: 'digicore:angular-scss-compiler',
  version: '0.4.1',
  summary: 'Angular Scss Compiler Package',
  git: 'https://github.com/cosmin-dumitrache/angular-meteor/tree/master/atmosphere-packages/angular-scss-compiler',
  documentation: null
});

Npm.depends({
  'node-sass': '4.12.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.11');
  api.use([
    'ecmascript'
  ], 'server');
  api.mainModule('index.js', 'server');
});
