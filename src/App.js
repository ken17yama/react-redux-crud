import React from 'react';

const App = () => {

  const profiles = [
    { name: "Kento", age: 23 },
    { name: "Chikuwa", age: 1 },
    { name: "Oden" },
    { age: "31" },
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}
const User = (props) => {
  return (
    <div>
      <h1>Hi! {props.name}</h1>
      <p>{props.age} years old.</p>
    </div>
  )
}

User.defaultProps = {
  name: 'unknown',
  age: 0
}

export default App;
