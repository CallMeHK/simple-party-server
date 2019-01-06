const users = require('./users/users.service.js');
const boards = require('./boards/boards.service.js');
const character = require('./character/character.service.js');
const char = require('./char/char.service.js');
const party = require('./party/party.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(boards);
  app.configure(character);
  app.configure(char);
  app.configure(party);
};
