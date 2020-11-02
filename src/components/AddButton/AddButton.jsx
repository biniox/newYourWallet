import React, { useRef } from 'react';
import {faEllipsisV, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './AddButton.scss';

const AddButton = () => {

    const firstRef = useRef();
    const secondRef = useRef();
    const handleClick = e => {
        firstRef.current.classList.toggle("AddButton__btn-active");
        secondRef.current.classList.toggle("AddButton__btn-active");
    }


    return (
    <div className="AddButton">
        <div ref={firstRef}className="AddButton__btn">
            <FontAwesomeIcon icon={faMinus}/>
        </div>
        <div ref={secondRef}className="AddButton__btn">
            <FontAwesomeIcon icon={faPlus}/>
        </div>
        <div onClick={handleClick} className="AddButton__btn">
            <FontAwesomeIcon icon={faEllipsisV}/>
        </div>
    </div>  
    )
}

export default AddButton;