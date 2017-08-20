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

		if (idField==='1') {
			this.setState({surname: value});
			localStorage.setItem('surname', value);
			validation.innerText = ''
			if (value.length <= 1) {
				this.setState({surname: ''});
				localStorage.setItem('surname', '');
				validation.innerText = 'Не заполнено поле "Фамилия" или менее 2 символов'
			} else if (!value.match(/[а-яА-ЯёЁ]/g)) {
				this.setState({surname: ''});
				localStorage.setItem('surname', '');
				validation.innerText = 'При вводе используется только кириллица'
			}
		} else if (idField==='2') {
			this.setState({name: value});
			localStorage.setItem('name', value);
			validation.innerText = ('')
			if (value.length <= 1) {
				this.setState({name: ''});
				localStorage.setItem('name', '');
				validation.innerText = ('Не заполнено поле "Имя" или менее 2 символов')
			} else if (!value.match(/[а-яА-ЯёЁ]/g)) {
				this.setState({name: ''});
				localStorage.setItem('name', '');
				validation.innerText = ('При вводе используется только кириллица')
			}
		} else if (idField==='3') {
			this.setState({secondname: value});
			localStorage.setItem('secondname', value);
			validation.innerText = ('')
			if (value.length <= 1) {
				this.setState({secondname: ''});
				localStorage.setItem('secondname', '');
				validation.innerText = ('Не заполнено поле "Отчество" или менее 2 символов')
			} else if (!value.match(/[а-яА-ЯёЁ]/g)) {
				this.setState({secondname: ''});
				localStorage.setItem('secondname', '');
				validation.innerText = ('При вводе используется только кириллица')
			}
		} else if (idField==='4') {
			this.setState({vocationStart: value});
			localStorage.setItem('vocationStart', value);
			validation.innerText = ('')
			if (value.length >= 11) {
				this.setState({vocationStart: ''});
				localStorage.setItem('vocationStart', '');
				validation.innerText = ('Неправильный год "Начало отпуска"')
			}
		} else if (idField==='5'){
			this.setState({vocationEnd: value});
			localStorage.setItem('vocationEnd', value);
			validation.innerText = ('')
			if (value.length >= 11) {
				this.setState({vocationEnd: ''});
				localStorage.setItem('vocationEnd', '');
				validation.innerText = ('Неправильный год "Конец отпуска"')
			}
		} else if (idField==='6'){
			this.setState({term: value});
			localStorage.setItem('term', value);
			validation.innerText = ('')
			if (value.length === 0) {
				this.setState({term: ''});
				localStorage.setItem('term', '');
				validation.innerText = ('Не заполнено поле "Срок"')
			} else if (value.length >= 3) {
				this.setState({term: ''});
				localStorage.setItem('term', '');
				validation.innerText = ('Вводимое значение не более 99')
			}
		} else if (idField==='7'){
			this.setState({date: value});
			localStorage.setItem('date', value);
			validation.innerText = ('')
			if (value.length >= 11) {
				this.setState({date: ''});
				localStorage.setItem('date', '');
				validation.innerText = ('Неправильный год в "Дата"')
			}
		}
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
