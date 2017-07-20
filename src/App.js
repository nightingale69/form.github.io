import React from 'react';
import Document from './Components/Document.js';
import Form from './Components/Form.js';
import './styles/app.css';

class App extends React.Component {
	handleFormChange = (idField, value) => {};

	render() {
		return (
			<div className="app__form">
				<Form onChange={this.handleFormChange}/>
			</div>
		);
	}
}

export default App;
