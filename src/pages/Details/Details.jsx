import ExpenseHistory from '../../components/ExpenseHistory/ExpenseHistory';
import Plate from '../../components/plate/plate';
import PurposeHistory from '../../components/PurposeHistory/PurposeHistory';
import './Details.scss';

const Details = () => {
    return (
        <div className="detailsWrapper">
            <div className="detailsWrapper__plates">
                <Plate value="800PLN" description="W sumie zaosczędzono" />
                <Plate value="797PLN" description="W sumie wydano" />
            </div>
            <div className="detailsWrapper__History-Expense">
                <h2>Historia wydatków</h2>
                <ExpenseHistory/>
                
            </div>
            <div className="detailsWrapper__History-Purpose">
                <h2>Historia Celi</h2>
                <PurposeHistory/>
            </div>
        </div>
    );
}
export default Details;