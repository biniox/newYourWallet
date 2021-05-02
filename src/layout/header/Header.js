
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => (
    <div className="Header">
        <div className="Header__left">
            APKA
        </div>
        <div className="Header__right">
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faPowerOff} />
        </div>
    </div>
)

export default Header;