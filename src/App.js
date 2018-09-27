import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { UpdateUser } from './actions/user-actions'

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.user
  }
}

const mapActionsToProps = {
  onUpdateUser: UpdateUser

}

class App extends Component {

  onUpdateUser = (e) => {
    this.props.onUpdateUser(e.target.value)
  }

  render() {
    console.log('render', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser}></input>
        <div>{this.props.user}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
