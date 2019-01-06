const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
      function(context) {
        //console.log(context);
        let newContext = context
        newContext.params.query = { ownerId:  context.params.connection.payload.userId  };
        //console.log(newContext.params);
        return newContext
      }
    ],
    get: [
      hooks.restrictToOwner({
        ownerField: 'ownerId'
      })
    ],
    create: [
      function(context) {
        console.log('\n ---CONTEXT---')
        console.log(context);
        console.log('\n ---CONTEXT.DATA---')

        
        context.data.ownerId = context.params.user._id,
        console.log(context.data)
        return context
      }
    ],
    update: [
      hooks.restrictToOwner({
        ownerField: 'ownerId'
      })
    ],
    patch: [
      hooks.restrictToOwner({
        ownerField: 'ownerId'
      })
    ],
    remove: [
      hooks.restrictToOwner({
        ownerField: 'ownerId'
      })
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};