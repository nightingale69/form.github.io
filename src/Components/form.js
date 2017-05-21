import React from 'react';
import './Styles/form.css';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {a: ''}
    }
    update(){
        this.setState({
            surname: this.refs.surname.value,
            name: this.refs.name.value,
            secondname: this.refs.secondname.value,
            begin: this.refs.begin.value,
        });
    }
    render() {
        return (        
            <form className='add'>
                <label className='add__lb'>Фамилия</label>
                <input      
                    type='text'
                    className='add__lastn' 
                    name='surname' 
                    required pattern='^[А-Яа-яЁё\s]+$'
                    ref='surname'
                    onChange={this.update.bind(this)}
                /> {this.state.surname}
                <label className='add__lb'>Имя</label>
                <input 
                    type='text' 
                    className='add__firstn' 
                    name='firstname' 
                    required pattern='^[А-Яа-яЁё\s]+$'
                    ref='name'
                    onChange={this.update.bind(this)}
                /> {this.state.name}
                <label className='add__lb'>Отчество</label>
                <input 
                    type='text' 
                    className='add__secondn' 
                    name='secondname' 
                    required pattern='^[А-Яа-яЁё\s]+$'
                    ref='secondname'
                    onChange={this.update.bind(this)}
                /> {this.state.secondname}
                <label className='add__lb'>Начало отпуска</label>
                <input 
                    type='date' 
                    className='add__startdate' 
                    required
                    ref='begin'
                    onChange={this.update.bind(this)}
                /> {this.state.begin}
                <label className='add__lb'>Окончание отпуска</label>
                <input 
                    type='date' 
                    className='add__endate' 
                    required
                    ref='end'
                    onChange={this.update.bind(this)}
                /> {this.state.end}
                <label className='add__lb'>Срок</label>
                <input 
                    type='number' 
                    className='add__term' 
                    size="3" 
                    required
                    ref='term'
                    onChange={this.update.bind(this)}
                /> {this.state.term}
                <label className='add__lb'>Дата заявления</label>
                <input 
                    type='date' 
                    className='add__date' 
                    required
                    ref='date'
                    onChange={this.update.bind(this)}
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