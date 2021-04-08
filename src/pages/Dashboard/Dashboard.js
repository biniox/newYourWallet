
import Chart from '../../components/chart/chart';
import { useState, useContext } from 'react';
import Plate from '../../components/plate/plate';
import Purpose from '../../components/Purpose/Purpose';

import { globalContext } from '../../context/GlobalStore';

import './Dashboard.scss';




const Dashboard = () => {

    const {userData : {actualBudget, currentExpense, lastMonthSavings }, setUserData} = useContext(globalContext);
    
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
            <div className="dashboardWrapper__plate">
                <Plate value={actualBudget} description="Środków do końca miesiąca" />
            </div>
            <div className="dashboardWrapper__plate">
                <Plate value={currentExpense} description="Wydane od początku miesiąca" />
            </div>
            <div className="dashboardWrapper__plate">
                <Plate value={lastMonthSavings} description="Oszczędzono w poprzednim miesiącu" />
            </div>
            
            
            
            <h2>Statystyki</h2>
            <Chart {...monthChartData} />
            <Chart {...categoryChartData} />
            <Purpose/>

        </div>
        </>
    );
}

export default Dashboard;