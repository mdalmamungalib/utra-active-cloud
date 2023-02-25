import React from 'react';
import './SideCart.css'
import { FaMapMarkerAlt } from "react-icons/fa";

const SideCart = ({cart, cartData}) => {
    
    let totalTime = 0;
    let toTalTime = 0;
    for(const total of cart){
        totalTime = totalTime + parseFloat(total.timeRequired);
        toTalTime = toTalTime * total.timeRequired;
    }

    const handaleClick = (secoundBtn) =>{
        
    }
    return (
        <div className='pt-11 side-cart'>
            {/*==========================
                    avatar cart 
               ==========================*/}
            <div className='avatar-cart'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="Bes-Profile-Galib.png" />
                    </div>
                </div>
                <div className='pt-2 pl-4'>
                    <h1 className='text-xl font-bold'>MD Al Mamun Galib</h1>
                    <h4 className='flex text-gray-400'><span className='pr-2 pt-1'><FaMapMarkerAlt /></span>Sydney, Australia</h4>
                </div>
            </div>
            {/* ======================
                     shadow-card 
                ======================*/}

            <div className='stat-cart1 bg-slate-100'>
                <div>
                    <h1 className='text-2xl font-bold'>59<span className='text-base text-gray-400'>kg</span></h1>
                    <p className='font-medium text-gray-500'>Weight</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>6.6</h1>
                    <p className='font-medium text-gray-500'>Height</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>21<span className='text-base text-gray-400'>yrs</span></h1>
                    <p className='font-medium text-gray-500'>Age</p>
                </div>
            </div>

            {/* =======================
                        time-secound-cart 
                    =======================*/}
            <div className='mt-11 stat-cart'>
                <h1 className='addabreak text-xl font-bold ml-8'>Add A Break</h1>
                <div className='stat-cart1 bg-slate-100 mt-11'>
                    <div>
                        <button onClick={handaleClick} className="btn btn-circle btn-outline text-lg">
                        <p id='secoundBtn'>10</p><span className='text-xs pt-1'>s</span>
                        </button>
                    </div>
                    <div>
                        <button onClick={handaleClick} className="btn btn-circle btn-outline text-lg">
                        <p id='secoundBtn'>20</p><span className='text-xs pt-1'>s</span>
                        </button>
                    </div>
                    <div>
                        <button onClick={handaleClick} className="btn btn-circle btn-outline text-lg">
                        <p>30</p><span className='text-xs pt-1'>s</span>
                        </button>
                    </div>
                    <div>
                        <button onClick={handaleClick} className="btn btn-circle btn-outline text-lg">
                        <p>40</p><span className='text-xs pt-1'>s</span>
                        </button>
                    </div>
                    <div>
                        <button onClick={handaleClick} className="btn btn-circle btn-outline text-lg">
                        <p>50</p><span className='text-xs pt-1'>s</span>
                        </button>
                    </div>
                </div>
            </div>

            {/*============================
                  Exercise Details here 
               ============================*/}
            <div className='mt-14'>
                <h1 className='addabreak text-xl font-bold ml-8'>Exercise Details</h1>
                <div className='stat-cart2 bg-slate-100'>
                    <div className='text-xl font-semibold'>
                        <h1>Exercise time</h1>
                    </div>
                    <div className='text-xl text-gray-400'>
                        <h1>{toTalTime} seconds</h1>
                    </div>
                </div>

                <div className='stat-cart2 bg-slate-100'>
                    <div className='text-xl font-semibold'>
                        <h1>Break time</h1>
                    </div>
                    <div className='text-xl text-gray-400'>
                        <h1>15 seconds</h1>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-center mt-11">
                <button className="btn btn-wide btn-primary">Activity Completed</button>
            </div>
        </div>
    );
};

export default SideCart;