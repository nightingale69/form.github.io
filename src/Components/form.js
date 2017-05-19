import React from 'react';
import './Styles/form.css';

class Form extends React.Component {
    render(){
        return (        
                <form className='add'>
                    <label className='add__lb'>Фамилия</label>
                    <input type='text' className='add__lastn' name='lastname' required pattern='^[А-Яа-яЁё\s]+$'/>
                    <label className='add__lb'>Имя</label>
                    <input type='text' className='add__firstn' name='firstname' required pattern='^[А-Яа-яЁё\s]+$'/>
                    <label className='add__lb'>Отчество</label>
                    <input type='text' className='add__secondn' name='secondname' required pattern='^[А-Яа-яЁё\s]+$'/>
                    <label className='add__lb'>Начало отпуска</label>
                    <input type='date' className='add__startdate' required/>
                    <label className='add__lb'>Окончание отпуска</label>
                    <input type='date' className='add__endate' required/>
                    <label className='add__lb'>Срок</label>
                    <input type='number' className='add__term' size="3" required/>
                    <label className='add__lb'>Дата заявления</label>
                    <input type='date' className='add__date' required/>
                    <input type='submit' className='add__submit' value='Подтвердить'/>
                </form>
         );
    }
}

export default Form