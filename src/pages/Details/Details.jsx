import ExpenseHistory from '../../components/ExpenseHistory/ExpenseHistory';
import Plate from '../../components/plate/plate';
import PurposeHistory from '../../components/PurposeHistory/PurposeHistory';
import './Details.scss';

const Details = () => {
    return (
        <div className="detailsWrapper">
            <Plate value="800PLN" description="W sumie zaosczędzono" />
            <Plate value="797PLN" description="W sumie wydano" />
            <h2>Historia wydatków</h2>
            <ExpenseHistory/>
            <h2>Historia Celi</h2>
            <PurposeHistory/>
        </div>
    );
}
export default Details;