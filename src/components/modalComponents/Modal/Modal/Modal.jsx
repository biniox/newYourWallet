import {useContext} from 'react'

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { globalContext } from '../../../../context/GlobalStore';

import './Modal.scss';

const Modal = () => {
    const {modal, setModal} = useContext(globalContext);
    const {display, modalComponent} = modal;

    const handleClickExit = () => setModal({type: 'HIDE'});
    
    return(
        <div className="modalWrapper">
            {display && (<>
                <div onClick={handleClickExit} className="modalWrapper__container"></div>
                <div className="modalWrapper__container__window">
                    <FontAwesomeIcon onClick={handleClickExit} className="modalWrapper__container__close" icon={faWindowClose} />
                    {modalComponent}
                </div>  
        </>)} 
            
        </div>
    );
}


export default Modal;