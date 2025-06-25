import React from 'react';
import ErrorBoundary from './Components/Ex1_ErrorBoundary';
import BuggyCounter from './Components/Ex1_BuggyCounter';
import ColorLifecycle from './Components/Ex2_ColorLifecycle';
import UnmountDemo from './Components/Ex3_UnmountDemo';

function App() {
  return (
    <div>
      <h1>Exercice 1 : Error Boundary</h1>
      {/* Simulation 1 : 2 dans une limite */}
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      {/* Simulation 2 : 2 limites séparées */}
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>

      {/* Simulation 3 : sans limite d'erreur */}
      {/* <BuggyCounter /> */}

      <hr />
      <h1>Exercice 2 : Cycle de vie (mise à jour)</h1>
      <ColorLifecycle />

      <hr />
      <h1>Exercice 3 : Cycle de vie (démontage)</h1>
      <UnmountDemo />
    </div>
  );
}

export default App;
