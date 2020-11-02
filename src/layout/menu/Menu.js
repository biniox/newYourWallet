import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChevronCircleLeft, faChevronCircleRight, faInfoCircle, faTasks } from '@fortawesome/free-solid-svg-icons'

import defaultIMG from './../../assets/img/defaultIMG.jpg'
import './Menu.scss';
import { useState, useRef } from 'react';

const Menu = () => {
    const [icon, setIcon] = useState(true);
    let ref = useRef();
    let handlerClick = () => {
        setIcon(prev => !prev);
        ref.current.classList.toggle("Menu__wrapper-mini");
        

    }
    return (

<div className="Menu__wrapper" ref={ref}>

    <div className="Menu__wrapper_profil">
    <img src={defaultIMG} alt="Zdjęcie profilowe"/>
        <span>Jarosław Bińczyk</span>
        <span>Poland</span>
    </div>
    <div className="Menu__wrapper_menu">
        <ul>
            <li>
                <FontAwesomeIcon icon={faChartLine} />
                <a href="">Dashboard</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faInfoCircle} />
                <a href="">Szczegóły</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faTasks} />
                <a href="">Tryb zarządzania</a>
            </li>
            <li>
                
            </li>
        </ul>
    </div>

    <div onClick={handlerClick} className="Menu__wrapper_toggle" >
        <FontAwesomeIcon icon={icon ? faChevronCircleLeft : faChevronCircleRight} />
    </div>
</div>
);

}

export default Menu;
