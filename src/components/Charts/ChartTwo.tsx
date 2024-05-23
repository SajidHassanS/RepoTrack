import { ApexOptions } from 'apexcharts';
import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const radialOptions = {
  series: [44, 55, 67, 83,45,23,21],
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: false // Hide the toolbar
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '40%', // Size of the inner circle
      },
      track: {
        background: 'transparent', // Set track background to transparent
        strokeWidth: 'light', // Set track line width to light
      },
      dataLabels: {
        name: {
          fontSize: '40px',
          color: '#fff' // Set data label name color to white
        },
        value: {
          fontSize: '16px',
          color: '#fff' // Set data label value color to white
        },
        total: {
          show: true,
          label: '174',
          color: '#fff', // Set total label color to white
          formatter: function (w) {
            return 'Days to'; // Custom formatter function
          }
        }
      },
      markers: {
        size: 8, // Size of the marker
        colors: ['#FFA500', '#FF0000', '#008000', '#0000FF'], // Set colors for the markers
        strokeWidth: 10 // Set marker stroke width to 0 to remove it
      }
    }
  },
};




interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, radialOptions);
      chart.render();
    }
  }, []);
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: 'Sales',
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: 'Revenue',
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });
  
  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;  

  return (
    <div className="col-span-12 h-full rounded-[25px] flex flex-col justify-between bg-white p-7.5 shadow-default dark:bg-[#090d28] 2xl:col-span-4">
      <div className="mb-16 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Total Report
          </h4>
        </div>
      </div>

      <div className='mb-10'>
        <div id="chartTwo" className="-ml-5 -mb-9">
          {/* <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          /> */}
            <ReactApexChart options={radialOptions} series={radialOptions.series} type="radialBar" height={450} />
        </div>
      </div>
      <div className="flex mx-auto max-w-[80%] justify-center gap-4 md:font-bold md:text-4xl items-center flex-wrap md:gap-8 mt-8">
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-orange-500"></span>
          <span>Day 1</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-red-500"></span>
          <span>Day 2</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-green-500"></span>
          <span>Day 3</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-blue-500"></span>
          <span>Day 4</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-pink-500"></span>
          <span>Day 5</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-teal-500"></span>
          <span>Day 6</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-red-700"></span>
          <span>Day 7</span>
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
