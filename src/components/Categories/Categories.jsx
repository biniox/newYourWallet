
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import './Categories.scss';

import {useState, useContext} from 'react'
import { globalContext } from '../../context/GlobalStore';


const Categories = ({edit}) => {

    const {userCategory, setModal } = useContext(globalContext);

    const handlerClick = () => setModal({type: "ADD_CATEGORY"});

    let mappCategory = userCategory.map(item => <CategoriesItem {...item} edit/>)
    return (
        <div className="CategoriesWrapper">
                <h2>
                    Kategorie  
                    <span className="CategoriesWrapper__add" onClick={handlerClick}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                </h2>
                {mappCategory}
        </div>
    )
}

export default Categories
