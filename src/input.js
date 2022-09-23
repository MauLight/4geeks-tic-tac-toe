import React from 'react';

const Input = (props) => {

    return (
        <>
            <input
                type="text"
                className="form-control rounded-0"
                id={props.id}
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeholder}
            ></input>

        </>

    )
};

export default Input;