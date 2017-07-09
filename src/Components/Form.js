import React from 'react';
import TextField from './TextField.js';
import '../styles/form.css';

var fields = [
	{
		id: '1',
		label: 'Фамилия',
		type: 'text',
		placeholder:''
	},
	{
		id: '2',
		label: 'Имя',
		type: 'text',
		placeholder:''
	},
	{
		id: '3',
		label: 'Отчество',
		type: 'text',
		placeholder:''
	},
	{
		id: '4',
		label: 'Начало отпуска',
		type: 'date',
		placeholder:''
	},
	{
		id: '5',
		label: 'Конец отпуска',
		type: 'date',
		placeholder:''
	},
	{
		id: '6',
		label: 'Срок',
		type: 'number',
		size: '2',
		placeholder:''
	},
	{
		id: '7',
		label: 'Дата заявления',
		type: 'date',
		placeholder:''
	}
];

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}

	handleFieldBlur = (value) => {
		this.setState({value});

		console.log(value)
  };

	render() {
		const {value} = this.props
		return (
			<form className="form">
				{fields.map((field, index) =>
					<TextField
						key={index}
						id={field.id}
						label={field.label}
						type={field.type}
						size={field.size}
						onBlur={this.handleFieldBlur}
					/>
				)}
			</form>
		);
	}
}

export default Form;
