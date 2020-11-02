
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => (
    <div className="Header">
        <span>
            APKA
        </span>
        <span>
            <FontAwesomeIcon icon={faPowerOff} />
        </span>
    </div>
)

export default Header;