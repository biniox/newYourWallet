import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss';

const Modal = () => {

    return(
        <div className="modalWrapper">
            <div className="modalWrapper__window">
                <FontAwesomeIcon className="modalWrapper__close" icon={faWindowClose} />
                <h2>Modal</h2>
            </div>
        </div>
    );
}


export default Modal;