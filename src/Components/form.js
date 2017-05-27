import React from 'react';
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
    
    handleSurnameBlur = (e) => {
        this.setState({
            surname: e.target.value
        });
        console.log('Фамилия:', e.target.value);
    };
    
    handleNameBlur = (e) => {
        this.setState({
            name: e.target.value
        });
        console.log('Имя:', e.target.value);
    };
    
    handleSecondnameBlur = (e) => {
        this.setState({
            secondname: e.target.value
        });
        console.log('Отчество:', e.target.value);
    };
        
    handleVocationStartBlur = (e) => {
        this.setState({
            vocationStart: e.target.value
        });
        console.log('Начало отпуска:', e.target.value);
    };
    
    handleVocationEndBlur = (e) => {
        this.setState({
            vocationEnd: e.target.value
        });
        console.log('Конец отпуска:', e.target.value);
    };
    
    handleTermBlur = (e) => {
        this.setState({
            term: e.target.value
        });
        console.log('Срок:', e.target.value);
    };
    
    handleDateBlur = (e) => {
        this.setState({
            date: e.target.value
        });
        console.log('Дата заявления:', e.target.value);
    };

    render() {
        return (        
            <form className='form'>
                <label className='form__label'>Фамилия</label>
                <input      
                    type='text'
                    className='input' 
                    onBlur={this.handleSurnameBlur}
                /> {this.state.surname}
                <label className='form__label'>Имя</label>
                <input 
                    type='text' 
                    className='input' 
                    onBlur={this.handleNameBlur}
                /> {this.state.name}
                <label className='form__label'>Отчество</label>
                <input 
                    type='text' 
                    className='input' 
                    onBlur={this.handleSecondnameBlur}
                /> {this.state.secondname}
                <label className='form__label'>Начало отпуска</label>
                <input 
                    type='date' 
                    className='input' 
                    onBlur={this.handleVocationStartBlur}
                /> {this.state.vocationStart}
                <label className='form__label'>Окончание отпуска</label>
                <input 
                    type='date' 
                    className='input' 
                    onBlur={this.handleVocationEndBlur}
                /> {this.state.vocationEnd}
                <label className='form__label'>Срок</label>
                <input 
                    type='number' 
                    className='input' 
                    size="3" 
                    onBlur={this.handleTermBlur}
                /> {this.state.term}
                <label className='form__label'>Дата заявления</label>
                <input 
                    type='date' 
                    className='input' 
                    onBlur={this.handleDateBlur}
                /> {this.state.date}
            </form>
        );
    }
}

export default Form