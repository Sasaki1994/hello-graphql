"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const graphql_relay_1 = require("graphql-relay");
const blog_1 = require("./data/blog");
const post_1 = require("./data/post");
const typeDefs = (0, apollo_server_1.gql) `
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
const resolvers = {
    Query: {
        node: async (parent, args) => {
            const { type, id } = (0, graphql_relay_1.fromGlobalId)(args.id);
            switch (type) {
                case "Blog":
                    const blog = await (0, blog_1.findBlog)(id);
                    if (!blog) {
                        return null;
                    }
                    return {
                        ...blog,
                        id: (0, graphql_relay_1.toGlobalId)("Blog", blog.id)
                    };
                case "Post":
                    const post = await (0, post_1.findPost)(id);
                    if (!post) {
                        return null;
                    }
                    return {
                        ...post,
                        id: (0, graphql_relay_1.toGlobalId)("Post", post.id)
                    };
                default:
                    throw new Error(`Unknown type: ${type}`);
            }
        },
        blogs: async (parent, args) => {
            return (0, graphql_relay_1.connectionFromArray)((await (0, blog_1.getBlogs)()).map((blog) => ({
                ...blog,
                id: (0, graphql_relay_1.toGlobalId)("Blog", blog.id),
            })), args);
        },
        ping: () => "pong"
    },
    Blog: {
        posts: async (parent, args) => {
            const { id } = (0, graphql_relay_1.fromGlobalId)(parent.id);
            return (0, graphql_relay_1.connectionFromArray)((await (0, post_1.findPostsByBlogId)(id)).map((post) => ({
                ...post,
                id: (0, graphql_relay_1.toGlobalId)("Post", post.id),
            })), args);
        }
    },
    Node: {
        __resolveType: (parent) => {
            const { type } = (0, graphql_relay_1.fromGlobalId)(parent.id);
            switch (type) {
                case "Blog":
                case "Post":
                    return type;
                default:
                    throw new Error(`Unknown type: ${type}`);
            }
        }
    }
};
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
});
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
