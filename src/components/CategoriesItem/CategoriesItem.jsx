
import {useContext} from 'react'
import { faPenSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { globalContext } from '../../context/GlobalStore';
import './CategoriesItem.scss';


const CategoriesItem = ({id, name}) => {
const {setModal} = useContext(globalContext);
    const handlerClick = () => setModal({type: "EDIT_CATEGORY", payload: {id, name}});
    return (
    <div className="CategoriesItemWrapper">       
        <span>{name}</span>
        <span className="CategoriesItemWrapper__edit" onClick={handlerClick}><FontAwesomeIcon icon={faPenSquare} /></span>
    </div>
    )
}

export default CategoriesItem;
