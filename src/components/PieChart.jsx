import React from 'react'
import { data, options } from '../data/PieChartData'
import Chart from 'react-google-charts'

const PieChart = () => {
  return (
    <div className="grid w-full px-4 py-2 align-middle justify-center bg-gray-100">
        <div className="pt-10 text-blue-600 text-left sm:text-center mr-36 sm:m-0 font-bold">
          <h1 className="text-2xl hidden sm:block"> Who actually controls the UE ? </h1>
          <p className="hidden sm:block font-semibold font-cursive py-1"> "At least five nations control the United Earth government at its core. Yet only three are able to project their power to the stars." </p>
        </div>
        <div className="container m-auto py-5" id="chart-02">
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
            chartType="PieChart"
            width="100%"
            height="500px"
            data={data}
            options={options}
          />
        </div>
    </div>
  )
}

export default PieChart