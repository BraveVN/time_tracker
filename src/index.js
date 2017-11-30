require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('./index.scss');

// libs
var angular = require('angular');

// components
var App = require('./app/containers/App');
var hero = require('./app/components/hero/hero');
var navbarComponent = require('./app/components/navbarComponent/navbarComponent');
var landingPage = require('./app/components/landingPage/landingPage');
var routesConfig = require('./routes');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', 'ngMaterial'])
  .config(routesConfig)
  .component('app', App)
  .component('landingPage', landingPage)
  .component('hero', hero)
  .component('navbarComponent', navbarComponent);
