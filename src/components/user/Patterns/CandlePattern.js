import React, { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";
import * as d3 from "d3";

const ChartExample = ({ ChartData }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const adjustTime = (date) => {
      const dateObj = new Date(date);
       
      return new Date(dateObj.getTime() - (5 * 60 * 60 * 1000));
    };

    const processedData = ChartData.map((item) => ({
      ...item,
      date: adjustTime(item.date), // Adjust time by subtracting 5 hours
    }));

    const chartOptions = {
      data: processedData,
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
            width: 5, // Adjust candle width if needed
            gap: 10,  // Increase gap between candlesticks
            up: {
              fill: "#006400",
              stroke: "#003300",
              wick: {
                strokeWidth: 1,
              },
            },
            down: {
              fill: "#FF0000",
              stroke: "#8B0000",
              wick: {
                strokeWidth: 1,
              },
            },
          },
          tooltip: {
            renderer: ({
              datum,
              xKey,
              openKey,
              highKey,
              lowKey,
              closeKey,
            }) => {
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
            count: d3.timeMinute.every(5), // Initial tick interval of 5 minutes
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
        },
      ],
      zoom: {
        enabled: true,
        rescaleAxes: true, // Ensures axes are rescaled on zoom
      },
    };

    setOptions(chartOptions);
  }, [ChartData]);

  return (
    <div style={{ height: "500px" }}>
      {options && <AgChartsReact options={options} />}
    </div>
  );
};

export default ChartExample;
