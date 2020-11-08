import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import './ExpenseHistoryItem.scss';

const ExoenseHistoryItem = ({date, product, category, cost, label, edit}) => {

    const classLabel = label ?  "ExpenseHistoryItem-item label" : "ExpenseHistoryItem-item"
    return (
    <div className="ExpenseHistoryItem">
        <div className={classLabel}>
            {date}
        </div>
        <div className={classLabel}>
            {product}
        </div>
        <div className={classLabel}>
            {category}
        </div>
        <div className={classLabel + (!label ? ' price' : '')}>
            {cost}PLN
        </div>
        
        {
        edit &&  (
            <div className={classLabel  + (!label ? ' action' : '')}>
                {label ? "Akcja" : <FontAwesomeIcon icon={faPenSquare}/>}
             </div>
             )
        }



    </div>
    )
}

export default ExoenseHistoryItem;
