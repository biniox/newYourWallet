import { useState } from 'react';
import PurposeItem from '../PurposeItem/PurposeItem';
import './Purpose.scss';


const Purpose = () => {
    const [purpose, setPurpose] = useState([ {value: "KON", moneySave: "70", money: 80 },{value: "Mydło", moneySave: 60, money: 80 },{value: "Waga", moneySave: 20, money: 100 }]);
    let items = purpose.map(item => <PurposeItem {...item} /> );


    return (
        <div className="purposeWrapper">
            <h2>Moje Cele</h2>
            {items}

        </div>
    )
}

export default Purpose;