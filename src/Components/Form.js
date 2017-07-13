import React from 'react';
import TextField from './TextField.js';
import '../styles/form.css';

var fields = [
	{
		id: '1',
		label: 'Фамилия',
		type: 'text'
	},
	{
		id: '2',
		label: 'Имя',
		type: 'text'
	},
	{
		id: '3',
		label: 'Отчество',
		type: 'text'
	},
	{
		id: '4',
		label: 'Начало отпуска',
		type: 'date'
	},
	{
		id: '5',
		label: 'Конец отпуска',
		type: 'date'
	},
	{
		id: '6',
		label: 'Срок',
		type: 'number',
		size: '2'
	},
	{
		id: '7',
		label: 'Дата заявления',
		type: 'date'
	}
];

class Form extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	handleFieldBlur = (idField, value) => {
		this.setState({
			idField: value
		});
		console.log('Поле', idField,':', value)
	};

	render() {
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
