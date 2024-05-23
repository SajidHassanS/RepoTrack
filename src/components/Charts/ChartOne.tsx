// import { ApexOptions } from 'apexcharts';
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const options: ApexOptions = {
//   legend: {
//     show: false,
//     position: 'top',
//     horizontalAlign: 'left',
//   },
//   colors: ['#3C50E0', '#80CAEE'],
//   chart: {
//     fontFamily: 'Satoshi, sans-serif',
//     height: 335,
//     type: 'area',
//     dropShadow: {
//       enabled: true,
//       color: '#623CEA14',
//       top: 10,
//       blur: 4,
//       left: 0,
//       opacity: 0.1,
//     },

//     toolbar: {
//       show: false,
//     },
//   },
//   responsive: [
//     {
//       breakpoint: 1024,
//       options: {
//         chart: {
//           height: 300,
//         },
//       },
//     },
//     {
//       breakpoint: 1366,
//       options: {
//         chart: {
//           height: 350,
//         },
//       },
//     },
//   ],
//   stroke: {
//     width: [2, 2],
//     curve: 'straight',
//   },
//   // labels: {
//   //   show: false,
//   //   position: "top",
//   // },
//   grid: {
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   markers: {
//     size: 4,
//     colors: '#fff',
//     strokeColors: ['#3056D3', '#80CAEE'],
//     strokeWidth: 3,
//     strokeOpacity: 0.9,
//     strokeDashArray: 0,
//     fillOpacity: 1,
//     discrete: [],
//     hover: {
//       size: undefined,
//       sizeOffset: 5,
//     },
//   },
//   xaxis: {
//     type: 'category',
//     categories: [
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//     ],
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     title: {
//       style: {
//         fontSize: '0px',
//       },
//     },
//     min: 0,
//     max: 100,
//   },
// };

// interface ChartOneState {
//   series: {
//     name: string;
//     data: number[];
//   }[];
// }

// const ChartOne: React.FC = () => {
//   const [state, setState] = useState<ChartOneState>({
//     series: [
//       {
//         name: 'Product One',
//         data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
//       },

//       {
//         name: 'Product Two',
//         data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
//       },
//     ],
//   });

//   const handleReset = () => {
//     setState((prevState) => ({
//       ...prevState,
//     }));
//   };
//   handleReset;

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
//       <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
//         <div className="flex w-full flex-wrap gap-3 sm:gap-5">
//           <div className="flex min-w-47.5">
//             <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
//               <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
//             </span>
//             <div className="w-full">
//               <p className="font-semibold text-primary">Total Revenue</p>
//               <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
//             </div>
//           </div>
//           <div className="flex min-w-47.5">
//             <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
//               <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
//             </span>
//             <div className="w-full">
//               <p className="font-semibold text-secondary">Total Sales</p>
//               <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full max-w-45 justify-end">
//           <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
//             <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
//               Day
//             </button>
//             <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
//               Week
//             </button>
//             <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
//               Month
//             </button>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div id="chartOne" className="-ml-5">
//           <ReactApexChart
//             options={options}
//             series={state.series}
//             type="area"
//             height={350}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartOne;





import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  chart: {
    type: 'area',
    height: 335,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      color: '#19c48a',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    fontFamily: 'Satoshi, sans-serif',
  },
  colors: ['#19c48a'],
  stroke: {
    width: 2,
    curve: 'smooth',
    colors: ['#19c48a'],
  },
  fill: {
    colors: ['#19c48a'],
  },
  grid: {
    borderColor: '#fff',
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2024-03-01', '2024-03-02', '2024-03-03', '2024-03-04', '2024-03-05', '2024-03-06', '2024-03-07'
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        fontSize:"22px",
        colors: '#fff',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize:"22px",
        colors: '#fff',
      },
      formatter: (value) => `${value}k`,
    },
  },
};


const ChartOne: React.FC = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Revenue',
        data: [5, 6, 5, 6, 7, 8, 7],  // Static data points to match the example image
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-[#eb5431] sm:px-7.5 xl:col-span-8" >
      <div className="flex w-full justify-between text-black dark:text-white">
        <h3>Total Revenue</h3>
        <h4 className="time-period-btn">last 30 days</h4>
      </div>
      <div id="chart">
        <ReactApexChart options={options} series={state.series} type="area" height={450} />
      </div>
    </div>
  );
};

export default ChartOne;
