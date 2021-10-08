import React from 'react'
import styled from 'styled-components'
import './statuscard.css'

const Status_car = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 0.5s ease 0s;
    margin-bottom: 30px;

    ::before {
        content: '';
        width: 100%;
        padding-top: 100%;
        border-radius: 50%;
        background-image: linear-gradient(
            to top right,
            var(--main-color),
            var(--second-color)
        );
        position: absolute;
        left: -50%;
        top: 0;
        transform: scale(0);
        transition: transform 0.8s ease 0s;
    }

    &:hover::before{
        transform: scale(3);
    }

    &:hover{
        color: var(--txt-white);
    } 
`;

const Status_car__icon = styled.div`
    width: 30%;
    height: 100%;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const Status_car__info = styled.div`
    flex-grow: 1;
    text-align: center;
    z-index: 1;
    text-transform: capitalize;
`;

const H4 = styled.h4`
    font-size: 2.5rem;
    margin-bottom: 10px;
`;

const StatusCard = props => {
    return (
        // <div className='status-card'>
        //     <div className="status-card__icon">
        //         <i className={props.icon}></i>
        //     </div>
        //     <div className="status-card__info">
        //         <h4>{props.count}</h4>
        //         <span>{props.title}</span>
        //     </div>
        // </div>
        <Status_car>
            <Status_car__icon>
                <i className={props.icon}></i>
            </Status_car__icon>
            <Status_car__info>
                <H4>{props.count}</H4>
                <p>{props.title}</p>
            </Status_car__info>
        </Status_car>
    )
}

export default StatusCard
