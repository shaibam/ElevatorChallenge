import React, { Component } from 'react';
import './CallerButton.css'
class CallerButton extends Component {
    state = { selected: false }

    toggle = () => {
        let selected = !this.state.selected
        this.setState({ selected })
        this.props.onChange(selected);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate',nextProps.deselect);
        if (nextProps.deselect && this.state.selected) {
            this.setState({ selected: false })
            return false;
        }
        return true;
    }

    //componentWillReceiveProps(nextProps) {
    //if (!nextProps.selected) this.setState({ selected: nextProps.selected })
    //if (nextProps.deslect && this.state.selected)
    //}

    render() {
        //console.log('this.props.disabled',this.props.disabled,this.props.index)
        return (
            <button className={`metal linear ${this.state.selected && "selected"}`} onClick={this.toggle} disabled={this.props.disabled || this.state.selected}> {this.props.index}</button>
        );
    }
}


CallerButton.defaultProps = {
    onChange: () => { }
}

export default CallerButton;