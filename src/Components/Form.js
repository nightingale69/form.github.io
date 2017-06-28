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
			surname:'',
			name: '',
			secondname: '',
			vocationStart: '',
			vocationEnd: '',
			term: '',
			date: ''
		};
	}

	handleSurnameBlur = (value) => {
        this.setState({
            surname: value
        });
        console.log('Фамилия:', value);
    };

    handleNameBlur = (value) => {
        this.setState({
            name: value
        });
        console.log('Имя:', value);
    };

    handleSecondnameBlur = (value) => {
        this.setState({
            secondname: value
        });
        console.log('Отчество:', value);
    };

    handleVocationStartBlur = (value) => {
        this.setState({
            vocationStart: value
        });
        console.log('Начало отпуска:', value);
    };

    handleVocationEndBlur = (value) => {
        this.setState({
            vocationEnd: value
        });
        console.log('Конец отпуска:', value);
    };

    handleTermBlur = (value) => {
        this.setState({
            term: value
        });
        console.log('Срок:', value);
    };

    handleDateBlur = (value) => {
        this.setState({
            date: value
        });
        console.log('Дата заявления:', value);
    };

	render() {
		return (
			<form className="form">
				{fields.map((field, index) => <TextField key={index} label={field.label} type={field.type} size={field.size}
          onBlur={this.handleSurnameBlur}
          />)}
			</form>
		);
	}
}

export default Form;
