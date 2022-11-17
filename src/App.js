import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, Dashboard} from './components';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';
import { FixedUserHandle } from '@syncfusion/ej2/diagrams';

const App = () => {
    const {activeMenu}=useStateContext();
    
    return (
        <div> 
            <BrowserRouter>
                <div style={{backgroundColor:'#2563EB',position:'fixed', top:0,height:'19em', width:'100%'}}>

                </div>
                <div className="flex relative dark:bg-main-dark-bg">
                    
                    {activeMenu ? (
                        <div className='rounded-2xl ml-4 mt-1 w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />

                        </div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        `bg-main-bg dark:bg-main-bg min-h-screen  w-full ${activeMenu ? 'rounded md:ml-72 ' : ' felx-2'}`


                    } >
                        <div className='fixed md:static bg-blue-600 dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                    
                    <div>
                    <Routes>
                        <Route path="/" element={(<Dashboard />)} />
                        <Route path="/Dashboard" element={(<Dashboard />)} />

                    </Routes>
                    </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App