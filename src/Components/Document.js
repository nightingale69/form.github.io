import React from 'react';
import '../styles/document.css';

class Document extends React.Component {
	render() {
		return (
			<div className='document'>
				<div className='document__head'>
					<p>Директору департамента по управлению персоналом Сидоровой Ё.Ё.</p>
					<p>От {this.props.surname} {this.props.name} {this.props.secondname}
					</p>
				</div>
				<div className='document__caption'>
					<p>Заявление</p>
				</div>
				<div className='document__body'>
					<p className='document__parag'>Прошу Вас предоставить мне ежегодный оплачиваемый отпуск с {this.props.vocationStart} года по {this.props.vocationEnd} года сроком на {this.props.term} календарных дней.</p>
				</div>
				<div className='document__date'>
					<p>Дата {this.props.date}</p>
				</div>
				<div className='document__sign'>
					<p>Подпись________________</p>
				</div>
				<div className='document__subdiv'>
					<p>Не возражаю Руководитель подразделения /________ /</p>
				</div>
				<div className='document__depart'>
					<p>Директор департамента по управлению персоналом Сидорова Ё.Ё.</p>
				</div>
			</div>
		);
	}
}

export default Document;
