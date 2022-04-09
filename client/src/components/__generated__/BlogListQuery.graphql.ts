/**
 * @generated SignedSource<<cff0cd0cc7cd1438d1aa0b350c7e1401>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BlogListQuery$variables = {};
export type BlogListQuery$data = {
  readonly blogs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null;
    } | null> | null;
  };
};
export type BlogListQuery = {
  variables: BlogListQuery$variables;
  response: BlogListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BlogConnection",
    "kind": "LinkedField",
    "name": "blogs",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlogEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Blog",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BlogListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d97bead192f4b7200d3aa01a5137caac",
    "id": null,
    "metadata": {},
    "name": "BlogListQuery",
    "operationKind": "query",
    "text": "query BlogListQuery {\n  blogs {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "87e298ac81f3ec2ccd3f8ebb59b635d9";

export default node;
