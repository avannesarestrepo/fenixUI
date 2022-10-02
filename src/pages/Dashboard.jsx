import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return(
        <div className="container-fluid">
            <h1 className="text text-info text-center mt-3 ">Welcome Fenix</h1>
            <Link to="/p" className="btn btn-info justify-content-center" >404</Link>
        </div>
    )
}

export default Inicio;