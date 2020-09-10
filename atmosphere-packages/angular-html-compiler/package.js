Package.describe({
  name: 'digicore:angular-html-compiler',
  version: '0.4.1',
  summary: 'Angular Html Compiler Package',
  git: 'https://github.com/cosmin-dumitrache/angular-meteor/tree/master/atmosphere-packages/angular-html-compiler',
  documentation: null
});

Npm.depends({
  'cheerio': '0.22.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.11');
  api.use([
    'ecmascript'
  ], 'server');
  api.mainModule('index.js', 'server');
});