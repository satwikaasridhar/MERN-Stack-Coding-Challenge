import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';
import axios from 'axios';

function App() {
    const [selectedMonth, setSelectedMonth] = useState('March');
    const [searchText, setSearchText] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [statistics, setStatistics] = useState({});
    const [barChartData, setBarChartData] = useState([]);

    useEffect(() => {
        // Fetch transactions for the selected month and search text
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(/api/transactions ? month = ${ selectedMonth } & searchText=${ searchText });
                setTransactions(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        // Fetch statistics for the selected month
        const fetchStatistics = async () => {
            try {
                const response = await axios.get(/api/statistics ? month = ${ selectedMonth });
                setStatistics(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        // Fetch bar chart data for the selected month
        const fetchBarChartData = async () => {
            try {
                const response = await axios.get(/api/bar - chart ? month = ${ selectedMonth });
                setBarChartData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        // Call all three APIs on initial load and when selected month or search text changes
        fetchTransactions();
        fetchStatistics();
        fetchBarChartData();
    }, [selectedMonth, searchText]);

    return (
        <div>
            <h1>Transactions Dashboard</h1>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                {/* Options for months */}
            </select>
            <TransactionsTable
                transactions={transactions}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <TransactionsStatistics statistics={statistics} />
            <TransactionsBarChart barChartData={barChartData} />
        </div>
    );
}

export default App;