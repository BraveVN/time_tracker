module.exports = {
  template: require('./hero.html'),
  controller: Hero
};

/** @ngInject */
function Hero() {
  this.hello = 'This is a hero page';
}
