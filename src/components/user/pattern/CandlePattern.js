  // const [options, setOptions] = useState({
    //     data: [
    //         {
    //             date: new Date("2024-03-21T18:24:00.000Z"),
    //             volume: 1711041240000,
    //             open: 39863.58,
    //             high: 39870.44,
    //             low: 39862.47,
    //             close: 39867.41,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:25:00.000Z"),
    //             volume: 1711041300000,
    //             open: 39867.02,
    //             high: 39868.19,
    //             low: 39863.48,
    //             close: 39863.65,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:26:00.000Z"),
    //             volume: 1711041360000,
    //             open: 39864.35,
    //             high: 39865.24,
    //             low: 39858.74,
    //             close: 39858.85,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:27:00.000Z"),
    //             volume: 1711041420000,
    //             open: 39858.04,
    //             high: 39865.13,
    //             low: 39858.04,
    //             close: 39861.59,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:28:00.000Z"),
    //             volume: 1711041480000,
    //             open: 39859.33,
    //             high: 39859.33,
    //             low: 39855.74,
    //             close: 39855.93,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:29:00.000Z"),
    //             volume: 1711041540000,
    //             open: 39851.89,
    //             high: 39854.23,
    //             low: 39851.85,
    //             close: 39854.23,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:30:00.000Z"),
    //             volume: 1711041600000,
    //             open: 39853.09,
    //             high: 39853.09,
    //             low: 39844.98,
    //             close: 39845.26,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:31:00.000Z"),
    //             volume: 1711041660000,
    //             open: 39841.15,
    //             high: 39847.25,
    //             low: 39839.9,
    //             close: 39847.25,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:32:00.000Z"),
    //             volume: 1711041720000,
    //             open: 39847.75,
    //             high: 39850.3,
    //             low: 39846.01,
    //             close: 39850.3,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:33:00.000Z"),
    //             volume: 1711041780000,
    //             open: 39849.21,
    //             high: 39849.21,
    //             low: 39842.77,
    //             close: 39842.77,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:34:00.000Z"),
    //             volume: 1711041840000,
    //             open: 39838.3,
    //             high: 39838.3,
    //             low: 39828.7,
    //             close: 39829.22,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:35:00.000Z"),
    //             volume: 1711041900000,
    //             open: 39829.55,
    //             high: 39829.55,
    //             low: 39829.55,
    //             close: 39829.55,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:36:00.000Z"),
    //             volume: 1711041960000,
    //             open: 39831.68,
    //             high: 39831.68,
    //             low: 39826.62,
    //             close: 39826.62,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:37:00.000Z"),
    //             volume: 1711042020000,
    //             open: 39827.69,
    //             high: 39832.95,
    //             low: 39827.69,
    //             close: 39829.31,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:38:00.000Z"),
    //             volume: 1711042080000,
    //             open: 39828.53,
    //             high: 39832.68,
    //             low: 39823.05,
    //             close: 39832.68,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:39:00.000Z"),
    //             volume: 1711042140000,
    //             open: 39833.53,
    //             high: 39834.54,
    //             low: 39829.58,
    //             close: 39829.68,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:40:00.000Z"),
    //             volume: 1711042200000,
    //             open: 39828.04,
    //             high: 39829.34,
    //             low: 39825.69,
    //             close: 39827.32,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:41:00.000Z"),
    //             volume: 1711042260000,
    //             open: 39827.96,
    //             high: 39828.99,
    //             low: 39819.97,
    //             close: 39819.97,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:42:00.000Z"),
    //             volume: 1711042320000,
    //             open: 39817.52,
    //             high: 39825.81,
    //             low: 39817.52,
    //             close: 39823.98,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:43:00.000Z"),
    //             volume: 1711042380000,
    //             open: 39821.88,
    //             high: 39822.98,
    //             low: 39817.52,
    //             close: 39820.22,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:44:00.000Z"),
    //             volume: 1711042440000,
    //             open: 39821.42,
    //             high: 39824.13,
    //             low: 39821.42,
    //             close: 39821.49,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:45:00.000Z"),
    //             volume: 1711042500000,
    //             open: 39821.4,
    //             high: 39821.4,
    //             low: 39815.71,
    //             close: 39817.62,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:46:00.000Z"),
    //             volume: 1711042560000,
    //             open: 39817.86,
    //             high: 39824.6,
    //             low: 39817.48,
    //             close: 39824.6,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:47:00.000Z"),
    //             volume: 1711042620000,
    //             open: 39824.88,
    //             high: 39828.78,
    //             low: 39821.66,
    //             close: 39828.78,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:48:00.000Z"),
    //             volume: 1711042680000,
    //             open: 39829.22,
    //             high: 39829.78,
    //             low: 39822.64,
    //             close: 39822.64,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:49:00.000Z"),
    //             volume: 1711042740000,
    //             open: 39822.16,
    //             high: 39825.81,
    //             low: 39822.06,
    //             close: 39825.81,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:50:00.000Z"),
    //             volume: 1711042800000,
    //             open: 39828.12,
    //             high: 39831.04,
    //             low: 39828,
    //             close: 39828.55,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:51:00.000Z"),
    //             volume: 1711042860000,
    //             open: 39830.12,
    //             high: 39830.6,
    //             low: 39825.13,
    //             close: 39825.13,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:52:00.000Z"),
    //             volume: 1711042920000,
    //             open: 39825.67,
    //             high: 39829.1,
    //             low: 39823.67,
    //             close: 39825.9,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:53:00.000Z"),
    //             volume: 1711042980000,
    //             open: 39825.5,
    //             high: 39834.47,
    //             low: 39825.5,
    //             close: 39834.47,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:54:00.000Z"),
    //             volume: 1711043040000,
    //             open: 39836.13,
    //             high: 39837.39,
    //             low: 39832.39,
    //             close: 39837.39,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:55:00.000Z"),
    //             volume: 1711043100000,
    //             open: 39838.38,
    //             high: 39838.38,
    //             low: 39831.4,
    //             close: 39833.44,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:56:00.000Z"),
    //             volume: 1711043160000,
    //             open: 39832.39,
    //             high: 39832.39,
    //             low: 39826.3,
    //             close: 39828.56,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:57:00.000Z"),
    //             volume: 1711043220000,
    //             open: 39828.3,
    //             high: 39830.1,
    //             low: 39822.64,
    //             close: 39823.19,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:58:00.000Z"),
    //             volume: 1711043280000,
    //             open: 39824.52,
    //             high: 39826.63,
    //             low: 39818.9,
    //             close: 39818.9,
    //           },
    //           {
    //             date: new Date("2024-03-21T18:59:00.000Z"),
    //             volume: 1711043340000,
    //             open: 39820.9,
    //             high: 39824.11,
    //             low: 39819.72,
    //             close: 39823.18,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:00:00.000Z"),
    //             volume: 1711043400000,
    //             open: 39823.85,
    //             high: 39828.46,
    //             low: 39823.85,
    //             close: 39828.21,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:01:00.000Z"),
    //             volume: 1711043460000,
    //             open: 39827.68,
    //             high: 39830.59,
    //             low: 39827.68,
    //             close: 39830.1,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:02:00.000Z"),
    //             volume: 1711043520000,
    //             open: 39830.63,
    //             high: 39834.28,
    //             low: 39829.71,
    //             close: 39829.71,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:03:00.000Z"),
    //             volume: 1711043580000,
    //             open: 39827.14,
    //             high: 39827.31,
    //             low: 39816.49,
    //             close: 39816.49,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:04:00.000Z"),
    //             volume: 1711043640000,
    //             open: 39817.52,
    //             high: 39817.52,
    //             low: 39810.94,
    //             close: 39811.84,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:05:00.000Z"),
    //             volume: 1711043700000,
    //             open: 39813.32,
    //             high: 39817.11,
    //             low: 39812.82,
    //             close: 39816.44,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:06:00.000Z"),
    //             volume: 1711043760000,
    //             open: 39813.03,
    //             high: 39817.34,
    //             low: 39811.39,
    //             close: 39816.15,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:07:00.000Z"),
    //             volume: 1711043820000,
    //             open: 39815.04,
    //             high: 39820.99,
    //             low: 39813.98,
    //             close: 39816.66,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:08:00.000Z"),
    //             volume: 1711043880000,
    //             open: 39816.36,
    //             high: 39816.36,
    //             low: 39810.55,
    //             close: 39812.57,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:09:00.000Z"),
    //             volume: 1711043940000,
    //             open: 39812.98,
    //             high: 39819.43,
    //             low: 39812.65,
    //             close: 39819.43,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:10:00.000Z"),
    //             volume: 1711044000000,
    //             open: 39819.2,
    //             high: 39826.03,
    //             low: 39817.89,
    //             close: 39826.03,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:11:00.000Z"),
    //             volume: 1711044060000,
    //             open: 39826.19,
    //             high: 39829.06,
    //             low: 39824.82,
    //             close: 39827.21,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:12:00.000Z"),
    //             volume: 1711044120000,
    //             open: 39823.98,
    //             high: 39828.95,
    //             low: 39820.27,
    //             close: 39828.95,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:13:00.000Z"),
    //             volume: 1711044180000,
    //             open: 39829.2,
    //             high: 39829.51,
    //             low: 39826.63,
    //             close: 39827.79,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:14:00.000Z"),
    //             volume: 1711044240000,
    //             open: 39827.64,
    //             high: 39833.08,
    //             low: 39827.64,
    //             close: 39832.18,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:15:00.000Z"),
    //             volume: 1711044300000,
    //             open: 39831.95,
    //             high: 39833.68,
    //             low: 39829.5,
    //             close: 39833.68,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:16:00.000Z"),
    //             volume: 1711044360000,
    //             open: 39835.38,
    //             high: 39835.38,
    //             low: 39833.59,
    //             close: 39833.73,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:17:00.000Z"),
    //             volume: 1711044420000,
    //             open: 39834.57,
    //             high: 39835,
    //             low: 39829.16,
    //             close: 39829.35,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:18:00.000Z"),
    //             volume: 1711044480000,
    //             open: 39828.25,
    //             high: 39828.25,
    //             low: 39817.87,
    //             close: 39818.05,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:19:00.000Z"),
    //             volume: 1711044540000,
    //             open: 39816.43,
    //             high: 39823.57,
    //             low: 39815.17,
    //             close: 39816.26,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:20:00.000Z"),
    //             volume: 1711044600000,
    //             open: 39817.57,
    //             high: 39822.8,
    //             low: 39815.79,
    //             close: 39820.7,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:21:00.000Z"),
    //             volume: 1711044660000,
    //             open: 39821.29,
    //             high: 39827.81,
    //             low: 39820.51,
    //             close: 39827.81,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:22:00.000Z"),
    //             volume: 1711044720000,
    //             open: 39825.8,
    //             high: 39831.08,
    //             low: 39822.18,
    //             close: 39828.73,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:23:00.000Z"),
    //             volume: 1711044780000,
    //             open: 39828.91,
    //             high: 39829.61,
    //             low: 39822.32,
    //             close: 39823.74,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:24:00.000Z"),
    //             volume: 1711044840000,
    //             open: 39823.62,
    //             high: 39823.62,
    //             low: 39818.14,
    //             close: 39818.53,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:25:00.000Z"),
    //             volume: 1711044900000,
    //             open: 39817.25,
    //             high: 39820.73,
    //             low: 39816.06,
    //             close: 39818.79,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:26:00.000Z"),
    //             volume: 1711044960000,
    //             open: 39819.62,
    //             high: 39821.82,
    //             low: 39817.54,
    //             close: 39817.54,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:27:00.000Z"),
    //             volume: 1711045020000,
    //             open: 39817.37,
    //             high: 39824.05,
    //             low: 39817.37,
    //             close: 39820.21,
    //           },
    //           {
    //             date: new Date("2024-03-21T19:28:00.000Z"),
    //             volume: 1711045080000,
    //             open: 39822.27,
    //             high: 39823.76,
    //             low: 39819.22,
    //             close: 39823.76,
    //           },
    //     ],
    //     title: {
    //         text: "Dow Jones Industrial Average",
    //     },
    //     subtitle: {
    //         text: "Candlestick Patterns",
    //     },
    //     footnote: {
    //         text: "1 Minute",
    //     },
    //     series: [
    //         {
    //             type: "candlestick",
    //             xKey: "date",
    //             xName: "Time",
    //             lowKey: "low",
    //             highKey: "high",
    //             openKey: "open",
    //             closeKey: "close",
    //             item: {
    //                 up: {
    //                     fill: "transparent",
    //                     stroke: "#2b5c95",
    //                     wick: {
    //                         strokeWidth: 2,
    //                     },
    //                 },
    //                 down: {
    //                     fill: "#5090dc",
    //                     stroke: "#2b5c95",
    //                     wick: {
    //                         strokeWidth: 2,
    //                     },
    //                 },
    //             },
    //             tooltip: {
    //                 renderer: ({ datum, xKey, openKey, highKey, lowKey, closeKey }) => {
    //                     return {
    //                         title: `<b>${datum[xKey].toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</b>`,
    //                         content: `<b>O</b> ${datum[openKey].toLocaleString()}</br><b>H</b> ${datum[highKey].toLocaleString()}<br/><b>L</b> ${datum[lowKey].toLocaleString()}
    //                        <br/><b>C</b> ${datum[closeKey].toLocaleString()}`,
    //                     };
    //                 },
    //             },
    //         },
    //     ],
    //     axes: [
    //         {
    //             type: "time",
    //             position: "bottom",
    //             label: {
    //                 format: "%H:%M",
    //             },
    //         },
    //         {
    //             type: "number",
    //             position: "right",
    //             label: {
    //                 formatter: ({ value }) => Number(value).toLocaleString(),
    //             },
    //             crosshair: {
    //                 label: {
    //                     format: ",f",
    //                 },
    //             },
    //         },
    //     ],
    // });




      {/* <div className="row">
                                <div className="col-md-12">
                                    <h3 className="mt-2">Chart</h3>
                                    <AgChartsReact options={options}  style={{"height":"200px"}}/>
                                </div>
                            </div> */}