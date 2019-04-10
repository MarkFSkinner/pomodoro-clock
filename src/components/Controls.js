import React from 'react';

const Controls = props => (
  <div className="row" id="controls">
    <div className="offset-1 col-5 offset-sm-3 col-sm-3">
      <div className="row">
        <div className="col-12">
          <h5>Break Time</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <i className="fas fa-minus break-decrease clickable control-element" onClick={props.controlsClick}></i>
          <h3 id="break-time" className="control-element">{props.breakTime}</h3>
          <i className="fas fa-plus break-increase clickable control-element" onClick={props.controlsClick}></i>
        </div>
      </div>
    </div>
    <div className="col-5 col-sm-3">
      <div className="row">
        <div className="col-12">
          <h5>Session Time</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <i className="fas fa-minus session-decrease clickable control-element" onClick={props.controlsClick}></i>
          <h3 id="session-time" className="control-element">{props.sessionTime}</h3>
          <i className="fas fa-plus session-increase clickable control-element" onClick={props.controlsClick}></i>
        </div>
      </div>
    </div>
  </div>
);


export default Controls;