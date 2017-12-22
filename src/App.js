import React, { Component } from 'react';
import logo from './christmas-tree.png';
import './App.css';
import AddItems from './components/addItems.js';
import List from './components/list.js';
import AddCards from './components/addCard.js';

const start = [{start: "To"}, {start: "Dear"}];
const content = [{message: "Marry Christmas and a happy new year"}];
const signOff = [{signOff: "Love"}, {signOff: "From"}, {signOff: "Best Wishes"}];
const sender = [{sender: "bob"}];

const messages = [
{ start: "To", recipient: "bob", content: "Marry Christmas and a happy new year", signOff: "Love", sender: "peter"}, 
{ start: "To", recipient: "jim", content: "Marry Christmas and a happy new year", signOff: "From", sender: "james"}];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        messages,
        start,
        content,
        signOff,
        sender,
        showAdd: false
    }
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Christmas Card Writer</h1>
        </header>

        <AddCards
          start = {this.state.start}
          content = {this.state.content}
          signOff = {this.state.signOff}
          sender = {this.state.sender}
          createMessage={this.createMessage.bind(this)}
        />

        <AddItems
          showAdd = {this.state.showAdd}
          createStart={this.createStart.bind(this)}
          createContent={this.createContent.bind(this)}
          createSignOff={this.createSignOff.bind(this)}
          createFrom={this.createFrom.bind(this)}
        />
        
        <List
          messages = {this.state.messages}
        />
      </div>
    );
  }

  createMessage(start, recipient, content, signOff, sender) {

    this.state.messages.push({
      start,
      recipient,
      content,
      signOff,
      sender
    });
    
    this.setState({ messages: this.state.messages });
  }

  createStart(start){
    this.state.start.push({
      start
    });
    this.setState({ start: this.state.start });
  }

  createContent(content){
    this.state.content.push({
      message: content
    });
    this.setState({ content: this.state.content });
  }

  createSignOff(sign){
    this.state.signOff.push({
      signOff: sign
    });
    this.setState({ signOff: this.state.signOff });
  }

  createFrom(from){
    this.state.sender.push({
      sender: from
    });
    this.setState({ sender: this.state.sender });
  }

}

export default App;
