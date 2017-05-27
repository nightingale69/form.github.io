import React from 'react';
import '../styles/textfield.css';

class TextField extends React.Component {
    render() {
        return <input ref='input' type='text' onBlur={this.props.handleSurnameBlur}/>
    }
}
    
export default TextField