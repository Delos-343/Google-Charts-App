import React from 'react'
import { data, options } from '../data/WordTreeData'
import Chart from 'react-google-charts'

const WordTree = () => {
  return (
    <div className="grid w-full px-4 py-8 align-middle justify-center bg-gray-100">
        <div className="pt-10 text-blue-600 text-left sm:text-center mr-36 sm:m-0 font-bold">
          <h1 className="text-2xl hidden sm:block"> Territories of the UE </h1>
          <p className="hidden sm:block font-semibold font-cursive py-1"> "The Rosenfeld Drive may not have given us the stars, but it did gave us the planets." </p>
        </div>
        <div className="container m-auto py-5" id="chart-03">
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
            ]}
            chartType="WordTree"
            width="100%"
            height="500px"
            data={data}
            options={options}
          />
        </div>
    </div>
  )
}

export default WordTree