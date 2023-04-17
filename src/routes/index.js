require('colors');
const fs = require('fs');
const swaggerUI = require('swagger-ui-express');
const documentation = require('../documentation');

const prefix = '/api/';
const routeExtension = '.route.js';


exports.init = (app) => {
  console.log('[MAP]'.blue, ` ${prefix} loaded`);
  
  const routes = fs.readdirSync(__dirname).filter(route => route.endsWith(routeExtension));
  routes.map(route => {
    const nameRoute = prefix.concat(route.replace(routeExtension, ''));
    app.use(nameRoute, require(`${__dirname}/${route}`));
    console.log('[MAP]'.blue, ` ${nameRoute} loaded`);
  });
  
  app.use(prefix, swaggerUI.serve, swaggerUI.setup(documentation));

  console.log('Routes loaded.');
};
