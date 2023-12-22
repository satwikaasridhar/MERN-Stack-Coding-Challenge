import React from 'react';

function TransactionsTable({ transactions, searchText, setSearchText }) {
    return (
        <div>
            {/* Table component with transactions data */}
            <input
                type="text"
                placeholder="Search transactions"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {/* Pagination buttons */}
        </div>
    );
}

export default TransactionsTable;