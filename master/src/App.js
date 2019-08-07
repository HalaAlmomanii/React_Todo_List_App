import React, { Component } from 'react';
// import Todos from './components/Todos';

export default class App extends Component {
state={tasks:[]}


componentDidMount(){
  fetch("/tasks")
  .then(res=>res.json())
  .then(tasks=>this.setState({tasks},()=>console.log("come",tasks)))
}
  render() {
    return (
      <>
        <h1>Mai</h1>
        <ul>
       {this.state.tasks.map(elem =>  
       <li key={elem.id} >{elem.title}</li>
        )}
        </ul>
        {/* <Todos /> */}
      </ >
    );
  }
}
