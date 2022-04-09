# ping
`curl -H 'Content-Type: application/json' -d '{ "query": "{ping}" }' 'http://localhost:4000/graphql'`

# blogs の id, name フィールドを取得する.

`curl -H 'Content-Type: application/json' -d '{ "query": "{ blogs { edges { node { id name } } } }" }' 'http://localhost:4000/graphql'`

```
{
  blogs {
    edges {
      node {
        id
        name
      }
    }
  }
}
```

# id から blog を 検索し、その id, name を取得する. さらにそれに紐づく posts の id, title, body を取得する.

`curl -H 'Content-Type: application/json' -d '{ "query": "{ node(id: \"QmxvZzox\") { ...on Blog { id name posts { edges { node { id title body } } } } } }" }' 'http://localhost:4000/graphql'`

```
{
  node(id: "QmxvZzox") {
    ...on Blog {
      id
      name
      posts {
        edges {
          node {
            id
            title
            body
          }
        }
      }
    }
  }
}
```

# blogs の id, name フィールドを取得し、さらにそれに紐づく posts の id, title, body を取得する.

`curl -H 'Content-Type: application/json' -d '{ "query": "{ blogs { edges { node { id name posts { edges { node { id title body } } } } } } }" }' 'http://localhost:4000/graphql'`

```
{
  blogs {
    edges {
      node {
        id
        name
        posts {
          edges {
            node {
              id
              title
              body
            }
          }
        }
      }
    }
  }
}
```
