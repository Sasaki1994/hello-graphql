import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { relayEnvironment } from './lib/relayEnvironment';
import './App.css';
import { BlogList } from './components/BlogList';

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <React.Suspense fallback="Loading...">
        <BlogList></BlogList>
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
