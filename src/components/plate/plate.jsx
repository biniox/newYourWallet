import { faPenSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './plate.scss';

const Plate = ({value, description, edit}) => (            
<div className="plateWrapper">
    <span>{value}</span>
    <span>{description}</span>

    {edit && (<div className="plateWrapper__edit">
        <FontAwesomeIcon icon={faPenSquare} />
    </div>)}
</div>);

export default Plate;