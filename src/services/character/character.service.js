// Initializes the `character` service on path `/character`
const createService = require('feathers-mongodb');
const hooks = require('./character.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/character', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('character');

  mongoClient.then(db => {
    service.Model = db.collection('character');
  });

  service.hooks(hooks);
};
