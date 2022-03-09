/**
 * @generated SignedSource<<498b73bb44b73301f566c0a6e567145b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type srcHelloQuery$variables = {};
export type srcHelloQuery$data = {
  readonly hello: string;
};
export type srcHelloQuery = {
  variables: srcHelloQuery$variables;
  response: srcHelloQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcHelloQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "srcHelloQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a19e68a23cd37532b767c815edb37be0",
    "id": null,
    "metadata": {},
    "name": "srcHelloQuery",
    "operationKind": "query",
    "text": "query srcHelloQuery {\n  hello\n}\n"
  }
};
})();

(node as any).hash = "c5423f4192156d36054438a4b9358bbc";

export default node;
