import React from 'react';
import Document from './Components/Document.js';
import Form from './Components/Form.js';
import './styles/app.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			surname: localStorage.getItem('surname'),
			name: localStorage.getItem('name'),
			secondname: localStorage.getItem('secondname'),
			vocationStart: localStorage.getItem('vocationStart'),
			vocationEnd: localStorage.getItem('vocationEnd'),
			term: localStorage.getItem('term'),
			date: localStorage.getItem('date')
		}
	};

	handleFormChange = (idField, value) => {
		const validation = this.refs.valid;
		switch (idField) {
			case '1':
				if (value.length <= 1) {
					validation.innerText = 'Не заполнено поле "Фамилия" или менее 2 символов'
				} else if (!value.match(/[а-яА-ЯёЁ]/g)) {
					validation.innerText = 'При вводе используется только кириллица'
				} else {
					this.setState({surname: value});
					localStorage.setItem('surname', value);
					validation.innerText = ''
				};
				break;
			case '2':
				if (value.length <= 1) {
					validation.innerText = 'Не заполнено поле "Имя" или менее 2 символов'
				} else if (!value.match(/[а-яА-ЯёЁ]/g)) {
					validation.innerText = 'При вводе используется только кириллица'
				} else {
					this.setState({name: value});
					localStorage.setItem('name', value);
					validation.innerText = ''
				};
				break;
			case '3':
				if (value.length <= 1) {
					validation.innerText = 'Не заполнено поле "Отчество" или менее 2 символов'
				} else if (!value.match(/[а-яА-ЯёЁ]/g)) {
					validation.innerText = 'При вводе используется только кириллица'
				} else {
					this.setState({secondname: value});
					localStorage.setItem('secondname', value);
					validation.innerText = ''
				};
				break;
			case '4':
				if (value.length >= 11) {
					validation.innerText = ('Неправильный год "Начало отпуска"')
				} else {
					this.setState({vocationStart: value});
					localStorage.setItem('vocationStart', value);
					validation.innerText = ''
				};
				break;
			case '5':
				if (value.length >= 11) {
					validation.innerText = ('Неправильный год "Конец отпуска"')
				} else {
					this.setState({vocationEnd: value});
					localStorage.setItem('vocationEnd', value);
					validation.innerText = ''
				};
				break;
			case '6':
				if (value.length === 0) {
					validation.innerText = ('Не заполнено поле "Срок"')
				} else if (value.length >= 3) {
					validation.innerText = ('Вводимое значение не более 99')
				} else {
					this.setState({term: value});
					localStorage.setItem('term', value);
					validation.innerText = ''
				};
				break;
			case '7':
				if (value.length >= 11) {
					validation.innerText = ('Неправильный год в "Дата"')
				} else {
					this.setState({date: value});
					localStorage.setItem('date', value);
					validation.innerText = ''
				};
				break;
			default:
				break;
		};
	};

	render() {
		return (
			<div className="app__form">
				<Form onChange={this.handleFormChange} />
				<Document
					surname={this.state.surname}
					name={this.state.name}
					secondname={this.state.secondname}
					vocationStart={this.state.vocationStart}
					vocationEnd={this.state.vocationEnd}
					date={this.state.date}
					term={this.state.term}
				/>
				<div className="app__valid" ref="valid" />
			</div>
		);
	}
}

export default App;
