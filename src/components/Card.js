import "./Card.css";

export default function Card(props) {
  const iconUrl = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";
  const weekday = props.date.split(" ")[0].replace(",", ".");
  const day = props.date.split(" ")[1];
  const month = props.date.split(" ")[2];

  return (
    <div className="Card">
      <div className="Card__info">
        <img src={iconUrl} alt="weather" className="Card__img" />
        <div className="Card__date">
          <p>{weekday}</p>
          <p className="Card__day">{day}</p>
          <p>{month}</p>
        </div>
      </div>
      <div className="Card__metric-container">
        <div className="Card__info">
          <p className="Card__label">min temp</p>
          <p className="Card__value">{props.minTemp}°C</p>
        </div>
        <div className="Card__info">
          <p className="Card__label">humidity</p>
          <p className="Card__value">{props.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
