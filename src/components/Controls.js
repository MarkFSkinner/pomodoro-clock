import React from 'react';

const Controls = props => (
  <div className="row" id="controls">
    <div className="offset-2 col-4">
      <div className="row">
        <div className="col-12">
          <h5>BREAK LENGTH</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-4 offset-sm-1 col-sm-3">
          <h3 id="break-decrease" className="clickable">-</h3>
        </div>
        <div className="col-4">
          <h3 id="break-time">{props.breakTime}</h3>
        </div>
        <div className="col-4 col-sm-3">
          <h3 id="break-increase" className="clickable">+</h3>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="row">
        <div className="col-12">
          <h5>SESSION LENGTH</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-4 offset-sm-1 col-sm-3">
          <h3 id="session-decrease" className="clickable">-</h3>
        </div>
        <div className="col-4">
          <h3 id="session-time">{props.sessionTime}</h3>
        </div>
        <div className="col-4 col-sm-3">
          <h3 id="session-increase" className="clickable">+</h3>
        </div>
      </div>
    </div>
  </div>
);


export default Controls;