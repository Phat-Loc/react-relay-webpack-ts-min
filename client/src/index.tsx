import React from 'react';
import * as ReactDOM from 'react-dom';
const { useState, useEffect, Suspense } = React;
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import {RelayEnvironmentProvider, loadQuery, usePreloadedQuery,} from 'react-relay/hooks';
import { graphql } from 'react-relay'

const HelloQuery = graphql`
  query srcHelloQuery {
        hello
      }
`;

async function fetchGraphQL(text, variables) {

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

const preloadedQuery = loadQuery(RelayEnvironment, HelloQuery, {});

function App(props) {
  const data = usePreloadedQuery(HelloQuery, props.preloadedQuery);


  return (
    <div className="App">
      <header className="App-header">
        <p>{data.hello}</p>
      </header>
    </div>
  );
}

export default function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

const appContainer = document.getElementById('app');
ReactDOM.render(<AppRoot/>, appContainer);