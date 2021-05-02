import {useState, useContext} from 'react'
import Select from 'react-select';
import Button from '../../components/button/Button';
import { globalContext } from './../../context/GlobalStore';
import {NotificationManager} from 'react-notifications'

import './AddPurpose.scss';

const AddPurpose = ({toEdit}) => {
    const {setUserPurpose, setModal} = useContext(globalContext);

    const [formData_date, setFormData_date] = useState("2020-07-22");
    const [formData_name, setFormData_name] = useState(toEdit.name);
    const [formData_money, setFormData_money] = useState(toEdit.money);
    const [formData_moneySave, setFormData_moneySave] = useState(toEdit.moneySave);


    const handlerName = (e) => setFormData_name(e.currentTarget.value);
    const handlerMoney = (e) => setFormData_money(e.currentTarget.value*1);
    const handlerMoneySave = (e) => setFormData_moneySave(e.currentTarget.value*1);

    const validateData = () => formData_name && formData_money && formData_moneySave;

    const handlerOnClick = e => {
        if(validateData()) {
            const payload = {
                id: toEdit.id,
                name: formData_name,
                money: formData_money,
                moneySave: formData_moneySave
            }
            if(toEdit) {
                setUserPurpose({type: 'EDIT', payload});
                NotificationManager.success('Zaaktualizowano cel', 'Sukces', 1000);
            } else {
                setUserPurpose({type: 'ADD', payload});
                NotificationManager.success('Dodano nowy Cel', 'Sukces', 1000);
            }

            setModal({type: 'HIDE'});
        } else {
            NotificationManager.warning("Uzupełnij wszystkie pola", "Błąd", 1000);
        }
    };

    return (
        <div className="AddPurposeWrapper">
            <h2>{toEdit ? "Edytuj" : "Dodaj"} Wydatek</h2>

            <div className="AddPurposeWrapper__form">


                <label>
                    Cel
                    <input type="text" placeholder="Nazwa wydatku" onChange={handlerName} value={formData_name} />  
                </label>

                <label>
                    Kwota docelowa
                  <input onChange={handlerMoney} type="number" value={formData_money} placeholder="kwota docelowa" min="0" />
                </label>


                <label>
                    Uzbierano:
                  <input onChange={handlerMoneySave} type="number" value={formData_moneySave} placeholder="Uzbierano docelowa" min="0" max={formData_money} />
                </label>
 
                <Button onClick={handlerOnClick}>{toEdit ? "Edytuj" : "Dodaj"}</Button>

            </div>

        </div>
    )
}

export default AddPurpose
