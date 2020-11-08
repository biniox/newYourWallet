import Bookmark from '../Bookmark/Bookmark';
import PurposeItem from '../PurposeItem/PurposeItem';
import './PurposeHistory.scss';

import {useState} from 'react';

const PurposeHistory = ({edit=false}) => {

    const handlerBookmark = (number) => {
        setMappedPurpose(mappPurpose(number));

    }
    let bookmarkData =  {
        label: ["Do realizacji", "Zrobione"],
        handlerBookmark
    }

    const mappPurpose = (number=0) =>  {
        let toMappArray = number ? purpose.filter(item => item.money==item.moneySave) : purpose.filter(item => item.money!=item.moneySave);
        return toMappArray.map(item => <PurposeItem {...item} edit={edit} />); 
    }


    const [purpose, setPurpose] = useState([
        {
            value: "Koń",
            moneySave: 20,
            money: 70,
        },
        {
            value: "Wódka",
            moneySave: 20,
            money: 70,
        },
        {
            value: "fajki",
            moneySave: 20,
            money: 20,
        },
        {
            value: "cos tam",
            moneySave: 20,
            money: 70,
        },
        {
            value: "Koń",
            moneySave: 700,
            money: 700,
        },
    ])
    const [mappedPurpose, setMappedPurpose] = useState(mappPurpose());

    return (
        <div className="PurposeHistoryWrapper">
            <Bookmark {...bookmarkData} />
            {mappedPurpose}
        </div>
    )
}

export default PurposeHistory
