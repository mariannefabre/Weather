import "./Card.css";

export default function Card(props) {
  const iconUrl = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";
  const weekday = props.date.split(" ")[0].replace(",", ".");
  const day = props.date.split(" ")[1];
  const month = props.date.split(" ")[2];

  return (
    <div className="Card">
      <div className="Card__Info">
        <img src={iconUrl} alt="weather" className="Card__Img" />
        <div className="Card__Date">
          <p>{weekday}</p>
          <p className="Card__Day">{day}</p>
          <p>{month}</p>
        </div>
      </div>
      <div className="Container">
        <div className="">
          <p className="Card__Label">min temp</p>
          <p className="Card__Value">{props.minTemp}°C</p>
        </div>
        <div className="Card__Info">
          <p className="Card__Label">humidity</p>
          <p className="Card__Value">{props.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
