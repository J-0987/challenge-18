const { connect, connection } = require('mongoose');

//ask about this
const connectionString = 'mongodb://localhost/socialNetworkDb';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
