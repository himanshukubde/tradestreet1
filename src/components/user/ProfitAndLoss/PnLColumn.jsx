    //option strategy
    export const columns4 = ()=> [
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
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MainSymbol",
            label: "MainSymbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SN",
            label: "SN",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ETime",
            label: "ETime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EPrice",
            label: "EPrice",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitTime",
            label: "ExitTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitPrice",
            label: "ExitPrice",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOTrade",
            label: "MOTrade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeType",
            label: "TradeType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LotSize",
            label: "LotSize",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOPnL",
            label: "MOPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCPnL",
            label: "MCPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trade",
            label: "Trade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target",
            label: "Target",
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
            name: "SL",
            label: "SL",
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
            name: "Token",
            label: "Token",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "GroupN",
            label: "Unique ID",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Spot Price",
            label: "Spot Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Hashing",
            label: "Hashing",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Strike price",
            label: "Strike price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Option Type",
            label: "Option Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "STG",
            label: "STG",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PnL",
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];

    export const columns5 = ()=> [
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
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Strategy",
            label: "Strategy",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Strategy",
            label: "Strategy",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PnL",
            label: "PnL",
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
    ];




    //pattern table
    export const columns2 =()=> [
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
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SN",
            label: "SN",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ETime",
            label: "ETime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EPrice",
            label: "EPrice",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitTime",
            label: "ExitTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitPrice",
            label: "ExitPrice",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOTrade",
            label: "MOTrade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeType",
            label: "TradeType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Quantity",
            label: "Quantity",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOPnL",
            label: "MOPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCPnL",
            label: "MCPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trade",
            label: "Trade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target",
            label: "Target",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SL",
            label: "SL",
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
            name: "TradePattern",
            label: "TradePattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SPattern",
            label: "SPattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TimeFrame",
            label: "TimeFrame",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PatternTime",
            label: "PatternTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Token",
            label: "Token",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PnL",
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];
    export const columns3 = ()=> [
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
            name: "Symbol",
            label: "Symbol",
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
            name: "TradePattern",
            label: "TradePattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SPattern",
            label: "SPattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TimeFrame",
            label: "TimeFrame",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PnL",
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];


   
    //scalping data table
    export const columns1 =()=> [
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
            name: "Symbol",
            label: "Symbol",
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
            name: "Username",
            label: "Username",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PnL",
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },


    ];
    export const columns =()=> [
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
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SN",
            label: "SN",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ETime",
            label: "ETime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EPrice",
            label: "EPrice",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitTime",
            label: "ExitTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitPrice",
            label: "ExitPrice",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOTrade",
            label: "MOTrade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeType",
            label: "TradeType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Quantity",
            label: "Quantity",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOPnL",
            label: "MOPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCPnL",
            label: "MCPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trade",
            label: "Trade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target",
            label: "Target",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SL",
            label: "SL",
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
            name: "GroupN",
            label: "Unique ID",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PnL",
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];
