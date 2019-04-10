import React from 'react';

const Reset = props => (
  <div className='row' id='reset'>
    <div className='col-12'>
      <i className="fas fa-redo clickable" onClick={props.reset}></i>
    </div>
  </div>
);


export default Reset;