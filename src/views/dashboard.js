import React, { useState, useEffect, useRef } from 'react';
import LineGraph from './components/lineGraph';
import PieGraph from './components/pieGraph';
const Dashboard = () => {
  const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Growth',
        data: [30000, 20000, 50000, 20000, 80000],
        fill: false, // The line will not be filled
        borderColor: 'rgba(255, 10, 255, 1)', // Line color
        backgroundColor: 'rgba(255, 192, 192, 0.5)', // Point color
        tension: 0.3, // Curve on the line
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Sales' },
    },
    scales: {
      x: { 
        title: { display: true, text: 'Months' }, 
      },
      y: { 
        title: { display: true, text: 'Sales ($)' }, 
      },
    },
  };

  const [isNotifReveal, setNotifReveal] = useState(false)

  const revealNotif = () => {
    isNotifReveal ? setNotifReveal(false) : setNotifReveal(true) 
  }
  
  return (
        <div className='relative w-full flex-col flex items-start'>
            <div className='p-4 bg-white w-full items-center flex justify-between flex-row '>
                <h1 className='text-lg '>Dashboard</h1>
                <span className={`text-2xl cursor-pointer`} onClick={() => revealNotif()}><ion-icon name={`${isNotifReveal ? "notifications-outline" : "notifications" }`}></ion-icon></span>
            </div>
            <div className='flex flex-row gap-8 py-4 px-2'>
                <div className='w-72 h-32 flex justify-between flex-col items-start bg-gray-500 text-white'>
                   <div className='flex gap-2 flex-col p-2'>
                        <span className='text-4xl'>10</span> 
                        <span>User accounts</span>
                   </div>
                   <div className='self-center bg-gray-600 w-full flex justify-center py-1 text-sm hover:opacity-70 cursor-pointer'>
                        <span>More info</span>
                   </div>
                </div>
                <div className='w-72 h-32 flex justify-between flex-col items-start bg-gray-500 text-white'>
                   <div className='flex gap-2 flex-col p-2'>
                        <span className='text-4xl'>500</span> 
                        <span>Available stocks</span>
                   </div>
                   <div className='self-center bg-gray-600 w-full flex justify-center py-1 text-sm hover:opacity-70 cursor-pointer'>
                        <span>More info</span>
                   </div>
                </div>
                <div className='w-72 h-32 flex justify-between flex-col items-start bg-gray-500 text-white'>
                   <div className='flex gap-2 flex-col p-2'>
                        <span className='text-4xl'>250</span> 
                        <span>Orders</span>
                   </div>
                   <div className='self-center bg-gray-600 w-full flex justify-center py-1 text-sm hover:opacity-70 cursor-pointer'>
                        <span>More info</span>
                   </div>
                </div>
                <div className='w-72 h-32 flex justify-between flex-col items-start bg-gray-500 text-white'>
                   <div className='flex gap-2 flex-col p-2'>
                        <span className='text-4xl'>20</span> 
                        <span>Soon to be out of stock</span>
                   </div>
                   <div className='self-center bg-gray-600 w-full flex justify-center py-1 text-sm hover:opacity-70 cursor-pointer'>
                        <span>More info</span>
                   </div>
                </div>
            </div>
            <div className='ps-4 w-full flex flex-row'>
              <div className='w-full'>
                <LineGraph data={dataLine} options={optionsLine} />
              </div>
              <div>
                {/* <PieGraph data={data} options={options}/> */}
              </div>
            </div>
            {/* Notifications */}
            <div className={`p-2 z-40 absolute shadow-lg bg-white rounded h-screen w-72 right-0 transition`} style={{ transition: "0.3s ease-in-out", right: isNotifReveal ? "" : "-290px"  }}>
              <span className='text-xl cursor-pointer rounded-full hover:bg-gray-200' onClick={() => revealNotif()}><ion-icon name="close-outline"></ion-icon></span>
              <div className='w-full flex flex-col items-start justify-start gap-2 mt-2 px-1'>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='w-full flex items-center justify-between flex-row gap-1'>
                    <div className='text-xs flex flex-col gap-1'>
                      <h6 className='font-bold'>For delivery</h6>  
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </div>
                  <hr className='w-full border border-gray-100'></hr>
                </div>
              </div>
            </div>
        </div>
  )
};

export default Dashboard;
