import React, { Component } from 'react';
import './App.css';
import Modal from './Components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { isOpen } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
        <h1>Modal</h1>
        <button onClick={() => this.setState({ isOpen: true})}>Open Modal</button>
							<Modal>
                isOpen={ isOpen }
                onClose={() => this.setState({ isOpen: false })}
                <Modal.Title>My Modal Title</Modal.Title>
                <Modal.Body>My Modal Body</Modal.Body>
                <Modal.Footer>My Modal Footer</Modal.Footer>
              </Modal>
        </header>
      </div>
    );
  }
}

export default App;
