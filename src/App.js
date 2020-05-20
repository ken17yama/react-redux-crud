import React, { Component } from 'react';

// クラスコンポーネント
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="log">Log</label>
        <input type="text" name="log" onChange={() => { console.log("Changed!") }} />
      </React.Fragment>
    )
  }
}

// 関数コンポーネント
// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   )
// }
// const Cat = () => {
//   return <div>Meow!!</div>
// }

export default App;
