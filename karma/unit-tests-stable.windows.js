basePath = '..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'components/lodash/dist/lodash.legacy.js',
  'components/jquery/jquery.js',
  'components/angular/angular.js',
  'components/angular-mocks/angular-mocks.js',
  'tests/libraries/mocker.js',
  'components/nucleus-angular-core/module.js',
  'components/nucleus-angular-core/helper.js',
  'components/nucleus-angular-core/defaults.js',
  '*.js',
  'tests/*.js',
  {
      pattern: '**/*.html', included: false
  }
];

reporters = ['dots'];

autoWatch = false;

browsers = ['Chrome', 'Firefox', 'IE', 'Opera'];

singleRun = true;
