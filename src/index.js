import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/*
class Hello extends React.Component {
  render() {
    return <h1>Hello World!!!</h1>;
  }
}

const el = <Hello />;
*/

/* PROPS 
function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

const el = <Hello name="Michael" />
*/

/* COMPONENTS USING COMPONENTS 
function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <div>
    <Hello name="Michael" />
    <Hello name="James" />
    <Hello name="Andrea" />
  </div>;
}

const el = <App />;
*/


/* PROPS IN CLASS COMPONENTS */
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}


ReactDOM.render(
  <Hello name="Jaker" />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
