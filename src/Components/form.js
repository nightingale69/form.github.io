import React from 'react';
import TextField from './TextField.js';
import '../styles/form.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            handleBlur: 
            [
                {
                    label: "Фамилия", 
                    type: "text",
                    onBlur: "this.handleSurnameBlur"
                },
            
                {
                    label: "Имя", 
                    type: "text",
                    onBlur: "this.handleNameBlur"
                },
            
                {
                    label: "Отчество", 
                    type: "text",
                    onBlur: "this.handleSecondnameBlur"
                },
            
                {
                    label: "Начало отпуска", 
                    type: "date",
                    onBlur: "this.handleVocationStartBlur"
                },
            
                {
                    label: "Конец отпуска", 
                    type: "date",
                    onBlur: "this.handleVocationEndBlur"
                },
            
                {
                    label: "Срок", 
                    type: "number",
                    size: "2",
                    onBlur: "this.handleTermBlur"
                },
            
                {
                    label: "Дата заявления", 
                    type: "date",
                    onBlur: "this.handleDateBlur"
                }
            ]
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