import cloudy from '../../images/cloudy.png';
import './WeatherMain.css';

function WeatherMain() {
	return (
		<div className="weather-main">
			<div className="weather-main__main-info">
				<h2 className="weather-main__main-info_city">Тула</h2>
				<div className="weather-main__main-info_temp">
					<p>+15 °C</p>
					<img
						className="weather-icon"
						src={cloudy}
						alt="Иконка с состоянием погоды"
					/>
				</div>
				<div className="weather-main__main-info_feel">
					<p>Ощущается как +12 °C</p>
				</div>
			</div>
			<div className="weather-main__additional-info">
				<div className="weather-main__additional-info_container">
					<p>Ветер: 5 м/с</p>
					<p>Влажность: 79%</p>
					<p>Давление: 1000 гПа</p>
				</div>
			</div>
		</div>
	);
};

export default WeatherMain;