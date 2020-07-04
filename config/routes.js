const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'index', pattern: '/', page: 'index' })
  .add({ name: 'doctor', pattern: '/doctors/:doctor', page: 'doctor' })
  .add({ name: 'doctors', pattern: '/doctors/', page: 'doctors' })
  .add({ name: 'about', pattern: '/about-clinic/', page: 'about' })
  .add({ name: 'legal', pattern: '/about-clinic/yuridicheskaya-informatcia', page: 'simple' })
  .add({ name: 'service', pattern: '/:category/:slug', page: 'service' })
  .add({ name: 'services', pattern: '/:category/', page: 'services' })
  .add({ name: 'page404', pattern: '/:otherpage', page: 'page404' });
