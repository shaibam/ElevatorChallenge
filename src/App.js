import React, { Component } from 'react';
import './App.css';
import Floor from './Floor/Floor';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    caller: state.caller
  }
} 
/*
const mapActionsToProps = {
  onUpdateUser: UpdateUser
}*/

class App extends Component {

  constructor(props) {
    super(props);
    //console.log('props', this.props)
    //console.log('state', this.state)
  }

  onUpdateUser = (e) => {
    //this.props.onUpdateUser(e.target.value)
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {this.props.floors}
        <input onChange={this.onUpdateUser}></input>
        <div>{this.props.caller}</div>
      </div>
    );
  }
}

App.propTypes = { floors: React.Component };
App.defaultProps = {
  floors: Array(10).fill('').map((v, i) => { return <Floor key={`Floor.${i}`} index={i}/>}).reverse()
}

export default connect(mapStateToProps)(App);
