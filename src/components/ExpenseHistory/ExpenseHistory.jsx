import './ExpenseHistory.scss';

import {useState, useContext} from 'react';

import ExpenseHistoryItem from './../ExpenseHistoryItem/ExpenseHistoryItem'
import { globalContext } from '../../context/GlobalStore';

const ExpenseHistory = ({edit}) => {

    const now = new Date();
    const nowMinusYear = new Date();
    nowMinusYear.setMilliseconds(now.getMilliseconds() - 365*24*3600000);

    const {userExpenses, setUserExpenses} = useContext(globalContext);
    const [listOfExpense, setListOfExpense] = useState(userExpenses);


    const [dateTo, setDateTo] = useState(now.toLocaleDateString('fr-CA'));
    const [dateFrom, setDateFrom] = useState(nowMinusYear.toLocaleDateString('fr-CA'));

    const [type, setType] = useState(1);
    


    const filterExpense = e => e.filter(item => {

        let itemDateParsed = Date.parse(item.date);
        let dateFromParsed = Date.parse(dateFrom);
        let dateToParsed = Date.parse(dateTo);

        // return dateToParsed>=itemDateParsed;
        return true;
    });

    /* the methods, generating list of products and pagination Buttons */
     const mappExpense = (number) => filterExpense(userExpenses).map((item, index) => 
                    (index<5*(number+1) && (index>=(number*5))) && <ExpenseHistoryItem {...item} edit={edit} /> );

    const mappButton = (activeNumber) => {
        let generatedButton = []; 
        for(let i = 0; i<Math.ceil(filterExpense(userExpenses).length/5); i++) {
            generatedButton.push(
                <button 
                    value={i} 
                    className={activeNumber==i ? "active" : ""} 
                    onClick={handlerClick}
                >
                    {i+1}
                </button>
            );
        }
        return generatedButton;
    }

    const handlerClick = (e) => { 
        setMappedItems(mappExpense(e.target.value*1));
        setMappedButtons(mappButton(e.target.value*1));
    }

    const handlerDateFrom = (e) => setDateFrom(e.target.value);
    const handlerDateTo = (e) => setDateTo(e.target.value);

    const [mappedItems, setMappedItems] = useState(mappExpense(0));
    const [mappedButtons, setMappedButtons] = useState(mappButton(0))

    return (
        <div className="ExpenseHistoryWrapper">
            <div className="ExpenseHistoryWrapper__form">
                    <input type="date" value={dateFrom} onChange={handlerDateFrom} />
                    <p> - </p>
                    <input type="date" value={dateTo} onChange={handlerDateTo}/>     

                    <input type="radio" name="History"/>
                    <label>Szczegóły</label>

                    <input type="radio" name="History"/>
                    <label>Kategorie</label>
            </div>
            <div className="ExpenseHistoryWrapper__table">

            <ExpenseHistoryItem {...{
                date: "Data", 
                product: "Produkt", 
                category: "Kategoria", 
                cost: "Kwota",
                label: true,
                edit: edit
            }} />

            {mappedItems}

            <div className="ExpenseHistoryWrapper__table-paging">
            {mappedButtons}
            </div>





            </div>
    </div>
    )
}

export default ExpenseHistory
