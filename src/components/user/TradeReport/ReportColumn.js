
export const getColumns = () => [
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
        name: "ScalpType",
        label: "ScalpType",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Exchange",
        label: "Exchange",
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
        name: "Token",
        label: "Token",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TType",
        label: "Trade Type",
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
        name: "Trading",
        label: "Trading",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ExpiryDate",
        label: "Expiry Date",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TradeExecution",
        label: "Trade Execution",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ExitDay",
        label: "Exit Day",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "EntryTime",
        label: "Entry Time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ExitTime",
        label: "Exit Time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Expirytype",
        label: "Expiry Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SSDate",
        label: "SSDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SEDate",
        label: "SEDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Lotsize",
        label: "Lotsize",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TaskStatus",
        label: "Task Status",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TaskTime",
        label: "Task Time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TradeCount",
        label: "Trade Count",
        options: {
            filter: true,
            sort: true,
        }
    },

]
export const getColumns1 = () => [
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
        name: "STG",
        label: "Strategy Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Trading",
        label: "Trading",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Targettype",
        label: "Risk Handle",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Lotsize",
        label: "Lotsize",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Instrument Type",
        label: "Instrument Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Expirydate",
        label: "Expiry Date",
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
        name: "Symbol",
        label: "Symbol",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "IName",
        label: "IName",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Expirytype",
        label: "Expiry Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "strategytype",
        label: "Measurment Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Target value",
        label: "Target value",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SL value",
        label: "SL value",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TradeExecution",
        label: "Trade Execution",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Lot Size",
        label: "LotSize",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Product Type",
        label: "Product Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Entry Time",
        label: "Entry Time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Exit Time",
        label: "Exit Time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "DeepStrike",
        label: "Deep Strike",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "DepthofStrike",
        label: "Depth of Strike",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SSDate",
        label: "SSDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SEDate",
        label: "SEDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "StrikeType",
        label: "Strike Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "LowerRange",
        label: "Lower Range",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "HigherRange",
        label: "Higher Range",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "CEDepthLower",
        label: "CEDepth Lower",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "CEDepthHigher",
        label: "CEDepth Higher",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "PEDepthLower",
        label: "PEDepth Lower",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "PEDepthHigher",
        label: "PEDepth Higher",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "CEDeepLower",
        label: "CEDeep Lower",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "CEDeepHigher",
        label: "CEDeep Higher",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "PEDeepHigher",
        label: "PEDeep Higher",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "PEDeepLower",
        label: "PEDeep Lower",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "GroupN",
        label: "GroupN",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "FixedSM",
        label: "FixedSM",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TradeCount",
        label: "Trade Count",
        options: {
            filter: true,
            sort: true,
        }
    },

]
export const getColumns2 = () => [
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
        name: "TradePattern",
        label: "TradePattern",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Exchange",
        label: "Exchange",
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
        name: "Token",
        label: "Token",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TType",
        label: "TType",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TStype",
        label: "TStype",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Target value",
        label: "Target value",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SL value",
        label: "SL value",
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
        name: "Trading",
        label: "Trading",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Expiry Date",
        label: "Expiry Date",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TradeExecution",
        label: "TradeExecution",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "ExitDay",
        label: "ExitDay",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "EntryTime",
        label: "EntryTime",
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
        name: "Pattern",
        label: "Pattern",
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
        name: "SEDate",
        label: "SEDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "SSDate",
        label: "SSDate",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Trend",
        label: "Trend",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TradeCount",
        label: "TradeCount",
        options: {
            filter: true,
            sort: true,
        }
    },

];

export const getColumns3 = () => [
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
        name: "Symbol",
        label: "Symbol",
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
        name: "ExitPrice",
        label: "ExitPrice",
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
        name: "MOTrade",
        label: "MOTrade",
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
        name: "Quantity",
        label: "Quantity",
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
        name: "ScalpType",
        label: "ScalpType",
        options: {
            filter: true,
            sort: true,
        }
    }, 
    {
        name: "GroupN",
        label: "GroupN",
        options: {
            filter: true,
            sort: true,
        }
    },
]
    // Option
export const getColumns4 = () => [
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
        name: "Symbol",
        label: "Symbol",
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
        name: "ExitTime",
        label: "ExitTime",
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
        name: "ExitPrice",
        label: "ExitPrice",
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
        name: "MOTrade",
        label: "MOTrade",
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
        name: "LotSize",
        label: "LotSize",
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
        name: "SL",
        label: "SL",
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
        name: "STG",
        label: "STG",
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
        name: "Token",
        label: "Token",
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
        name: "MainSymbol",
        label: "MainSymbol",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "GroupN",
        label: "GroupN",
        options: {
            filter: true,
            sort: true,
        }
    },
]

//Pattern
export const getColumns5 = () => [
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
        name: "Symbol",
        label: "Symbol",
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
        name: "ExitTime",
        label: "ExitTime",
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
        name: "ExitPrice",
        label: "ExitPrice",
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
        name: "MOTrade",
        label: "MOTrade",
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
        name: "Quantity",
        label: "Quantity",
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
        name: "SL",
        label: "SL",
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
    
]


