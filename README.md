# Helllo GraphQL

## What is

GraphQL tutorial reference to Web DB Press vol. 125.

## Start up
`bash install.sh`  
`docker-compose up`

## Introduction

- GraphQLはRest APIの課題を解決するために、Facebook（現Meta）が開発し、オープンソース化、その後GraphQL Foundationを創設して管理するようになった

- Rest APIの課題 = データのオーバーフェッチ、アンダーフェッチ

- GraphQL概説 - serverコードを読み解きながら
  - pingpong から、スキーマとリゾルバの役割を解説
  - データフェッチAPI実装の流れ
    - 実装するモデル（ /assets/model.png）
    - Relayの[GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/) ( /assets/relay_spec.png )
    - スキーマ、リゾルバのコード見ながら説明
    - 実際のリクエストとレスポンス
    - クライアントサイドのコード
    - クエリの変更(keyを追加しながら)

- 今回実装しなかった、MutationとSubscription