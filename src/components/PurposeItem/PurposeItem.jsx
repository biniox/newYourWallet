import { useEffect, useState } from 'react';
import Modal from '../modalComponents/Modal/Modal/Modal';
import './PurposeItem.scss';

const PurposeItem = ({value, moneySave, money}) => {
    const [percent, setPercent] = useState(0);
    const [colors, setColors] = useState([ "#2893bd", "#0c76a0", "#044964"]);

useEffect(()=> {
 setPercent(moneySave*100/money);  
})
    return (
        <div className="purposeItemWrapper">
                
        <div className="purposeItemWrapper__bar" 
              style={{transform: `translate(${percent}%)`,
                      backgroundColor: colors[Math.floor(Math.random()*3)]}}
        />
        <div className="purposeItemWrapper__content"  >
           <span>
                <h2 className="label">{value}</h2><h3>{moneySave} PLN</h3>
           </span>

           <span>
               <h2>{money}PLN</h2>
           </span>
        </div>

       
    </div>
    );
}

export default PurposeItem;