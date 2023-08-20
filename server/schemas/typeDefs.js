const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
   savedJobs: [Job]!
  }

type Job {
  _id: ID
  company: String!
  role: String!
  advertisedSalary: Number
  offerMade: Boolean
  contactPeople: [Contact]!
  createdAt: Date
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    jobs: [Job]
    job(_id: ID): Job

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String, lastName: String): Auth
    login(email: String!, password: String!): Auth
    addJob( company: String!
      role: String!
      advertisedSalary: Number
      offerMade: Boolean
      contactPeople: [Contact]!): Job
  }
`;

module.exports = typeDefs;
