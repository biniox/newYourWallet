
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import './Categories.scss';

import {useState} from 'react'


const Categories = () => {

    const [categoryList, setCategoryList] = useState([
        {
            id: 1,
            name: "Hobby"
        },
        {
            id: 2,
            name: "Sport"
        },
        {
            id: 3,
            name: "Jedzenie"
        },
        {
            id: 4,
            name: "szkoła"
        },
    ]);

    let mappCategory = categoryList.map(item => <CategoriesItem {...item} />)
    return (
        <div className="CategoriesWrapper">
                <h2>
                    Kategorie  
                    <span className="CategoriesWrapper__add">
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                </h2>
                {mappCategory}
        </div>
    )
}

export default Categories
