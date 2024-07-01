import React, { useState, useCallback, useMemo } from "react";
import MUIDataTable from "mui-datatables";

// NoDataIndication Component
const NoDataIndication = () => (
    <div className="d-flex justify-content-start">
        <img
            src='../../../../assets/images/norecordfound.png'
            alt="No data found"
            style={{ marginLeft: '23rem' }}
        />
    </div>
);

const FullDataTable = ({ data, columns, onRowSelect, checkBox }) => {
    const [selectedRowData, setSelectedRowData] = useState(null);

    const handleRowSelect = useCallback((currentRowsSelected, allRowsSelected) => {
        if (allRowsSelected.length > 0) {
            const selectedIndex = allRowsSelected[0].index;
            const rowData = data[selectedIndex];
            if (rowData !== selectedRowData) {
                setSelectedRowData(rowData);
                onRowSelect(rowData); // Call the callback function
            }
        } else {
            if (selectedRowData !== null) {
                setSelectedRowData(null);
                onRowSelect(null); // Call the callback function with null
            }
        }
    }, [data, selectedRowData, onRowSelect]);

    const options = useMemo(() => ({
        filterType: false,
        selectableRowsHeader: false,
        selectableRows: checkBox ? "single" : false,
        onRowsSelect: handleRowSelect,
        rowsSelected: selectedRowData ? [data.indexOf(selectedRowData)] : [],
        customToolbarSelect: () => { },
        textLabels: {
            body: {
                noMatch: <NoDataIndication />,
                toolTip: "Sort",
            },
            pagination: {
                next: "Next Page",
                previous: "Previous Page",
                rowsPerPage: "Rows per page:",
                displayRows: "of",
            },
            selectedRows: {
                text: "row(s) selected",
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
    }), [checkBox, handleRowSelect, selectedRowData, data]);

    const customizedColumns = useMemo(() => columns.map(column => ({
        ...column,
        options: {
            ...column.options,
            setCellProps: () => ({
                style: {
                    width: column.width || 'auto',
                }
            })
        }
    })), [columns]);

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

export default React.memo(FullDataTable);
