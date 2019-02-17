import React from 'react';
import AppHooks from './AppHooks';
import AppClass from './AppClass';

function App() {
  return (
    <div>
      <h1>Using Class</h1>
      <AppClass />

      <h1> Using Hooks</h1>
      <AppHooks />
    </div>
  );
}

export default App;