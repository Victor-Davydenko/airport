import React, { useEffect } from 'react';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';

function App() {
	useEffect(() => {
		const body = document.querySelector('body');
		body.addEventListener('mousemove', () => {
			body.classList.add('mouse-used');
		});

		body.addEventListener('keyup', (e) => {
			if (e.code === 'Tab') {
				if (body.classList.contains('mouse-used')) {
					body.classList.remove('mouse-used');
				}
			}
		});
	}, []);
	return (
		<div className="App">
			<Header />
			<div className="container">
				<HomePage />
			</div>
			<Footer />
		</div>
	);
}

export default App;
