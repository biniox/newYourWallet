import React from 'react'

import './ExpenseHistoryItem.scss';

const ExoenseHistoryItem = ({date, product, category, cost, label}) => {

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

    </div>
    )
}

export default ExoenseHistoryItem;
