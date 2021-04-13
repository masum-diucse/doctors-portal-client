import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="container">
            <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 ">
                <h1 style={{color:'#3a4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt in incidunt harum dolor quos nemo.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-8 d-none d-md-block">
                <img className="img-fluid" src={chair} alt=""/>
            </div>
        </main>
        </div>
    );
};

export default HeaderMain;