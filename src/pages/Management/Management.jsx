import ExpenseHistory from '../../components/ExpenseHistory/ExpenseHistory';
import Plate from '../../components/plate/plate';
import PurposeHistory from '../../components/PurposeHistory/PurposeHistory';
import Categories from './../../components/Categories/Categories'
import './Management.scss';

const Management = () => {
    return (
        <div className="managementWrapper">
            <div className="managementWrapper__Edit">
                <Plate value="800PLN" description="W sumie zaosczędzono" edit />
                <Plate value="797PLN" description="W sumie wydano" edit />
                <h2>Historia Celi</h2>
                <Categories />
                <PurposeHistory edit />
                <ExpenseHistory edit />
                
            </div>

        </div>
    );
}
export default Management;