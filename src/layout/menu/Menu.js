import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChevronCircleLeft, faChevronCircleRight, faInfoCircle, faTasks } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import { useState, useRef } from 'react';

import defaultIMG from './../../assets/img/defaultIMG.jpg'
import './Menu.scss';

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


            <NavLink to='/dashboard'>
            <li>
                <FontAwesomeIcon icon={faChartLine} />
                <span>Dashboard</span>
            </li>
            </NavLink>

            <NavLink to='/details'>
            <li>
                <FontAwesomeIcon icon={faInfoCircle} />
                <span>Szczegóły</span>
            </li>
            </NavLink>

            <NavLink to='/management'>
            <li>
                <FontAwesomeIcon icon={faTasks} />
                <span>Tryb zarządzania</span>
            </li>
            </NavLink>

        </ul>
    </div>

    <div onClick={handlerClick} className="Menu__wrapper_toggle" >
        <FontAwesomeIcon icon={icon ? faChevronCircleLeft : faChevronCircleRight} />
    </div>
</div>
);

}

export default Menu;
