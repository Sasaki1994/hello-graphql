import { ApolloServer, gql } from "apollo-server";
import { connectionFromArray, fromGlobalId, toGlobalId } from "graphql-relay";
import { findBlog, getBlogs } from "./data/blog";
import { findPost, findPostsByBlogId } from "./data/post";
import { Resolvers } from "./generated/graphql";

const typeDefs = gql`
  interface Node {
    id: ID!
  }

  type Blog implements Node {
    id: ID!
    name: String!
    posts: PostConnection!
  }

  type BlogConnection {
    edges: [BlogEdge]
  }

  type BlogEdge {
    node: Blog
  }

  type Post implements Node {
    id: ID!
    title: String!
    body: String!
  }

  type PostConnection {
    edges: [PostEdge]
  }

  type PostEdge {
    node: Post
  }

  type Query {
    node(id: ID!): Node
    blogs: BlogConnection!
    ping: String
  }
`;

const resolvers: Resolvers = {
  Query: {
    node: async (parent, args) => {
      const {type, id} = fromGlobalId(args.id)
      switch (type) {
        case "Blog":
          const blog = await findBlog(id)
          if(!blog){
            return null
          }
          return {
            ...blog,
            id: toGlobalId("Blog", blog.id)
          }
        case "Post":
          const post = await findPost(id)
          if(!post){
            return null
          }
          return {
            ...post,
            id: toGlobalId("Post", post.id)
          }
        default:
          throw new Error(`Unknown type: ${type}`)
      }
    },
    blogs: async (parent, args) => {
      return connectionFromArray(
        (await getBlogs()).map((blog) => ({
          ...blog,
          id: toGlobalId("Blog", blog.id),
        })),
        args
      )
    },
    ping: () => "pong"
  },
  Blog: {
    posts: async (parent, args) => {
      const { id } = fromGlobalId(parent.id)
      return connectionFromArray(
        (await findPostsByBlogId(id)).map((post) => ({
          ...post,
          id: toGlobalId("Post", post.id),
        })),
        args
      )
    }
  },
  Node: {
    __resolveType: (parent) => {
      const {type} = fromGlobalId(parent.id)
      switch (type) {
        case "Blog":
        case "Post":
          return type
        default:
          throw new Error(`Unknown type: ${type}`)
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});