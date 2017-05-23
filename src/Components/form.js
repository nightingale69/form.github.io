import React from 'react';
import './Styles/form.css';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {surname: ''};
        this.state = {name: ''};
    }
    update(){
        console.log('Фамилия:', this.refs.surname.value);
        console.log('Имя:', this.refs.name.value);
        console.log('Отчество:', this.refs.secondname.value);
        console.log('Начало отпуска:', this.refs.begin.value);
        console.log('Окончание отпуска:', this.refs.end.value);
        console.log('Срок:', this.refs.term.value);
        console.log('Дата заявления:', this.refs.date.value);
    }
    render() {
        return (        
            <form className='form'>
                <label className='form__label'>Фамилия</label>
                <input      
                    type='text'
                    className='input' 
                    ref='surname'
                    onBlur={this.update.bind(this)}
                /> {this.state.surname}
                <label className='form__label'>Имя</label>
                <input 
                    type='text' 
                    className='input' 
                    ref='name'
                    onBlur={this.update.bind(this)}
                /> {this.state.name}
                <label className='form__label'>Отчество</label>
                <input 
                    type='text' 
                    className='input' 
                    ref='secondname'
                    onBlur={this.update.bind(this)}
                /> {this.state.secondname}
                <label className='form__label'>Начало отпуска</label>
                <input 
                    type='date' 
                    className='input' 
                    ref='begin'
                    onBlur={this.update.bind(this)}
                /> {this.state.begin}
                <label className='form__label'>Окончание отпуска</label>
                <input 
                    type='date' 
                    className='input' 
                    ref='end'
                    onBlur={this.update.bind(this)}
                /> {this.state.end}
                <label className='form__label'>Срок</label>
                <input 
                    type='number' 
                    className='input' 
                    size="3" 
                    ref='term'
                    onBlur={this.update.bind(this)}
                /> {this.state.term}
                <label className='form__label'>Дата заявления</label>
                <input 
                    type='date' 
                    className='input' 
                    ref='date'
                    onBlur={this.update.bind(this)}
                /> {this.state.date}
            </form>
        );
    }
}

export default Form