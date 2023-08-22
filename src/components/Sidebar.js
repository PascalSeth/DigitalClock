import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsAlarm, BsStopwatch } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { SlHourglass } from 'react-icons/sl'


export default function Sidebar({showMenu, setShowMenu}) {
	const navigate = useNavigate();
	const handleAlarmClick = () => {
		// Navigate to the Timer component when BsAlarm is clicked
		navigate('/timer');
	  };
	
	  const handleStopwatchClick = () => {
		// Navigate to the Stopwatch component when BsStopwatch is clicked
		navigate('/stopwatch');
	  };
	  const handleWorldClockClick = () => {
		// Navigate to the Stopwatch component when BsStopwatch is clicked
		navigate('/');
	  };
	return (
		<div className={showMenu?'bg-slate-600 h-full relative flex flex-col':'hidden bg-slate-600 h-full relative md:flex flex-col'}>
			<div className={showMenu?'w-[280px] transition duration-500': null}>
				<ul className='flex flex-col lg:w-[280px]'>
				<button onClick={handleWorldClockClick} className='p-2 m-2 text-white tracking-widest flex items-center space-x-5 transition duration-150 rounded-md hover:bg-slate-500'>
						<IconContext.Provider value={{ size: '1.6em', color: "white", style: { verticalAlign: 'middle' } }}>
							<AiOutlineClockCircle />
						</IconContext.Provider>
						<strong className={showMenu?'block':'hidden lg:block'}>WorldClock</strong>
					</button>

					<button onClick={handleAlarmClick} // Call the appropriate handler
					 className='p-2 m-2 text-white tracking-widest flex items-center space-x-5 transition duration-150 rounded-md hover:bg-slate-500'>
						<IconContext.Provider value={{ size: '1.6em', color: "white", style: { verticalAlign: 'middle' } }}>
							<BsAlarm 
 />
						</IconContext.Provider>
						<strong className={showMenu?'block':'hidden lg:block'}>Alarm</strong>
					</button>
					<button onClick={handleStopwatchClick} // Call the appropriate handler
					className='p-2 m-2 text-white tracking-widest flex items-center space-x-5 transition duration-150 rounded-md hover:bg-slate-500'>
						<IconContext.Provider value={{ size: '1.6em', color: "white", style: { verticalAlign: 'middle' } }}>
							<BsStopwatch 
 />
						</IconContext.Provider>
						<strong className={showMenu?'block':'hidden lg:block'}>Stopwatch</strong>
					</button>
				
				
				</ul>
			</div>
			<div className='flex-grow'></div>
			<div>
				<ul className='flex flex-col lg:w-[280px]'>
					<button className='p-2 m-2 text-white tracking-widest flex items-center space-x-5 transition duration-150 rounded-md hover:bg-slate-500'>
						<IconContext.Provider value={{ size: '1.6em', color: "white", style: { verticalAlign: 'middle' } }}>
							<FiSettings />
						</IconContext.Provider>
						<strong className={showMenu?'block':'hidden lg:block'}>Settings</strong>
					</button>
				</ul>
			</div>
		</div>
	)
}
