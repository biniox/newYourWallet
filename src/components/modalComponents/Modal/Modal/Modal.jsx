import {useContext} from 'react'

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modalContext } from '../../../../context/modalStore';
import './Modal.scss';

const Modal = () => {
    const {modal, setModal} = useContext(modalContext);

    const handleClickExit = () => setModal(false);
    
    return(
        <div className="modalWrapper">
            {modal && (<>
                <div onClick={handleClickExit} className="modalWrapper__container"></div>
                <div className="modalWrapper__container__window">
                    <FontAwesomeIcon onClick={handleClickExit} className="modalWrapper__container__close" icon={faWindowClose} />
                    <h2>Modal</h2>
                </div>  
        </>)} 
            
        </div>
    );
}


export default Modal;