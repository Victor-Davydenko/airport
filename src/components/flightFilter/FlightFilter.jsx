import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import isTomorrow from 'date-fns/isTomorrow';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import DatePicker from 'react-datepicker';
import classNames from '../../utils';

import 'react-datepicker/dist/react-datepicker.css';

import './flightFilter.scss';
import icon from '../../images/dateIcon.png';
import { today, tomorrow, yesterday } from '../../constants/constants';
import { setFlightDirection } from '../../store/flightDirectionSlice';
import { setChosenDate } from '../../store/dateSlice';

const FlightFilter = () => {
	const flightDirection = useSelector((state) => state.flightDirectionReducer.flightDirection);
	const chosenDate = useSelector((state) => state.flightDateReducer.chosenDate);
	const dispatch = useDispatch();
	const chooseDate = (options) => {
		const { date, pickedDay } = options;
		if (date) {
			dispatch(setChosenDate(date));
		}
		if (pickedDay === 'yesterday') {
			dispatch(setChosenDate(subDays(today, 1)));
		}
		if (pickedDay === 'today') {
			dispatch(setChosenDate(today));
		}
		if (pickedDay === 'tomorrow') {
			dispatch(setChosenDate(addDays(today, 1)));
		}
	};
	return (
		<div className='filter'>
			<div className="filter__row">
				<ul className="filter__flights-list">
					<li className={ classNames(['filter__flights-list-item',
						flightDirection === 'departure' && 'filter__flights-list-item--active']) }
					onClick={() => dispatch(setFlightDirection('departure'))}>
						<span>Виліт</span>
					</li>
					<li className={ classNames(['filter__flights-list-item',
						flightDirection === 'arrival' && 'filter__flights-list-item--active']) }
					onClick={() => dispatch(setFlightDirection('arrival'))}>
						<span>Приліт</span>
					</li>
				</ul>
			</div>
			<div className="filter__row filter__date-row">
				<div className="calendar">
					<DatePicker selected={ chosenDate } onChange={(date) => chooseDate({ date })}/>
					<img src={icon} alt="date-picker"/>
					 <span className='calendar__date'>{format(chosenDate, 'dd/MM')}</span>
				</div>
				 <ul className="filter__date-list">
					<li className={classNames(['filter__date-list-item',
						isYesterday(chosenDate) && 'filter__date-list-item--active'])} onClick={() => chooseDate({ pickedDay: 'yesterday' })}>
						<span className="date">{format(yesterday, 'dd/MM')}</span>
						<span className="text">Вчора</span>
					</li>
					<li className={classNames(['filter__date-list-item',
						isToday(chosenDate) && 'filter__date-list-item--active'])} onClick={() => chooseDate({ pickedDay: 'today' })}>
						<span className="date">{format(today, 'dd/MM')}</span>
						<span className="text">Сьогодні</span>
					</li>
					<li className={classNames(['filter__date-list-item',
						isTomorrow(chosenDate) && 'filter__date-list-item--active'])} onClick={() => chooseDate({ pickedDay: 'tomorrow' })}>
						<span className="date">{format(tomorrow, 'dd/MM')}</span>
						<span className="text">Завтра</span>
					</li>
				 </ul>
			</div>
		</div>
	);
};

export default FlightFilter;
