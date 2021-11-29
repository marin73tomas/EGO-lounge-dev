const { buildSchema } = require('graphql');

const schema = buildSchema(`
     type User {
          id: Int
          email: String,
          firstName: String
          lastName: String
          password: String
     }
     type GameAPIS {
          id: Int,
          name: String,
     }
     type Query {
          users: [User]
          user(id: Int): User
     }
     type Mutation {
          addUser(firstName: String, email: String, lastName: String, password: String): User
     }
     `);

const users = [
  {
    id: 1,
    email: 'egolounge',
    password: 'kc5@Ph;;@7})2pv7',
  },
  {
    id: 2,

  },
];

const root = {
  users: () => users,
  user: (data) => users.find((u) => u.id == data.id),
  addUser: (data) =>
    users.push({ id: users.length, firstName: data.firstName, lastName: data.lastName, password: data.password }),
};

module.exports = { schema, root };
