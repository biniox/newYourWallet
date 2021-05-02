import { faEllipsisV, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useContext } from 'react';
import { globalContext } from '../../context/GlobalStore';
import Modal from '../modalComponents/Modal/Modal/Modal';
import './PurposeItem.scss';

const PurposeItem = (props) => {
    const {name, moneySave, money, edit} = props;

    const [percent, setPercent] = useState(0);
    const [colors, setColors] = useState([ "#2893bd", "#0c76a0", "#044964"]);
    const {setModal} = useContext(globalContext);

    useEffect(()=> {
    setPercent(moneySave*100/money);  
    });

    const handlerClick = () => setModal({type: "EDIT_PURPOSE", payload: props})
    return (
        <div className={edit ? "purposeItemWrapper edit" : "purposeItemWrapper"}>
                
        <div className="purposeItemWrapper__bar" 
              style={{transform: `translate(${percent}%)`,
                      backgroundColor: colors[Math.floor(Math.random()*3)]}}
        />

        <div className="purposeItemWrapper__content"  >
           <span>
                <h2 className="label">{name}</h2><h3>{moneySave} PLN</h3>
           </span>

           <span>
               <h2 className="money">
                   {money}PLN                
                   <div className="editToolbarWrapper">
                        {edit && <span className="editIcon" onClick={handlerClick}><FontAwesomeIcon icon={faPenSquare} /></span> }
                    </div>
                </h2>

           </span>
        </div>

       
    </div>
    );
}

export default PurposeItem;