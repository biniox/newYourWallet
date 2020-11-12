import {useState, useContext} from 'react'
import Select from 'react-select';
import Button from '../../components/button/Button';
import { globalContext } from './../../context/GlobalStore';
import {NotificationManager} from 'react-notifications'

import './AddExpense.scss';

const AddExpense = () => {
    const {userCategory, setUserCategory, userExpenses, setUserExpenses,setModal} = useContext(globalContext);

    const [formData_date, setFormData_date] = useState("2020-07-22");
    const [formData_name, setFormData_name] = useState("");
    const [formData_category, setFormData_category] = useState(null);
    const [formData_cost, setFormData_cost] = useState(null);

    const [selectOptions, setSelectOptions] = useState(
        userCategory.map(item => ({label: item.name, value: item.id}))
    )


    const handlerDate = (e) => setFormData_date(e.currentTarget.value)
    const handlerName = (e) => setFormData_name(e.currentTarget.value)
    const handlerCost = (e) => setFormData_cost(e.currentTarget.value*1)

    const validateData = () => formData_date && formData_name && formData_category && formData_cost;

    const handlerOnClick = e => {
        if(validateData()) {
            const payload = {
                date: formData_date,
                name: formData_name,
                category: formData_category.value,
                cost: formData_cost,
            }
            setUserExpenses({type: 'ADD', payload});
            setModal({type: 'HIDE'});
            console.log(userExpenses);
            NotificationManager.success('Dodano nowy wydatek', 'Sukces', 1000);
        } else {
            NotificationManager.warning("Uzupełnij wszystkie pola", "Błąd", 1000);
        }
    };

    return (
        <div className="AddExpenseWrapper">
            <h2>Dodaj Wydatek</h2>

            <div className="AddExpenseWrapper__form">
                <label>
                  Data
                  <input type="date" onChange={handlerDate} value={formData_date}/>  
                </label>

                <label>
                    Nazwa Wydatku
                    <input type="text" placeholder="Nazwa wydatku" onChange={handlerName} value={formData_name} />  
                </label>
                
                <label>
                    Kategoria
                    <Select 
                        options={selectOptions}
                        onChange={setFormData_category}
                        className="AddExpenseWrapper__form--category"
                        placeholder="Wybierz kategorie"
                        noOptionsMessage={() => "Nie znaleziono"}
                        isSearchable
                    />                     
                </label>
                
                <label>
                    Kwota
                  <input onChange={handlerCost}type="number" value={formData_cost} placeholder="kwota" min="0" />
                </label>
 
                <Button onClick={handlerOnClick}>Dodaj</Button>

            </div>

        </div>
    )
}

export default AddExpense
