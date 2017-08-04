import React from 'react';
import Document from './Components/Document.js';
import Form from './Components/Form.js';
import './styles/app.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			surname: '________',
			name:'________',
			secondname:'________',
			vocationStart:'________',
			vocationEnd:'________',
			term:'________',
			date:'________'
		}
	}

	handleFormChange = (idField, value) => {
		this.setState({
			surname: value,
			name: value,
			secondname: value,
			date: value,
			term: value
		})
		console.log(idField, value);
	}

	render() {
		return (
			<div className="app__form">
				<Form onChange={this.handleFormChange}/>
				<Document
					surname={this.state.surname}
					name={this.state.name}
					secondname={this.state.secondname}
					date={this.state.date}
					term={this.state.term}
				/>
			</div>
		);
	}
}

export default App;
