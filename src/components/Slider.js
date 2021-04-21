import "./Slider.css";
import React from "react";

export default function Slider(props) {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };
  return (
    <div className="Slider">
      <div className="Slider__Info">
        <p className="Slider__Title">{props.title}</p>
        <p className="Slider__Value">
          {props.value}
          {props.unit}
        </p>
      </div>
      <div className="Slider__Container">
        <input
          type="range"
          min="0"
          max={props.maxValue}
          value={props.value}
          className="Slider__Input"
          name={props.name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
