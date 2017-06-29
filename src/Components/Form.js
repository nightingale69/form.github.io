import React from 'react';
import TextField from './TextField.js';
import '../styles/form.css';

var fields = [
	{
		surname: '',
		label: 'Фамилия',
		type: 'text'
	},
	{
		name: '',
		label: 'Имя',
		type: 'text'
	},
	{
		secondname: '',
		label: 'Отчество',
		type: 'text'
	},
	{
		vocationStart: '',
		label: 'Начало отпуска',
		type: 'date'
	},
	{
		vocationEnd: '',
		label: 'Конец отпуска',
		type: 'date'
	},
	{
		term: '',
		label: 'Срок',
		type: 'number',
		size: '2'
	},
	{
		date: '',
		label: 'Дата заявления',
		type: 'date'
	}
];

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			label: ''
		};
	}

	handleFieldsBlur = (value) => {
		this.setState({
				label: value
        });
        console.log(value);
    };

	render() {
		return (
			<form className="form">
				{fields.map((field, index) => <TextField key={index} label={field.label} type={field.type} size={field.size}
          onBlur={this.handleFieldsBlur}
          />)}
			</form>
		);
	}
}

export default Form;
