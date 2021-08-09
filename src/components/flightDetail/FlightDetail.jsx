import React from 'react';
import format from 'date-fns/format';
import './flightDetail.scss';
import FlightAware from '../../images/FlightAware.webp';
import useApi from '../../hooks/useApi';
import Spinner from '../shared/spinner';
import Error from '../shared/error';
import { checkFlightStatus } from '../../utils/utils';

const FlightDetail = ({ id }) => {
	const url = id.replace('id=', '/');
	const baseFlightAwareUrl = 'https://ru.flightaware.com/live/flight/';
	const { isLoading, response: flightInfo, isError } = useApi(url);
	const buildFlightDetailsBody = (flightInfo) => {
		const flightDirection = flightInfo['airportFromID.city'] ? 'Прилітає з' : 'Летить в';
		const scheduledTime = format(Date.parse(flightInfo.timeDepShedule || flightInfo.timeToStand), 'H:mm');
		const scheduledDate = format(Date.parse(flightInfo.timeDepShedule || flightInfo.timeToStand), 'dd.MM');
		const { statusToDisplay, timeToDisplay, fullDateToDisplay } = checkFlightStatus(flightInfo);
		return (
			<>
				<div className="flight-details__row">
					<span className='flight-details__text flight-details__text--flight'>{flightInfo.codeShareData[0].codeShare} </span>
					<span className='flight-details__text'>{flightDirection}</span><br />
					<span className='flight-details__city-name'>{flightInfo['airportToID.city'] || flightInfo['airportFromID.city']}</span>
					<a target='_blank'
						 href={`${baseFlightAwareUrl}${flightInfo.airline.en.icao}${flightInfo.fltNo}`}
						 className='flight-details__nav-link flight-details__nav-link--flightaware' rel="noreferrer">
						<img src={FlightAware} alt=""/>
					</a>
				</div>
				<div className="flight-details__row">
					<p>Інформація про рейс: </p>
					<table className='flight-details__table'>
						<thead>
							<tr>
								<td>Дата</td>
								<td>Час</td>
								<td>Термінал</td>
								<td>Рейс</td>
								{flightDirection === 'Летить в' && <><td>Стійка</td>
									<td>Гейт</td></>}
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{scheduledDate}</td>
								<td>{scheduledTime}</td>
								<td>{flightInfo.term}</td>
								<td>{flightInfo.codeShareData[0].codeShare}</td>
								{flightDirection === 'Летить в' && <><td>{flightInfo.checkinNo}</td>
									<td>{flightInfo.gateNo}</td></>}
							</tr>
						</tbody>
					</table>
					<p className='flight-details__summary'>{statusToDisplay} {timeToDisplay}  {fullDateToDisplay}</p>
				</div>
			</>
		);
	};
	const flightDetailsBody = flightInfo && buildFlightDetailsBody(flightInfo);
	if (isLoading) {
		return (
			<Spinner />
		);
	}
	if (isError) {
		return (
			<Error />
		);
	}
	return (
		flightDetailsBody
	);
};

export default FlightDetail;
