import React from 'react';
import './Styles/form.css';

class Form extends React.Component {
    constructor() {
        super();
            this.state = {
                surname:'', name:'', secondname:'', 
                begin:'', end:'', term:'', date:''
            };
    }
    
    handleInputBlur1 = (e) => {
        this.setState({
            surname: e.target.value
        });
        console.log('Фамилия:', e.target.value);
    };
    
    handleInputBlur2 = (e) => {
        this.setState({
            name: e.target.value
        });
        console.log('Имя:', e.target.value);
    };
    
    handleInputBlur3 = (e) => {
        this.setState({
            secondname: e.target.value
        });
        console.log('Отчество:', e.target.value);
    };
        
    handleInputBlur4 = (e) => {
        this.setState({
            begin: e.target.value
        });
        console.log('Начало отпуска:', e.target.value);
    };
    
    handleInputBlur5 = (e) => {
        this.setState({
            end: e.target.value
        });
        console.log('Конец отпуска:', e.target.value);
    };
    
    handleInputBlur6 = (e) => {
        this.setState({
            term: e.target.value
        });
        console.log('Срок:', e.target.value);
    };
    
    handleInputBlur7 = (e) => {
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
                    onBlur={this.handleInputBlur1}
                /> {this.state.surname}
                <label className='form__label'>Имя</label>
                <input 
                    type='text' 
                    className='input' 
                    onBlur={this.handleInputBlur2}
                /> {this.state.name}
                <label className='form__label'>Отчество</label>
                <input 
                    type='text' 
                    className='input' 
                    onBlur={this.handleInputBlur3}
                /> {this.state.secondname}
                <label className='form__label'>Начало отпуска</label>
                <input 
                    type='date' 
                    className='input' 
                    onBlur={this.handleInputBlur4}
                /> {this.state.begin}
                <label className='form__label'>Окончание отпуска</label>
                <input 
                    type='date' 
                    className='input' 
                    onBlur={this.handleInputBlur5}
                /> {this.state.end}
                <label className='form__label'>Срок</label>
                <input 
                    type='number' 
                    className='input' 
                    size="3" 
                    onBlur={this.handleInputBlur6}
                /> {this.state.term}
                <label className='form__label'>Дата заявления</label>
                <input 
                    type='date' 
                    className='input' 
                    onBlur={this.handleInputBlur7}
                /> {this.state.date}
            </form>
        );
    }
}

export default Form