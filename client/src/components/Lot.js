import React from 'react';

const Lot = ({ lot }) => {
    return (
        <div className="col-4">
            <div className="card">
                <img src={ lot.program.picture } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{ lot.program.name } - { lot.number }</h5>
                    <div className="card-text">
                        <p>Prix: { lot.price } € - Surface: { lot.area } m2 </p>
                        <p>Adresse: { lot.program.address }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lot;