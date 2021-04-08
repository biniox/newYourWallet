import {useContext} from 'react'
import ExpenseHistory from '../../components/ExpenseHistory/ExpenseHistory';
import Plate from '../../components/plate/plate';
import PurposeHistory from '../../components/PurposeHistory/PurposeHistory';
import { globalContext } from '../../context/GlobalStore';
import './Details.scss';

const Details = () => {

    const {userData: {sumOfSavings, sumOfExpense}} = useContext(globalContext)
    return (
        <div className="detailsWrapper">
            <Plate value={sumOfSavings} description="W sumie zaosczędzono" />
            <Plate value={sumOfExpense} description="W sumie wydano" />
            <h2>Historia wydatków</h2>
            <ExpenseHistory/>
            <h2>Historia Celi</h2>
            <PurposeHistory/>
        </div>
    );
}
export default Details;