import './pagination.scss';

import { useState, useEffect } from 'react';

const Pagination = ({numOfButtons, activeNumber, click}) => {

    const mappButton = () => {
        let generatedButton = []; 
        for(let i = 0; i<numOfButtons; i++) {
            generatedButton.push(
                <button 
                    value={i} 
                    className={i==activeNumber ? "active" : ""} 
                    onClick={handlerClick}
                >
                    {i+1}
                </button>
            );
        }
        return generatedButton;
    }



    const handlerClick = (e) => click(e.target.value*1);
    const [mappedButtons, setMappedButtons] = useState(mappButton());

    useEffect(() => {
        setMappedButtons(mappButton());
    }, [numOfButtons, activeNumber])


    return (
        <div className="PaginationWrapper">
            {mappedButtons}
        </div>
    )
}

export default Pagination;
