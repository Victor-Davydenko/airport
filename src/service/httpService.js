class HttpService {
  _baseUrl = 'https://api.iev.aero/api/flights/';

  async getData(url) {
  	const res = await fetch(`${this._baseUrl}${url}`);

  	if (!res.ok) {
  		throw new Error('Something went wrong');
  	}

  	return await res.json();
  }

  getAllFlights(date) {
  	return this.getData(date);
  }
}

const httpService = new HttpService();

export default httpService;
