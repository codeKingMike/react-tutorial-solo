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


/* PROPS IN CLASS COMPONENTS 
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

const el = <Hello name="Jake" />

ReactDOM.render(
  el,
  document.getElementById('root')
);


/* SHOPPING LIST EXAMPLE 
function Item(props) {
  return <div className="item">
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> ${props.price}
  </div>;
}


function App() {
  return <div>
    <Item name="Strawberries" price="1.99" />
    <Item name="Eggs" price="2.99" />
    <Item name="Milk" price="3.99" />
    <Item name="Bacon" price="5.99" />
    <Item name="Chips" price="4.49" />
  </div>
}

const list = <App />

ReactDOM.render(
  list,
  document.getElementById('root')
);
*/

/* STATE */
class Hello extends React.Component {
  state = {
    name: "Jake",
    city: "Los Angeles"
  }
  render() {
    return <h1 className="title">Hello, {this.state.name}, you live in {this.state.city}. </h1>;
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
