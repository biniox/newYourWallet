import { useContext, useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import PurposeItem from '../PurposeItem/PurposeItem';
import './PurposeHistory.scss';

import { globalContext } from '../../context/GlobalStore';

const PurposeHistory = ({edit=false}) => {

    const { userPurpose } = useContext(globalContext);
    const [numberActual, setNumberActual] = useState(0);

    const handlerBookmark = (number) => {
        setNumberActual(number);
        setMappedPurpose(mappPurpose(number));

    }
    let bookmarkData =  {
        label: ["Do realizacji", "Zrobione"],
        handlerBookmark
    }

    const mappPurpose = (number=0) =>  {
        let toMappArray = number ? userPurpose.filter(item => item.money==item.moneySave) : userPurpose.filter(item => item.money!=item.moneySave);
        return toMappArray.map(item => <PurposeItem {...item} edit={edit} />); 
    }
    const [mappedPurpose, setMappedPurpose] = useState(mappPurpose());

    useEffect(() => {
        setMappedPurpose(mappPurpose(numberActual));
    }, [userPurpose])

    return (
        <div className="PurposeHistoryWrapper">
            <Bookmark {...bookmarkData} />
            {mappedPurpose}
        </div>
    )
}

export default PurposeHistory
