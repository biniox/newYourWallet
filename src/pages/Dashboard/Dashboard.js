
import Chart from '../../components/chart/chart';
import { useState } from 'react';
import Plate from '../../components/plate/plate';
import Purpose from '../../components/Purpose/Purpose';
import './Dashboard.scss';

const Dashboard = () => {
    // data for Charts
    const [monthChartData, setMonthChartData] = useState({
        title: "Wydatki w posczególnych mieisącach",
        labels:['Sierpień', 'Wrzesień', 'Pazdziernik', 'Listopad', 'Grudzień'],
        data:  [10,38,12,67,8],
        type: 'Bar',
    });

    const [categoryChartData, setCategoryChartData] = useState({
        title: "Rozkład twoich wydatków w tym miesiącu",
        labels:['Sierpień', 'Wrzesień', 'Pazdziernik', 'Listopad', 'Grudzień'],
        data:  [10,38,12,67,8],
        type: 'Pie',
    });


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
                        <Chart {...monthChartData} />
                        <Chart {...categoryChartData} />
                        <Purpose/>

                    </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;