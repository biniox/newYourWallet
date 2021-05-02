import './ExpenseHistory.scss';

import {useState, useContext, useEffect} from 'react';

import ExpenseHistoryItem from './../ExpenseHistoryItem/ExpenseHistoryItem';
import Pagination from './../pagination/pagination';
import { globalContext } from '../../context/GlobalStore';
import DatePicker from '../DatePicker/DatePicker';
import RadioBox from './../radioBox/RadioBox';

const ExpenseHistory = ({edit}) => {

    const now = new Date();
    const nowMinusYear = new Date();
    nowMinusYear.setMilliseconds(now.getMilliseconds() - 365*24*3600000);

    const {userExpenses, userCategory} = useContext(globalContext);
    const [activeNumber, setActiveNumber] = useState(0);


    const [dateTo, setDateTo] = useState(now.toLocaleDateString('fr-CA'));
    const [dateFrom, setDateFrom] = useState(nowMinusYear.toLocaleDateString('fr-CA'));

    const [type, setType] = useState(0);
    
    const filterExpense = () => userExpenses.filter(item => {
        let itemDateArr = item.date.split(".");

        let itemDateParsed = Date.parse(itemDateArr[1] + "." + itemDateArr[0] + "." + itemDateArr[2]);
        let dateFromParsed = Date.parse(dateFrom) - 3600000;
        let dateToParsed = Date.parse(dateTo);

        return dateToParsed>=itemDateParsed && dateFromParsed<=itemDateParsed;
    });

    const [filteredItems, setFilteredItems] = useState(filterExpense());

     const mappExpense = (number) => {
         if(type) {
                let tempArr = [];
                userCategory.forEach((itemCategory) => {
                    let money = 0;
                    let products = "";
                    let counter = 0;
                    filteredItems.forEach(itemExpense => {
                        if(itemExpense.category == itemCategory.id) {
                            if(counter!=5) {
                                products += itemExpense.product + ", ";
                                counter++;
                            } 
                            money += itemExpense.cost;
                        }
                    });
                    if(counter == 5) products += "...";

                    if(money>0)
                        tempArr.push({
                            date: dateFrom + " - " + dateTo,
                            product: products,
                            category: itemCategory.name,
                            cost: money.toFixed(2)
                        });
                });
                return tempArr.map((item, index) => 
                (index<5*(number+1) && (index>=(number*5))) && <ExpenseHistoryItem {...item} edit={edit} /> );

         } else {
             return filteredItems.map((item, index) => 
             (index<5*(number+1) && (index>=(number*5))) && <ExpenseHistoryItem {...item} edit={edit} /> );
         }
     }



    
    useEffect(() => {
        setFilteredItems(filterExpense());
        setActiveNumber(0);    
    }, [dateFrom, dateTo]);


    useEffect(() => {
        setMappedItems(mappExpense(activeNumber)); 
    }, [filteredItems, activeNumber, type]);

    const [mappedItems, setMappedItems] = useState(mappExpense(0));

    const handlerClick = (e) => setActiveNumber(e);
    const handlerRadio = (e) => setType(e);
    const handlerDateFrom = (e) => setDateFrom(e);
    const handlerDateTo = (e) => setDateTo(e);




    return (
        <div className="ExpenseHistoryWrapper">
            <div className="ExpenseHistoryWrapper__form">
                    <DatePicker
                        dateFrom={dateFrom} 
                        dateTo={dateTo}
                        handlerFrom={handlerDateFrom}
                        handlerTo={handlerDateTo}
                    />

                    <RadioBox arr={["Szczegóły", "Kategorie"]} click={handlerRadio} />
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
                <Pagination
                    numOfButtons={!type ? Math.ceil(filteredItems.length/5) : Math.ceil(userCategory.length/5)} 
                    activeNumber={activeNumber}
                    click={handlerClick}
                />
            </div>
            




            </div>
    </div>
    )
}

export default ExpenseHistory
