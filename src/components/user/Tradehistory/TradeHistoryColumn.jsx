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
        label: "TType",
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
        label: "ExpiryDate",
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
        name: "Expirytype",
        label: "Expirytype",
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
        label: "TaskStatus",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TaskTime",
        label: "TaskTime",
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
        label: "Expirytype",
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
        label: "TradeExecution",
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
        label: "DeepStrike",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "DepthofStrike",
        label: "DepthofStrike",
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
        label: "StrikeType",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "LowerRange",
        label: "LowerRange",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "HigherRange",
        label: "HigherRange",
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
        label: "PEDepthLower",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "PEDepthHigher",
        label: "PEDepthHigher",
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
        label: "CEDeepHigher",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "PEDeepHigher",
        label: "PEDeepHigher",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "PEDeepLower",
        label: "PEDeepLower",
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
        label: "TradeCount",
        options: {
            filter: true,
            sort: true,
        }
    },
];

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

export const columns3 =(selectStrategyType)=> [
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
        name: "ETime",
        label: "Entry Time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "EPrice",
        label: "Entry Price",
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
        name: "ExitPrice",
        label: "Exit Price",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "TradeType",
        label: "Trade Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: selectStrategyType == "Option Strategy" ? "LotSize" : selectStrategyType == "Scalping" ? "Quantity" : "Quantity",
        label: selectStrategyType == "Option Strategy" ? "LotSize" : selectStrategyType == "Scalping" ? "Quantity" : "Quantity",
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
        name: "PnL",
        label: "PnL",
        options: {
            filter: true,
            sort: true,
        }
    },

];

export const columns4 =()=> [
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
        name: "ETime",
        label: "Entry Time",

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

export const columns5 =(selectStrategyType)=> [
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
        name: selectStrategyType == "Pattern" ? "ETime" : "ExitTime",
        label: "Exit Time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: selectStrategyType == "Scalping" ? "EquityCurve" : "PnL",
        label: "Equity Curve",
        options: {
            filter: true,
            sort: true,
        }
    },


];

export const columns6 =()=> [
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
        name: "ETime",
        label: "Entry Time",

        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Drawdown",

        label: "Drawdown",
        options: {
            filter: true,
            sort: true,
        }
    },


];


export const columns7 =()=> [
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
        name: "Max Open Trade",
        label: "EMax Open Trade",

        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Max Profit",
        label: "Max Profit",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Max Drawdown",
        label: "Max Drawdown",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "profit at Max Draw Down",
        label: "profit at Max Draw Down",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Current Price",
        label: "Current Price",
        options: {
            filter: true,
            sort: true,
        }
    },


];

export const columns8 =()=> [
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
        name: "Current Runing loss",
        label: "Current Runing loss",

        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Current open Trade",

        label: "Current open Trade",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Max Price of Trade Execution",
        label: "Max Price of Trade Execution",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Min Price of Trade Execution",
        label: "Min Price of Trade Execution",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Max Involved fund",
        label: "Max Involved fund",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Last trade open price",
        label: "Last trade open price",
        options: {
            filter: true,
            sort: true,
        }
    },
    



];