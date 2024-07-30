import React, { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";
import * as d3 from "d3";

const ChartExample = ({ ChartData }) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const processedData = ChartData.map((item) => ({
      ...item,
      date: new Date(item.date),
    }));

    const formatDate = (date) => {
      const formatter = d3.timeFormat(
        d3.timeSecond(date) < date
          ? "%H:%M:%S"
          : d3.timeMinute(date) < date
          ? "%H:%M"
          : d3.timeHour(date) < date
          ? "%b %d, %H:%M"
          : "%b %d"
      );
      return formatter(date);
    };

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
            renderer: ({
              datum,
              xKey,
              openKey,
              highKey,
              lowKey,
              closeKey,
            }) => {
              return {
                title: `<b>${new Date(datum[xKey]).toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}</b>`,
                content: `<b>O</b>: ${datum[
                  openKey
                ].toLocaleString()}<br/><b>H</b>: ${datum[
                  highKey
                ].toLocaleString()}<br/><b>L</b>: ${datum[
                  lowKey
                ].toLocaleString()}<br/><b>C</b>: ${datum[
                  closeKey
                ].toLocaleString()}`,
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
            format: (params) => formatDate(params.value),
          },
          tick: {
            count: d3.timeMinute.every(1), // Initial tick interval of 5 minutes
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

  useEffect(() => {
    const handleZoom = () => {
      setOptions((prevOptions) => {
        const newOptions = { ...prevOptions };

        const xAxis = newOptions.axes.find((axis) => axis.type === "time");
        const domain = d3.extent(newOptions.data, (d) => d.date);
        const range = [0, 500]; // Assuming chart width is 500px for simplicity
        const scale = d3.scaleTime().domain(domain).range(range);
        const zoomLevel = (scale.range()[1] - scale.range()[0]) / (domain[1] - domain[0]);

        let tickInterval;
        if (zoomLevel > 1) {
          tickInterval = d3.timeMinute.every(1);
        } else if (zoomLevel > 0.5) {
          tickInterval = d3.timeMinute.every(2);
        } else if (zoomLevel > 0.25) {
          tickInterval = d3.timeMinute.every(3);
        } else if (zoomLevel > 0.1) {
          tickInterval = d3.timeMinute.every(4);
        } else {
          tickInterval = d3.timeMinute.every(5);
        }

        xAxis.tick.count = tickInterval;
        return newOptions;
      });
    };

    window.addEventListener("zoom", handleZoom);
    return () => {
      window.removeEventListener("zoom", handleZoom);
    };
  }, []);

  return (
    <div style={{ height: "500px" }}>
      {options && <AgChartsReact options={options} />}
    </div>
  );
};

export default ChartExample;
