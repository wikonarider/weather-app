import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="card-info">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="card-info">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="card-info">
              <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="100" height="100" alt="" />
            </div>
          </div>
        <div>
            <button  id="closeIcon" onClick={onClose}>close</button>
        </div>
        </div>
      </div>
    );
};
