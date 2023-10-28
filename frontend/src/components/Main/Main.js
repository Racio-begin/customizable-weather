import { useState, useEffect } from 'react';

import axios from 'axios';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherCardList from '../WeatherCardList/WeatherCardList';

import API_KEY from '../../utils/API_KEY';

import './Main.css';

function Main() {

	// const [weatherData, setWeatherData] = useState([]);

	// const fetchWeather = async () => {
	// const days = 5;
	// const cityID = '524901'; //ID Москвы
	// 	const city = 'Tula'
	// 	const response = await axios.get(
	// 		`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`
	// 	);
	// 	console.log(response);
	// 	setWeatherData(response.data.list);
	// };

	// useEffect(() => {
	// 	fetchWeather();
	// }, []);

	return (
		<div className='main'>
			<Header />
			{/* {weatherData.map((dailyData, index) => (
				<WeatherCard key={index} weatherData={dailyData} />
			))} */}

			{/* <WeatherCard /> */}

			<WeatherCardList />

			<Footer />
		</div>
	);
};

export default Main;