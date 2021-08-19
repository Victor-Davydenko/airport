const setError = (res) => {
	if (Math.floor(res.status / 100) === 2) {
		console.log(res.status);
	}
	return res;
};

export default function (axios) {
	axios.interceptors.response.use(setError);
}
