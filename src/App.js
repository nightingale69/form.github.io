import React from 'react';
//import Document from './Components/document.js';
import Form from './Components/Form.js';
import './styles/app.css';

class App extends React.Component {
	handleFormField = (idField, value) => {};

	render() {
		return (
			<div className="app__form">
				<Form onBlur={this.handleFormField}/>
			</div>
		);
	}
}

export default App;
