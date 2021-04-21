import "./Slider.css";
import React from "react";

export default function Slider(props) {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };
  return (
    <div className="Slider">
      <div className="Slider__info">
        <p className="Slider__title">{props.title}</p>
        <p className="Slider__value">
          {props.value}
          {props.unit}
        </p>
      </div>
      <div className="Slider__container">
        <input
          type="range"
          min="0"
          max={props.maxValue}
          value={props.value}
          className="Slider__input"
          name={props.name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
