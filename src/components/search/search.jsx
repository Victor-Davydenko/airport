import React from 'react';

import './search.scss';

const SearchField = () => {
	return (
		<div className='search'>
			<h2 className="search__title">Пошук рейсу</h2>
			<div className="search__wrapper">
				<form action="" className="search__form">
					<div className="search__input-wrapper">
						<input className="search__input" type="text" placeholder='Номер рейсу або місто' />
					</div>
					<button className='search__button' type='submit'>Знайти</button>
				</form>
			</div>
		</div>
	);
};

export default SearchField;
