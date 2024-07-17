import Checkbox from '@mui/material/Checkbox';

// Client Activity Column
export const ClientActivityPage =()=> [
    {
        name: "S.No",
        label: "S.No",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                const rowIndex = tableMeta.rowIndex;
                return rowIndex + 1;
            }
        },
    },
    {
        name: "Username",
        label: "Username",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ServiceCount",
        label: "ServiceCount",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Broker",
        label: "Broker",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Credit Use",
        label: "Credit Use",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ServiceEndDate",
        label: "ServiceEndDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ServiceStartDate",
        label: "ServiceStartDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "LicanseStartDate",
        label: "LicanseStartDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "RemainingAmmount",
        label: "Remaining Ammount",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TotalCreditUse",
        label: "Total Credit Use",
        options: {
            filter: true,
            sort: true,
        }
    },

];

//Client Report Column
export const ClientReportColumn =()=>[
        {
            name: "S.No",
            label: "S.No",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowIndex = tableMeta.rowIndex;
                    return rowIndex + 1;
                }
            },
        },
        {
            name: "Thread",
            label: "Thread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Username",
            label: "Username",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ScalpType",
            label: "ScalpType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Targettype",
            label: "Targettype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Threading Status",
            label: "Threading Status",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const isChecked = Boolean(value);
                    return (
                        <Checkbox
                            checked={isChecked}
                        />
                    );
                }
            }
        },
        {
            name: "ThreadName",
            label: "ThreadName",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Time",
            label: "Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ProjectName",
            label: "ProjectName",
            options: {
                filter: true,
                sort: true,
            }
        },

    

]


 