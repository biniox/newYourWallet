import {useState, useContext} from 'react'
import Button from '../../components/button/Button';
import { globalContext } from './../../context/GlobalStore';
import {NotificationManager} from 'react-notifications'

import './AddBudget.scss';

const AddBudget = () => {
    const {userData, setUserData, modal, setModal} = useContext(globalContext);
    const {budget} = userData;

    const [inputState, setInputState] = useState(budget);

    const handlerOnChange = e => {
        const { value } = e.currentTarget
        value>=0 ? setInputState(value) : setInputState(0) 
    };

    const handlerOnClick = e => {
        setUserData({type: 'EDIT_BUDGET', value: inputState});
        setModal({type: 'HIDE'});
        NotificationManager.success('Zaaktualizowano Budżet', 'Sukces', 1000);
    };

    return (
        <div className="AddBudgetWrapper">
            <h2>Aktualizuj swój budżet</h2>

            <div className="AddBudgetWrapper__form">

                <input onChange={handlerOnChange}type="number" placeholder="ile" value={inputState}/> 
                <Button onClick={handlerOnClick}>Dodaj</Button>
            </div>

        </div>
    )
}

export default AddBudget
