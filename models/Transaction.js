modelsconst mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    // Define your transaction schema based on your JSON structure
    // Example: title, description, price, dateOfSale, category, etc.
});

module.exports = mongoose.model('Transaction', transactionSchema);
