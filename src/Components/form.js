import React from 'react';
import TextField from './TextField.js';
import '../styles/form.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            surname: "",
            name: "",
            secondname: "",
            vocationStart: "",
            vocationEnd: "",
            term: "",
            date: ""
        };
    }
    
    handleSurnameBlur = (value) => {
        this.setState({
            surname: value
        });
        console.log("Фамилия:", value);
    };
    
    handleNameBlur = (value) => {
        this.setState({
            name: value
        });
        console.log("Имя:", value);
    };
    
    handleSecondnameBlur = (value) => {
        this.setState({
            secondname: value
        });
        console.log("Отчество:", value);
    };
        
    handleVocationStartBlur = (value) => {
        this.setState({
            vocationStart: value
        });
        console.log("Начало отпуска:", value);
    };
    
    handleVocationEndBlur = (value) => {
        this.setState({
            vocationEnd: value
        });
        console.log("Конец отпуска:", value);
    };
    
    handleTermBlur = (value) => {
        this.setState({
            term: value
        });
        console.log("Срок:", value);
    };
    
    handleDateBlur = (value) => {
        this.setState({
            date: value
        });
        console.log("Дата заявления:", value);
    };

    render() {
        return (        
            <form className='form'>
                {this.state.handleBlur.map((field, i) => <TextField key = {i} handleBlur = {field} />)}
            </form>
        );
    }
}

export default Form