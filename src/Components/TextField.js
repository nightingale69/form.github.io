import React from 'react';
import '../styles/textfield.css';

class TextField extends React.Component {
    handleBlur = (e) => {
        const value = e.target.value;

        this.props.onBlur(value);
    };

    render() {
        const { type, size, label } = this.props;

        return (
            <div className="text-field">
                <label className="text-field__label">{label}</label>
                <input
                className="text-field__input"
                type={type}
                size={size}
                onBlur={this.handleBlur}
                />
            </div>
        );
    }
}
    
export default TextField