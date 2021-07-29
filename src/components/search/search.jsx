import React, { useState } from 'react';

import './search.scss';

const SearchField = ({ onFormSubmit }) => {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className='search'>
			<h2 className="search__title">Пошук рейсу</h2>
			<div className="search__wrapper">
				<form action="" className="search__form" onSubmit={(e) => onFormSubmit(e, inputValue)}>
					<div className="search__input-wrapper">
						<input className="search__input"
									 type="text" value={inputValue}
									 placeholder='Номер рейсу або місто'
									 onChange={(e) => setInputValue(e.target.value)}/>
					</div>
					<button className='search__button' type='submit'>Знайти</button>
				</form>
			</div>
		</div>
	);
};

export default SearchField;
