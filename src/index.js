require('angular-ui-router');
require('./index.scss');

// libs
var angular = require('angular');

// components
var App = require('./app/containers/App');
var hero = require('./app/components/hero/hero');
var landingPage = require('./app/components/landingPage/landingPage');
var routesConfig = require('./routes');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', App)
  .component('landingPage', landingPage)
  .component('hero', hero);
