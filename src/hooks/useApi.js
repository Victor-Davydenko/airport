import { useState, useEffect } from 'react';
import { baseUrl } from '../constants/constants';

const useApi = (url, options) => {
	const [isLoading, setIsLoading] = useState(true);
	const [response, setResponse] = useState(null);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(`${baseUrl}${url}`, options);
				if (!res.ok) {
					throw new Error('Something went wrong');
				}
				const json = await res.json();
				setResponse(json.body);
				setIsLoading(false);
			} catch (error) {
				setIsError(true);
			}
		};
		fetchData();
	}, [url]);

	return { isLoading, response, isError };
};

export default useApi;
