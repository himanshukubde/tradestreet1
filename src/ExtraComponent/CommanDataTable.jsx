import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

const FullDataTable = ({ data, columns, onRowSelect }) => {
    const [selectedRowData, setSelectedRowData] = useState(null);

    const options = {
        filterType: false,
        selectableRowsHeader: false,
        selectableRows: "single",
        onRowsSelect: (currentRowsSelected, allRowsSelected) => {
            if (allRowsSelected.length > 0) {
                const selectedIndex = allRowsSelected[0].index;
                const rowData = data[selectedIndex];
                setSelectedRowData(rowData);
                onRowSelect(rowData); // Call the callback function
            } else {
                setSelectedRowData(null);
                onRowSelect(null); // Call the callback function with null
            }
        },
        rowsSelected: selectedRowData ? [data.indexOf(selectedRowData)] : [],
        customToolbarSelect: () => {},
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
                text: "row (s) selected",
            },
        },
        download: false,
        print: false,
        viewColumns: false,
        search: false,
        filter: false,
        setCellProps: () => ({
            style: {
                textAlign: 'center',
            }
        })
    };

    return (
        <div className="modal-body">
            <MUIDataTable
                title={""}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    );
};

export default FullDataTable;
