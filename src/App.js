import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="log">Log</label>
      <input type="text" name="log" onChange={() => { console.log("Changed!") }} />
    </React.Fragment>
  );
}

export default App;
