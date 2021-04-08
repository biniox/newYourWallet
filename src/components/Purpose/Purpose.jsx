import { useState, useContext } from 'react';
import { globalContext } from '../../context/GlobalStore';
import PurposeItem from '../PurposeItem/PurposeItem';
import './Purpose.scss';


const Purpose = () => {
    const {userPurpose, setUserPurpose} = useContext(globalContext);
    const notEnd = userPurpose.filter(item => item.money>item.moneySave);
    let items = notEnd.map(item => <PurposeItem {...item} /> );


    return (
        <div className="purposeWrapper">
            <h2>Moje Cele</h2>
            {items}

        </div>
    )
}

export default Purpose;