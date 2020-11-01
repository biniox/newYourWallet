import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faInfoCircle, faTasks, faBars } from '@fortawesome/free-solid-svg-icons'

import defaultIMG from './../../assets/img/defaultIMG.jpg'
import './Menu.scss';

const Menu = () => (
<div className="Menu__wrapper">
    <div className="Menu__wrapper_icon">
        <FontAwesomeIcon icon={faBars} />
    </div>
    <div className="Menu__wrapper_profil">
    <img src={defaultIMG} alt="Zdjęcie profilowe"/>
        <span>Jarosław Bińczyk</span>
        <span>Poland</span>
    </div>
    <div className="Menu__wrapper_menu">
        <ul>
            <li>
                <FontAwesomeIcon icon={faChartLine} />
                Dashboard
            </li>
            <li>
                <FontAwesomeIcon icon={faInfoCircle} />
                Szczegóły
            </li>
            <li>
                <FontAwesomeIcon icon={faTasks} />
                Tryb zarządzania
            </li>
        </ul>
    </div>
</div>
);

export default Menu;
