
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboardWrapper">
            <div className="dashboardWrapper__info">
                <span>70PLN</span>
                <span>Środków do końca miesiąca</span>
            </div>
            <div className="dashboardWrapper__info">
                <span>60PLN</span>
                <span>Wydane od początku miesiąca</span>
            </div>
            <div className="dashboardWrapper__info">
                <span>700PLN</span>
                <span>Oszczędzono w poprzednim miesiącu</span>
            </div>
        </div>
    );
}

export default Dashboard;