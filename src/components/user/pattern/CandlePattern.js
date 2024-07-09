import React, { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";

const ChartExample = ({ ChartData }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const processedData = ChartData.map((item) => ({
      ...item,
      date: new Date(item.date),
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
            width: 3,
            gap: 5,
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
            renderer: ({ datum, xKey, openKey, highKey, lowKey, closeKey }) => {
              return {
                title: `<b>${new Date(datum[xKey]).toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}</b>`,
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
            format: "%H:%M",
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
