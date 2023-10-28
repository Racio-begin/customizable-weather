import cloudy from '../../images/cloudy.png';

import './WeatherCard.css';

function WeatherCard({ weatherData }) {

  // const dateBuilder = (d) => {
  //   let months = [
  //     "Январь",
  //     "Февраль",
  //     "Март",
  //     "Апрель",
  //     "Май",
  //     "Июнь",
  //     "Июль",
  //     "Август",
  //     "Сентябрь",
  //     "Октябрь",
  //     "Ноябрь",
  //     "Декабрь",
  //   ];

  //   let days = [
  //     "Понедельник",
  //     "Вторник",
  //     "Среда",
  //     "Четверг",
  //     "Пятница",
  //     "Суббота",
  //     "Воскресенье",
  //   ];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // };

  // const date = new Date(weatherData.dt * 1000);

  // return (
  //   <div className="weather-card">
  //     <h2>{dateBuilder(date)}</h2>
  //     <div className="weather-icon">
  //       <img src={"http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"} alt="" />
  //     </div>
  //     <h1>{Math.round(weatherData.temp.day)}°C</h1>
  //     <h3>Ветер: {weatherData.speed} м/с</h3>
  //     <h3>Влажность: {weatherData.humidity}%</h3>
  //     <h3>Давление: {weatherData.pressure} гПа</h3>
  //   </div>
  // );

  return (
    <div className="weather-card">
      <div className="weather-card__container">
        <img
          className="weather-icon"
          src={cloudy}
          alt="Иконка с состоянием погоды"
        />
        <p>15 °C</p>
        <p>Ветер: 5 м/с</p>
        {/* <p>Влажность: 79%</p>
        <p>Давление: 1000 гПа</p> */}
      </div>
    </div>
  );
};

export default WeatherCard;