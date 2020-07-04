const next = require('next');
const proxy = require('http-proxy-middleware');

const routes = require('./config/routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const express = require('express');

require('dotenv').config();

app.prepare().then(() => {
  express()
    .use(
      '/api',
      proxy({
        target: process.env.API_URL,
        changeOrigin: true
      })
    )
    .use(
      '/graphql',
      proxy({
        target: process.env.API_URL,
        changeOrigin: true
      })
    )
    .use(handler)
    .listen(3000, '0.0.0.0', err => {
      if (!err) {
        console.log(`> Ready APP`);
      } else {
        throw err;
      }
    });
});
