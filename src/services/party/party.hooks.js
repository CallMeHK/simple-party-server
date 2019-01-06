const { authenticate } = require("@feathersjs/authentication").hooks;

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      function(context) {
        console.log(context.result.data);
        let newResult = context.result.data.filter(party => party.memberIds.includes(context.params.connection.payload.userId))
        let newContext = context;
        newContext.result.data = newResult;
        //newContext.params.query = { ownerId:  context.params.connection.payload.userId  };
        //console.log(newContext.params);
        return newContext;
      }
    ],
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
