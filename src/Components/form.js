import React from 'react';
import TextField from './TextField.js';
import '../styles/form.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            surname:'', 
            name:'', 
            secondname:'', 
            vocationStart:'', 
            vocationEnd:'', 
            term:'', 
            date:''
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
                <TextField 
                    className="form__text-field" 
                    label="Фамилия" 
                    type="text"
                    onBlur={this.handleSurnameBlur}
                /> {this.state.surname}
                <TextField 
                    className="form__text-field" 
                    label="Имя" 
                    type="text"
                    onBlur={this.handleNameBlur}
                /> {this.state.name}
                <TextField 
                    className="form__text-field" 
                    label="Отчество" 
                    type="text"
                    onBlur={this.handleSecondnameBlur}
                /> {this.state.secondname}
                <TextField 
                    className="form__text-field" 
                    label="Начало отпуска" 
                    type="date"
                    onBlur={this.handleVocationStartBlur}
                /> {this.state.vocationStart}
                <TextField 
                    className="form__text-field" 
                    label="Конец отпуска" 
                    type="date"
                    onBlur={this.handleVocationEndBlur}
                /> {this.state.vocationEnd}
                <TextField 
                    className="form__text-field" 
                    label="Срок" 
                    type="number"
                    size="2"
                    onBlur={this.handleTermBlur}
                /> {this.state.term}
                <TextField 
                    className="form__text-field" 
                    label="Дата заявления" 
                    type="date"
                    onBlur={this.handleDateBlur}
                /> {this.state.date}
            </form>
        );
    }
}

export default Form