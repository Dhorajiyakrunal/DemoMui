import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(null)

  useEffect(() => {
    setInterval(() => {
      setCount(new Date().toLocaleTimeString())
      
    }, 10);
  }, [])
  
  
  return (
    <div className="App">
      timer is {count}
    </div>
  )
}

export default App;

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state ={
    }
    
  }
  componentDidMount(){
    setInterval(() => {
        this.setState({timer : new Date().toLocaleTimeString()})
    }, 1000);
  }
  render() {
    return (
      <div>timer is {this.state.timer}</div>
    )
  }
}


// import React, { useState, useEffect } from "react";
// import './App.css';


// function App() {

//   const [count, setcount] = useState(1)

//   useEffect(() => {
 
//   }, [count])

//   return (
//     <div className="App">
//       <button onClick={()=>setcount(count + 1)}>+</button>
//       {count}
//       <button onClick={()=>setcount(count - 1)}>-</button>
//     </div>
//   )
// }

// export default App


