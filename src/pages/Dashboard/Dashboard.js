
import Chart from '../../components/chart/chart';
import Modal from '../../components/modalComponents/Modal/Modal/Modal';
import Plate from '../../components/plate/plate';
import Purpose from '../../components/Purpose/Purpose';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <>
        <div className="dashboardWrapper">
            <Plate value="70PLN" description="Środków do końca miesiąca" />
            <Plate value="60PLN" description="Wydane od początku miesiąca" />
            <Plate value="700PLN" description="Oszczędzono w poprzednim miesiącu" />
            
        </div>
        <div className="dashboardWrapper">
            <div className="dashboardWrapper__statistic">
                <h2>Statystyki</h2>
                    <div className="dashboardWrapper__container">
                        <Chart title="Wydatki w posczególnych mieisącach"/>
                        <Chart title="Rozkład twoich wydatków w tym miesiącu"/>
                        <Purpose/>

                    </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;