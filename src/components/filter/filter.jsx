import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './filter.scss';
import icon from '../../images/dateIcon.png';

const Filter = () => (
	<div className='filter'>
		<div className="filter__row">
			<ul className="filter__flights-list">
				<li className="filter__flights-list-item active">
					<span>Виліт</span>
				</li>
				<li className="filter__flights-list-item">
					<span>Приліт</span>
				</li>
			</ul>
		</div>
		<div className="filter__row filter__date-row">
			<div className="calendar">
				<DatePicker />
				<img src={icon} alt="date-picker"/>
				<span className='calendar__date'>22/07</span>
			</div>
			<ul className="filter__date-list">
				<li className="filter__date-list-item">
					<span className="date">21/07</span>
					<span className="text">Вчора</span>
				</li>
				<li className="filter__date-list-item active">
					<span className="date">22/07</span>
					<span className="text">Сьогодні</span>
				</li>
				<li className="filter__date-list-item">
					<span className="date">23/07</span>
					<span className="text">Завтра</span>
				</li>
			</ul>
		</div>
	</div>
);

export default Filter;
