import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import Message from './Message.js';

const db = firebase.database();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    db.ref('/messages').on('value', snapshot => {
      let _messages = [];
      for (let _id in snapshot.val()) {
        let _message = {
          _id: _id,
          _value: snapshot.val()[_id]
        };
        _messages.unshift(_message);
      }
      this.setState({messages: _messages});
      ReactDOM.render(<App />, document.getElementById('root'));
    });
  }

  componentWillUnmount() {
    db.off();
  }

  handleChange(event) {
    this.setState({input: event.target});
  }

  handleSubmit(event) {
    let _input = this.state.input;
    if (_input && _input.value && _input.value !== "") {
      db.ref('messages').push().set({
        message: _input.value,
        timestamp: Date.now()
      });
      _input.value = "";
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ENG 101</h1>
          <h2>What is a Stack? 🥞</h2>
        </header>
        <ul className="messages">
          {this.state.messages.map((message, index) => {
            return <Message message={message._value} key={message._id} />
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="message" placeholder="Type something here :)" onChange={this.handleChange} required="required" />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default App;
