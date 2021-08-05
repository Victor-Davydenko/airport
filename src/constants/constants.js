import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';

const today = new Date();
const yesterday = subDays(new Date(), 1);
const tomorrow = addDays(new Date(), 1);
const baseUrl = 'https://api.iev.aero/api/flights/';

export {
	today,
	tomorrow,
	yesterday,
	baseUrl,
};
