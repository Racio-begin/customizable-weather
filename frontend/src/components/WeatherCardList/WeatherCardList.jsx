import './WeatherCardList.css';

import WeatherCard from '../WeatherCard/WeatherCard'

function WeatherCardList() {
	return (
		<div className="weather-card-list">
		<WeatherCard />
		<WeatherCard />
		<WeatherCard />
		</div>
	);
};

export default WeatherCardList;