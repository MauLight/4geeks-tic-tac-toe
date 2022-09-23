import React, { useState } from 'react';
import Input from './input';

const Home = () => {

    const [input, inputState] = useState({ value: '' });

    const handleChange = (e) => {
        inputState(e.target.value)
    }

    const validateInput = (e) => {

        if (input === "") {
            alert("The input cannot be empty");
            e.preventDefault()
        } else {
            return
        }
        ;
    }
    console.log(input);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col mt-5 d-flex justify-content-center'>
                    <h1>EX vs OH!</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-3 d-flex justify-content-center'>
                    <div className="card rounded-0">
                        <img src="https://cdn.drawception.com/images/panels/2017/6-9/rtS19xOHF9-4.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-text">Choose your Name</h3>
                            <Input
                                placeholder='Fighter I'
                                id='1'
                                aria-describedby='fighter 1'
                                value={input.value}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder='Fighter II'
                                id='2'
                                aria-describedby='fighter 2'
                                value={input.value}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                </div>

            </div>
            <div className='row d-flex justify-content-center'>
                <a className="btn btn-dark w-75 rounded-0" href='/Game'  >Lets GO!</a>
            </div>
        </div>
    )
};

export default Home;