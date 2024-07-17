import React, { useState } from "react";
import MUIDataTable from "mui-datatables";


const FullDataTable = ({ data, columns, onRowSelect, checkBox }) => {
    const [selectedRowData, setSelectedRowData] = useState(null);
 


    const NoDataIndication = () => (
        <div className="d-flex justify-content-start">
            <img 
                src='../../../../assets/images/norecordfound.png' 
                alt="No data found"
                style={{marginLeft:'23rem'}}
                // className='mx-auto'
            />
        </div>
    );
    

    const options = {
        filterType: false,
        selectableRowsHeader: false,
        selectableRows: checkBox ? "single" : "none",
        onRowSelectionChange: (currentRowsSelected, allRowsSelected) => {
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
        customToolbarSelect: () => { },
        textLabels: {
            body: {
                noMatch: NoDataIndication(),
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
        }),
        rowsPerPageOptions: [10, 25, 50, 100]
    };


    const customizedColumns = columns.map(column => ({
        ...column,
        options: {
            ...column.options,
            setCellProps: () => ({
                style: {
                    width: column.width || 'auto', 
                }
            })
        }
    }));

    return (
        <div className="modal-body">
            <MUIDataTable
                title={""}
                data={data}
                columns={customizedColumns}
                options={options}
            />
        </div>
    );
};

export default FullDataTable;
