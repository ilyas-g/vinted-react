import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Card({ imgSrc, name, to }) {
    return (
        <div className="card">
            <img src={imgSrc} alt={name} />
            <div className='cardInfos'>
                <h2 className='cardTitle'><Link to={to}>{name}</Link></h2>
            </div>
        </div>
    );
}
