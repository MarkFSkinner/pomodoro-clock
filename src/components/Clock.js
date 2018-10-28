import React from 'react';

const Clock = props => (
  <div className="row">
    <div className="col-12">
      <div className="circle clickable">
        <div className="row">
          <div className="col-12">
            <h1 id="status" className="countdown-data">SESSION</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 id="current-time" className="countdown-data">{props.currentTime}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Clock;