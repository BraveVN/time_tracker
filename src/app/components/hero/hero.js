module.exports = {
  template: require('./hero.html'),
  controller: Hero
};

/** @ngInject */
function Hero() {
  this.counter = '00:00:00';
}
