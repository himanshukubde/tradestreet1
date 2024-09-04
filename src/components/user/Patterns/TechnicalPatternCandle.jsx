import React, { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";
import * as d3 from "d3";

const ChartExample = ({ ChartData }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    // Parse date strings into Date objects
    const formattedData = ChartData
    .filter(item => item.date !== null) 
    .map(({ volume, ...rest }) => ({
      ...rest,
      date: new Date(rest.date) 
    }));
  
  

    const chartOptions = {
      data: formattedData.slice(0, 370),
      footnote: {
        text: "1 Minute Intervals",
      },
      series: [
        {
          type: "candlestick",
          xKey: "date",
          xName: "Time",
          lowKey: "low",
          highKey: "high",
          openKey: "open",
          closeKey: "close",
          item: {
            width: 5,
            gap: 10,
            up: {
              fill: "#006400",
              stroke: "#003300",
            },
            down: {
              fill: "#FF0000",
              stroke: "#8B0000",
            },
          },
          tooltip: {
            renderer: ({ datum, xKey, openKey, highKey, lowKey, closeKey }) => {
              const date = new Date(datum[xKey]).toLocaleString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata",
              });
              return {
                title: `<b>${date}</b>`,
                content: `<b>O</b>: ${datum[openKey].toLocaleString()}<br/><b>H</b>: ${datum[highKey].toLocaleString()}<br/><b>L</b>: ${datum[lowKey].toLocaleString()}<br/><b>C</b>: ${datum[closeKey].toLocaleString()}`,
              };
            },
          },
        },
      ],
      axes: [
        {
          type: "time",
          position: "bottom",
          label: {
            format: (params) => {
              const date = new Date(params.value).toLocaleString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata",
              });
              return date;
            },
          },
          tick: {
            count: d3.timeMinute.every(5),
          },
          crosshair: {
            enabled: true,
          },
          zoom: {
            enabled: true,
            mode: "x",
            // Set initial zoom level if necessary
            // initialRange: { start: new Date(2000, 0, 1), end: new Date() },
          },
        },
        {
          type: "number",
          position: "right",
          label: {
            formatter: ({ value }) => Number(value).toLocaleString(),
          },
          crosshair: {
            label: {
              format: ",f",
            },
          },
          zoom: {
            enabled: true,
            // Set initial zoom level if necessary
            // initialRange: { start: 0, end: 100 },
          },
        },
      ],
      zoom: {
        enabled: true,
        rescaleAxes: true,
        mode: "x",
      },
    };
    
  

    setOptions(chartOptions);
  }, [ChartData]);

  return <div style={{ height: '500px' }}>{options && <AgChartsReact options={options} />}</div>;
};

export default ChartExample;
