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
		if (idField==='1') {
			this.setState({surname: value})
		} else if (idField==='2') {
			this.setState({name: value})
		} else if (idField==='3') {
			this.setState({secondname: value})
		} else if (idField==='4') {
			this.setState({vocationStart: value})
		} else if (idField==='5'){
			this.setState({vocationEnd: value})
		} else if (idField==='6'){
			this.setState({term: value})
		} else if (idField==='7'){
			this.setState({date: value})
		}
	}

	render() {
		return (
			<div className="app__form">
				<Form onChange={this.handleFormChange}/>
				<Document
					surname={this.state.surname}
					name={this.state.name}
					secondname={this.state.secondname}
					vocationStart={this.state.vocationStart}
					vocationEnd={this.state.vocationEnd}
					date={this.state.date}
					term={this.state.term}
				/>
			</div>
		);
	}
}

export default App;
