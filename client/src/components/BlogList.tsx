import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useLazyLoadQuery } from "react-relay";
import type {
  BlogListQuery
} from "./__generated__/BlogListQuery.graphql"

export const BlogList: React.VFC = () => {
  const { blogs } = useLazyLoadQuery<BlogListQuery>(
    graphql`
      query BlogListQuery {
        blogs {
          edges {
            node {
              id
              name
              posts {
                edges {
                  node {
                    title
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      first: 10
    }
  )
  return (
    <ul>
      {blogs.edges?.map((edge) => (
          <li key={edge?.node?.id} >
            {edge?.node?.name}
            <ul>
              {edge?.node?.posts?.edges?.map((edge) => (
                <li>{edge?.node?.title}</li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  )
}

