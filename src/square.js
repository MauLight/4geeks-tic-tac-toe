import React from 'react';

const Square = (props) => {

    return (
      <button className="btn btn-dark square rounded-0 m-1" onClick={props.onCLick}>
        {props.value}
      </button>
    );
  };

  export default Square;