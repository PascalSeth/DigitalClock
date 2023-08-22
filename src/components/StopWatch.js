import React, { useEffect, useState } from 'react'

export default function StopWatch() {
	const [flags, setFlags] = useState([])
	const [intervalId, setIntervalId] = useState(null);
	const [isRunning, setIsRunning] = useState(false);
	const [stopWatch, setStopWatch] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0
	})
	
	useEffect(() => {
		if(isRunning){
			setIntervalId(
				setInterval(() => {
					setStopWatch(value => {
						let {hours, minutes, seconds, milliseconds } = value;
						milliseconds+=1;
			
						if(milliseconds === 100){
							milliseconds = 0;
							seconds+=1;
						}
			
						if(seconds === 60){
							seconds=0;
							minutes+=1;
						}
			
						if(minutes === 60){
							minutes=0;
							hours+=1;
						}
			
						return {
							hours,
							minutes,
							seconds,
							milliseconds
						}
					})
				}, 10)	
			)
		}else {
			clearInterval(intervalId)
			setIntervalId(null)
		}

		return () => clearInterval(intervalId);
	}, [isRunning])

	const handleStartStopEvent = () => {
		console.log(`values \ntimer is running? ${isRunning}`)
		setIsRunning(value => !value)
	}

	const recordFlag = () => {
		if(isRunning){
			const temp= `${stopWatch.hours}:${stopWatch.minutes}:${stopWatch.seconds}.${stopWatch.milliseconds}`;
			setFlags(values => [...values, temp])
			console.log(temp);
			console.log('flags = ',flags)
		}else{
			console.log('start timer to set flags = ',flags)
		}
	}

	const resetTimer = () => {
		setStopWatch({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0})
		setFlags([]);
	}
	
	const {hours, minutes, seconds, milliseconds} = stopWatch;
	return (
		<div>
			<h1>
				{hours.toString().padStart(2, '0')}:
				{minutes.toString().padStart(2, '0')}:
				{seconds.toString().padStart(2, '0')}.
				{milliseconds.toString().padStart(2, '0')}
			</h1>
			<button onClick={handleStartStopEvent}>
				{isRunning? 'pause': 'start'}
			</button>
			<button onClick={recordFlag}>
				flag
			</button>
			<button onClick={resetTimer}>
				reset Timer
			</button>
			<ul>
				{flags?.map((value,id) => 
					<li key={id}>{value}</li>
				)}
			</ul>
		</div>
	)
}
