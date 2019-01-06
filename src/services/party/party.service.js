// Initializes the `party` service on path `/party`
const createService = require('feathers-mongoose');
const createModel = require('../../models/party.model');
const hooks = require('./party.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/party', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('party');

  service.hooks(hooks);
};
