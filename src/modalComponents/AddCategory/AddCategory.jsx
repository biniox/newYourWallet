import {useState, useContext} from 'react'
import Select from 'react-select';
import Button from '../../components/button/Button';
import { globalContext } from './../../context/GlobalStore';
import {NotificationManager} from 'react-notifications'

import './AddCategory.scss';

const AddCategory = ({toEdit}) => {
    const {userCategory, setUserCategory,setModal} = useContext(globalContext);

    const [formData_name, setFormData_name] = useState(toEdit ? toEdit.name : "");

    const handlerName = (e) => setFormData_name(e.currentTarget.value)


    const validateData = () => formData_name;

    const handlerOnClick = e => {
        if(validateData()) {
            const payload = { name: formData_name }
            if(toEdit) {
                payload.id = toEdit.id;
                setUserCategory({type: 'EDIT', payload});
            } else setUserCategory({type: 'ADD', payload});

            setModal({type: 'HIDE'});
            NotificationManager.success('Dodano nową kategorie', 'Sukces', 1000);
        } else {
            NotificationManager.warning("Uzupełnij wszystkie pola", "Błąd", 1000);
        }
    };

    return (
        <div className="AddCategoryWrapper">
            <h2>{toEdit ? "Edytuj" : "Dodaj"} Kategorie</h2>

            <div className="AddCategoryWrapper__form">
                <label>
                    Nazwa Wydatku
                    <input type="text" placeholder="Nazwa wydatku" onChange={handlerName} value={formData_name} />  
                </label>
 
                <Button onClick={handlerOnClick}>{toEdit ? "Edytuj" : "Dodaj"}</Button>

            </div>

        </div>
    )
}

export default AddCategory
