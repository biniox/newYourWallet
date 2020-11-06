import './ExpenseHistory.scss';

import {useState} from 'react';

import ExpenseHistoryItem from './../ExpenseHistoryItem/ExpenseHistoryItem'

const ExpenseHistory = () => {
    /* the methods, generating list of products and pagination Buttons */
     const mappExpense = (number) => expense.map((item, index) => 
                    (index<5*(number+1) && (index>=(number*5))) && <ExpenseHistoryItem {...item} /> );

    const mappButton = (activeNumber) => {
        let generatedButton = []; 
        for(let i = 0; i<Math.ceil(expense.length/5); i++) {
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
    
    const [expense, setExpense] = useState([
        {
            date: '7.11.2020',
            product: 'Bułeczki',
            category: 'Żywność',
            cost: 12.67
        },
        {
            date: '6.11.2020',
            product: 'Wódeczka',
            category: 'Żywność',
            cost: 70
        },
        {
            date: '5.11.2020',
            product: 'Komputer',
            category: 'Elektronika',
            cost: 800
        },
        {
            date: '4.11.2020',
            product: 'fajeczki',
            category: 'Używki',
            cost: 70
        },
        {
            date: '3.11.2020',
            product: 'Cyberpunk 2077',
            category: 'Gry i Rozrywka',
            cost: 199.99
        },
        {
            date: '2.11.2020',
            product: 'Bułeczki',
            category: 'Żywność',
            cost: 12.67
        },
        {
            date: '1.11.2020',
            product: 'Wódeczka',
            category: 'Żywność',
            cost: 70
        },
        {
            date: '31.10.2020',
            product: 'Komputer',
            category: 'Elektronika',
            cost: 800
        },
        {
            date: '30.10.2020',
            product: 'fajeczki',
            category: 'Używki',
            cost: 70
        },
        {
            date: '29.10.2020',
            product: 'Cyberpunk 2077',
            category: 'Gry i Rozrywka',
            cost: 199.99
        },

        {
            date: '28.10.2020',
            product: 'Bułeczki',
            category: 'Żywność',
            cost: 12.67
        },
        {
            date: '27.10.2020',
            product: 'Wódeczka',
            category: 'Żywność',
            cost: 70
        },
        {
            date: '26.10.2020',
            product: 'Komputer',
            category: 'Elektronika',
            cost: 800
        },
        {
            date: '25.10.2020',
            product: 'fajeczki',
            category: 'Używki',
            cost: 70
        },
        {
            date: '24.10.2020',
            product: 'Cyberpunk 2077',
            category: 'Gry i Rozrywka',
            cost: 199.99
        },
        {
            date: '23.10.2020',
            product: 'kiełbasa',
            category: 'Gry i Rozrywka',
            cost: 12.99
        },
    ]);
    const [mappedItems, setMappedItems] = useState(mappExpense(0));
    const [mappedButtons, setMappedButtons] = useState(mappButton(0))










    return (
        <div className="ExpenseHistoryWrapper">
            <div className="ExpenseHistoryWrapper__form">
                    <input type="date"/>
                    <p> - </p>
                    <input type="date"/>     

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
                label: true
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
