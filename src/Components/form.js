import React from 'react';
import './Styles/form.css';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {surname: ''};
        this.state = {name: ''};
    }
    update(){
        //Не убрал на всякий случай, для быстрой проверки
        /*this.setState ({
            surname: this.refs.surname.value,
            name: this.refs.name.value,
        });*/
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
            <form className='add'>
                <label className='add__lb'>Фамилия</label>
                <input      
                    type='text'
                    className='add__lastn inpstyle' 
                    name='surname' 
                    required pattern='^[А-Яа-яЁё\s]+$'
                    ref='surname'
                    onBlur={this.update.bind(this)}
                /> {this.state.surname}
                <label className='add__lb'>Имя</label>
                <input 
                    type='text' 
                    className='add__firstn inpstyle' 
                    name='firstname' 
                    required pattern='^[А-Яа-яЁё\s]+$'
                    ref='name'
                    onBlur={this.update.bind(this)}
                /> {this.state.name}
                <label className='add__lb'>Отчество</label>
                <input 
                    type='text' 
                    className='add__secondn inpstyle' 
                    name='secondname' 
                    required pattern='^[А-Яа-яЁё\s]+$'
                    ref='secondname'
                    onBlur={this.update.bind(this)}
                /> {this.state.secondname}
                <label className='add__lb'>Начало отпуска</label>
                <input 
                    type='date' 
                    className='add__startdate inpstyle' 
                    required
                    ref='begin'
                    onBlur={this.update.bind(this)}
                /> {this.state.begin}
                <label className='add__lb'>Окончание отпуска</label>
                <input 
                    type='date' 
                    className='add__endate inpstyle' 
                    required
                    ref='end'
                    onBlur={this.update.bind(this)}
                /> {this.state.end}
                <label className='add__lb'>Срок</label>
                <input 
                    type='number' 
                    className='add__term inpstyle' 
                    size="3" 
                    required
                    ref='term'
                    onBlur={this.update.bind(this)}
                /> {this.state.term}
                <label className='add__lb'>Дата заявления</label>
                <input 
                    type='date' 
                    className='add__date inpstyle' 
                    required
                    ref='date'
                    onBlur={this.update.bind(this)}
                /> {this.state.date}
                <input 
                    type='submit' 
                    className='add__submit' 
                    value='Подтвердить'
                />
            </form>
        );
    }
}

export default Form