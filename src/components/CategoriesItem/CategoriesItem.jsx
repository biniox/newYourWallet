
import { faPenSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CategoriesItem.scss';


const CategoriesItem = ({id, name}) => {
    return (
    <div className="CategoriesItemWrapper">       
        <span>{name}</span>
        <span className="CategoriesItemWrapper__edit"><FontAwesomeIcon icon={faPenSquare} /></span>
    </div>
    )
}

export default CategoriesItem;
