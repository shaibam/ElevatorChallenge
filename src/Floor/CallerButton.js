import React, { Component } from 'react';
import './CallerButton.css'
class CallerButton extends Component {
    state = { selected: false }

    toggle = () => {
        let selected = !this.state.selected
        this.setState({ selected })
        this.props.onChange(selected);
    }

    render() {
        return (
            <button className={`metal linear ${this.state.selected && "selected"}`}  onClick={this.toggle} disabled={this.state.selected}>  {this.props.index}</button>
        );
    }
}


CallerButton.defaultProps = {
    onChange: () => { }
}

export default CallerButton;