import { useState, useEffect } from 'react';
import { baseUrl } from '../constants/constants';

const useApi = (url, options) => {
	const [state, setState] = useState({
		isLoading: false,
		response: null,
		isError: null,
	});
	useEffect(() => {
		const fetchData = async () => {
			setState({
				...state,
				isLoading: true,
			});
			try {
				const res = await fetch(`${baseUrl}${url}`, options);
				if (!res.ok) {
					throw new Error('Something went wrong');
				}
				const json = await res.json();
				setState({
					...state,
					isLoading: false,
					response: json.body,
				});
			} catch (error) {
				setState({
					...state,
					isError: error,
				});
			}
		};
		fetchData();
	}, [url]);

	return { ...state };
};

export default useApi;
