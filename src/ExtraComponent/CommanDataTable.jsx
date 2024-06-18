import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

const FullDataTable = ({ data, columns }) => {

    const [selectedRows, setSelectedRows] = useState([]);

    const options = {
        filterType: false,
        selectableRowsHeader: false, // Hide the checkbox in the table header
        selectableRows: "single", // Allow only single row selection
        onRowsSelect: (currentRowsSelected, allRowsSelected) => {
            // Handle row selection
            if (allRowsSelected.length > 0) {
                // Only one row can be selected, so we use allRowsSelected[0].index
                setSelectedRows([allRowsSelected[0].index]);
            } else {
                setSelectedRows([]);
            }
        },
        rowsSelected: selectedRows,
        customToolbarSelect: () => { }, // Disable the delete icon
        textLabels: {
            body: {
                noMatch: "No records found",
                toolTip: "Sort",
            },
            pagination: {
                next: "Next Page",
                previous: "Previous Page",
                rowsPerPage: "Rows per page:",
                displayRows: "of",
            },
            selectedRows: {
                text: "", // Remove the "1 row(s) selected" message
            },
        },
        download: false, // Disable download CSV option
        print: false, // Disable print option
        viewColumns: false, // Disable view columns option
        search: false, // Disable search bar
        filter: false, // Disable filter dropdown
        customHead: () => ({
            style: {
                backgroundColor: '#f5f5f5', // Customize header background color
                color: '#333', // Customize header text color
                fontWeight: 'bold', // Make header text bold
            }
        }),
        setCellProps: () => ({
            style: {
                textAlign: 'center', // Center align text in all cells
            }
        })
    };

    return (
        <MUIDataTable
            title={""}
            data={data}
            columns={columns}
            options={options}
        />
    );
}

export default FullDataTable;
