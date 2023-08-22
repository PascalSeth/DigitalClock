import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import { BiMoon, BiSun } from 'react-icons/bi'

export const DigitalClock = () => {
	const currentTime = new Date();
	const hour = currentTime.getHours();
	const [date, setDate] = useState(new Date().toDateString())
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	// const [time, setTime] = useState(new Date().toLocaleTimeString());

	let Day;	
	if (hour >= 0 && hour < 12) {
	  Day = true;
	} else {
	  Day = false;
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className='text-white w-full flex flex-col'>
			<div className='m-3 p-6 flex-grow rounded bg-[#242526] '>
				<div className='w-full flex items-center space-x-6'>
					<div className='flex justify-center '>
						{Day?
							<IconContext.Provider value={{ size: '1.6em', color: "white", style: { verticalAlign: 'middle' } }}>
								<BiSun />
							</IconContext.Provider>
							:
							<IconContext.Provider value={{ size: '1.6em', color: "white", style: { verticalAlign: 'middle' } }}>
								<BiMoon />
							</IconContext.Provider>
						}
					</div>
					<div className='flex justify-start'>
						<span>{time}</span>
					</div>
					
					<div className='flex-grow'>
						<span>Bangalore, india</span>
					</div>
					
					<div className=''>
						<span>{date}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
