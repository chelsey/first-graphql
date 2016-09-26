import fetch from 'node-fetch';

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: '...',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: (user) => user.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: (user) => user.last_name,
    },
    email: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    friends: {
      type: new GraphQLList(UserType),
      resolve: (user, args) =>
        console.log(user)
    }
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries / GraphQL schemas',
  fields: () => ({
    user: {
      type: UserType,
    args: {
      id: { type: GraphQLString },
    },
    resolve: (root, args) =>
      console.log(args)
    }
  })
})

export default new GraphQLSchema({
  query: QueryType,
})