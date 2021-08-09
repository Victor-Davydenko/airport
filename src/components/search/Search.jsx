import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/searchFieldSlice';

import './search.scss';
import Button from '../shared/button';

const SearchField = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();
	const onFormSubmit = (e) => {
		e.preventDefault();
		dispatch(setSearchValue(inputValue));
	};
	return (
		<div className='search'>
			<h2 className="search__title">Пошук рейсу</h2>
			<div className="search__wrapper">
				<form action="" className="search__form" onSubmit={(e) => onFormSubmit(e)}>
					<div className="search__input-wrapper">
						<input className="search__input"
									 type="text" value={inputValue}
									 placeholder='Номер рейсу або місто'
									 onChange={(e) => setInputValue(e.target.value)}/>
					</div>
					<Button className='search__button'
						type='submit'
						text='Знайти'
					/>
				</form>
			</div>
		</div>
	);
};

export default SearchField;
