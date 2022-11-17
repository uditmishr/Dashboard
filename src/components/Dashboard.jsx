import React from 'react'
import { Pie } from '.';
import { snipdata,pieChartData,order } from '../data/dummy';
import { useStateContext} from '../contexts/ContextProvider';

const Dashboard = () => {
  return (
    <div className='mt-8'>
        <div>
            <div className='container grid px-6 mx-auto'>
                <div className='mt-8'>
                    <div className='grid mt-4 gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 '>
                        
                        {snipdata.map((item)=>(
                            <div className=' rounded-md shadow-xs overflow-hidden bg-white dark:bg-gray-800'>
                                <div className='inline-block'>
                                    <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  p-2 pt-9 rounded-2xl'>
                                        <div className='flex flex-row'>
                                        <div className='float-left'>
                                            <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
                                                    {item.title}
                                            </p>
                                            <p className='pt-3 text-lg font-semibold text-gray-700 dark:text-gray-200'>
                                                    {item.value}            
                                            </p> 
                                        </div>
                                        <div className='float-right'>
                                            <button type='button' style={{color:item.iconColor,backgroundColor: item.iconBg}} className=' text-2xl rounded-full p-3 hover:drop-shadpw-xl'>
                                                {item.icon}
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div  className=' flex flex-col md:flex-row overflow-hidden gap-3 '>
                <div className='w-full md:w-3/4 rounded-lg shadow-xs bg-white dark:bg-gray-800'>
                        <div className='flex items-center'>
                                        <p className='m-5 text-xl tracking-tighter'>
                                            Today's Delivery 
                                        </p>
                                        <div className='flex items-center gap-2'>
                                            <p className='flex flex-row gap-2 w-7/10'>
                                                <input className=' rounded-md p-2 border border-slate-300 tracking-tighter w-1/2 md:w-fit' placeholder='Search Here' />
                                                <select className=' rounded-md p-2 border border-slate-300 tracking-tighter w-1/2 md:w-fit'>
                                                    <option value='All Orders'>
                                                        All Orders
                                                    </option>
                                                    <option value='Walk in Order'>
                                                        Walk in Order
                                                    </option>
                                                </select>
                                            </p>
                                        </div>
                                </div>
                                <div className='m-2 grid mt-4 gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3'>
                        
                                    {order.map((item)=>(
                                        <div className=' rounded-lg border border-l-4 shadow-xs overflow-hidden bg-white dark:bg-gray-800 ' style={{borderColor:item.bg}}>
                                        
                                            <div>
                                                <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-2 pb-2 rounded-2xl' >
                                                    <div className='felx-stretch gap-4 tracking-tighter'>
                                                        <span className='float-left'>
                                                            {item.title}
                                                        </span>
                                                        <span className='float-right'>
                                                        {item.id}
                                                        </span>
                            
                
                                                    </div>
                                                    <div className='relative flex flex-row gap-2 float-left mt-5'>
                                                       <img className='h-25 w-10 rounded-xl m-2 p-1 bg-light-gray' src={item.icon1}/>
                                                       <img className='h-25 w-10 rounded-xl m-2 p-1 bg-light-gray'src={item.icon2}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                    </div>

                        </div>
                        <div className='w-full md:w-1/4'>
                        <div className='rounded-lg shadow-xs bg-white dark:bg-gray-800'>
                            <div className='flex flex-col'>
                                    <div className=''>
                                        <p className='m-5 text-xl tracking-tighter'>
                                            Overview
                                        </p>
                                    </div>
                                    <div className='center'>
                                        <Pie id="pie-chart" data={pieChartData} legendVisiblity={true} height="500px" />
                                     </div>
                                        
                             </div>

                        </div> 
                        </div>
            </div>
            </div>
           
        </div>  
    </div>
  )
}

export default Dashboard