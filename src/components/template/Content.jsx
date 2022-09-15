
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {ArrowUp, ArrowDown} from '../icons'
import { useState } from 'react';

export default function Content() {
    const [dropDown, setDropDown] = useState(`hidden`);
     
    return (
    <div className="relative h-100vh w-full md:flex">
        {/*Header Responsive info*/}
        <div className="relative  md:hidden">
        <AppBar position="static" sx={{backgroundColor: 'white'}}>
            <Toolbar sx={{flexDirection: 'row', justifyContent: 'end'}}>
                    <Typography color='black' variant="h6" component="div" sx={{ flexGrow: 1 }}>Dashboard</Typography>
                
                {dropDown == 'hidden' ? 
                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="menu"
                        sx={{ mr: 2 }}  
                        data-dropdown-toggle="dropdown"
                        onClick={()=>{setDropDown('block')}}
                        variant="outlined"
                            >
                        <MenuIcon />
                    </IconButton>
                :   
                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="menu"
                        sx={{ mr: 2 }}  
                        data-dropdown-toggle="dropdown"
                        onClick={()=>{setDropDown('hidden')}} 
                            >
                        <CloseIcon/>
                    </IconButton>
                }
            </Toolbar>
        </AppBar>
         
                <div id="dropdown" className={`${dropDown} mt-0.5 z-10 w-full bg-white divide-y divide-gray-100 shadow dark:bg-transparent rounded `}>
                    <ul class="py-1 text-sm text-gray-700 dark:text-black" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                    </ul>
                </div>
        </div>
                {/*Inicio body all info*/}
        <div onClick={()=>setDropDown('hidden')}className="relative md:flex md:flex-col bg-white h-100vh w-full ">   
                {/*Inicio body info*/}
                <div className="flex flex-col md:w-full md:h-full justify-center md:px-4 pb-40 pt-10 w-full h-100vh bg-blue-300 items-start">
                    <div className='hidden w-full justify-between md:flex'>
                        <div>Dashboard</div>
                        <div>User</div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:w-full md:h-full justify-center md:px-4 pb-40 pt-10 w-full items-center">

                        <div className="flex flex-col bg-white w-5/6 md:w-1/6 md:mr-3 h-28 md:h-1/6 mt-5 md:mt-0  justify-center items-center rounded-md shadow-xl font-sans">
                            <h5 className="text-black">Vendas</h5>
                            <span className="text-lime-500">{ArrowUp} 3.5% since last day.</span>
                        </div>
                        <div className="flex flex-col bg-white w-5/6 md:w-1/6 md:mr-3 h-28 md:h-1/6 mt-4 md:mt-0 justify-center items-center rounded-md shadow-xl">
                            <h5 className="text-black">Lucro</h5>
                            <span className="text-red-500">{ArrowDown} 3.5% since last day.</span>
                        </div>
                        <div className="flex flex-col bg-white w-5/6 md:w-1/6 md:mr-3 h-28  mt-4 md:h-1/6 md:mt-0 justify-center items-center rounded-md shadow-xl lg:float-left">
                            <h5 className="text-black">Lucro</h5>
                            <span className="text-red-500">{ArrowDown} 3.5% since last day.</span>
                        </div>
                        <div className="flex flex-col bg-white w-5/6 md:w-1/6 md:mr-3 h-28 md:h-1/6 mt-4 md:mt-0 justify-center items-center rounded-md shadow-xl">
                            <h5 className="text-black">Lucro</h5>
                            <span className="text-red-500">{ArrowDown} 3.5% since last day.</span>   
                        </div>          
                    </div>
                </div>
        </div>
    </div>
  );
}