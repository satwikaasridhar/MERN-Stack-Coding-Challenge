const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
const initializeDatabaseRoute = require('./routes/initializeDatabase');
const transactionsRoute = require('./routes/transactions');
const statisticsRoute = require('./routes/statistics');
const barChartRoute = require('./routes/barChart');
const pieChartRoute = require('./routes/pieChart');
const combinedResponseRoute = require('./routes/combinedResponse');

app.use('/api/initialize-database', initializeDatabaseRoute);
app.use('/api/transactions', transactionsRoute);
app.use('/api/statistics', statisticsRoute);
app.use('/api/bar-chart', barChartRoute);
app.use('/api/pie-chart', pieChartRoute);
app.use('/api/combined-response', combinedResponseRoute);

// Start Server
app.listen(PORT, () => {
    console.log("Server is running on port ${ PORT }");
});