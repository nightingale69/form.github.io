import React from 'react';
import '../styles/textfield.css';

class TextField extends React.Component {
	handleBlur = (e) => {
        const value = e.target.value;
				console.log('Поле',this.props.id,':', value)
				this.props.onBlur(value);

  };

	render() {
		const { type, size, label, id } = this.props;

		return (
			<div className="text-field">
				<label className="text-field__label">{label}</label>
				<input
					className="text-field__input"
					id={id}
					type={type}
					size={size}
					onBlur={this.handleBlur}
				/>
			</div>
		);
	}
}

export default TextField;
