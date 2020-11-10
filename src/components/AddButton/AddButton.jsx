import React, { useRef, useContext } from 'react';
import {faEllipsisV, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './AddButton.scss';

import { globalContext } from './../../context/GlobalStore';

const AddButton = () => {

    const {modal, setModal} = useContext(globalContext);

    const firstRef = useRef();
    const secondRef = useRef();
    const handleClick = e => {
        firstRef.current.classList.toggle("AddButton__btn-active");
        secondRef.current.classList.toggle("AddButton__btn-active");
    }

    const handleClickExpense = () => setModal({type: 'ADD_EXPENSE'});
    const handleClickBudget = () => setModal({type: 'ADD_BUDGET'});

    return (
    <div className="AddButton">
        <div onClick={handleClickExpense} ref={firstRef}className="AddButton__btn">
            <FontAwesomeIcon icon={faMinus}/>
        </div>
        <div onClick={handleClickBudget} ref={secondRef}className="AddButton__btn">
            <FontAwesomeIcon icon={faPlus}/>
        </div>
        <div onClick={handleClick} className="AddButton__btn">
            <FontAwesomeIcon icon={faEllipsisV}/>
        </div>
    </div>  
    )
}

export default AddButton;