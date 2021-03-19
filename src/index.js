import React, { useEffect, useState } from 'react';
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

/* STATE 
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
*/

/* COUNTER APP 
class Counter extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  reset = () => {
    this.setState({
      counter: this.state.counter = 0
    });
  }
  render() {
    return <div>
      <p> {this.state.counter} </p>
      <button onClick={this.increment} >Increment</button>
      <button onClick={this.decrement} >Decrement</button>
      <button onClick={this.reset} >Reset</button>
    </div>;
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));


/* HOOKS 
function Hello() {
  const [name, setName] = useState('Jake my man');

  return <h1>Hello {name}.</h1>
}

ReactDOM.render(<Hello />, document.getElementById('root'));
*/


// COUNTER APP USING HOOKS
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return <div>
//     <p>{counter}</p>
//     <button onClick={increment}>Increment</button>
//   </div>;
// }

// ReactDOM.render(<Counter />, document.getElementById('root'));


// LIFECYCLE METHODS
// class Counter extends React.Component {
//   state = {
//     counter: 0
//   }
//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//   componentDidMount() {
//     this.setState({
//       counter: 44
//     });
//   }
//   render() {
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.increment}>Increment</button>
//     </div>;
//   }
// }


// ReactDOM.render(<Counter />, document.getElementById('root'));



// componentDidUpdate
// class Counter extends React.Component {
//   state = {
//     counter: 0
//   }
//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//   componentDidUpdate() {
//     alert('Numbers of clicks: ' + this.state.counter);
//   }
//   render() {
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.increment}>Increment</button>
//     </div>;
//   }
// }


// ReactDOM.render(<Counter />, document.getElementById('root'));


// useEffect HOOK
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert('Numbers of clicks: ' + counter);
//   });

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return <div>
//     <p>{counter}</p>
//     <button onClick={increment}>Increment</button>
//   </div>;
// }

// ReactDOM.render(<Counter />, document.getElementById('root'));


// EVENT HANDLING
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return <div>
//     <p>{counter}</p>
//     <button onClick={increment}>Increment</button>
//   </div>;
// }

// ReactDOM.render(<Counter />, document.getElementById('root'));

// EXAMPLE 
// function Toggle() {
//   const [val, setVal] = useState("ON");
//   function toggle() {
//     setVal((val == "ON") ? "OFF" : "ON");
//   }
//   return <button onClick={toggle}>{val}</button>;
// }

// ReactDOM.render(<Toggle />, document.getElementById('root'));


// RENDERING A LIST
// function MyList(props) {
//   const arr = props.data;
//   const listItems = arr.map((val, index) =>
//     <li key={index}>{val}</li>
//   );
//   return <ul>{listItems}</ul>;
// }

// const arr = ["A", "B", "C", "D"];
// const el = <MyList data={arr} />;

// ReactDOM.render(el, document.getElementById('root'));



// CONTACT MANAGER
function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handelChange(e) {
    setPerson(e.target.value);
  }

  function handelSubmit(e) {
    props.handelSubmit(person);
    setPerson('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handelSubmit}>
      <h2>Add Contacts</h2>
      <input type="text"
        placeholder="Add new contact"
        onChange={handelChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handelSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}


const contacts = ["Jake Smith", "Tony Stark", "Bruce Wayne"];


ReactDOM.render(<ContactManager data={contacts} />, document.getElementById("root"));
















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
