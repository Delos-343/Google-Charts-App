import React from 'react'
import { data, options } from '../data/GeoChartData'
import Chart from 'react-google-charts'

const GeoChart = () => {
  return (
    <div className="flex w-full px-4 py-8 align-middle justify-center bg-gray-100">
        <div className="absolute top-10 sm:top-7 text-blue-600 text-left sm:text-center mr-36 sm:m-0">
          <h1 className="text-3xl sm:text-6xl font-bold"> THE UE </h1>
          <p className="hidden sm:block font-semibold font-cursive py-1"> "Own nothing, be happy. Please do not resist." </p>
        </div>
        <div className="container m-auto py-5" id="chart-01">
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}S
            chartType="GeoChart"
            width="100%"
            height="500px"
            data={data}
            options={options}
          />
        </div>
    </div>
  )
}

export default GeoChart