import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineMenu } from 'react-icons/ai'
import { FcAlarmClock } from 'react-icons/fc'

export default function Header({setShowMenu}) {

	return (
		<div className='bg-slate-600'>
			<div className={'transition duration-500 w-full'}>
				<ul className='flex'>
					<button onClick={() => setShowMenu(value => !value)} className='p-2 m-2 transition duration-150 rounded-md lg:hidden hover:bg-slate-500'>
						<IconContext.Provider value={{ size: '1.46em', color: "white", style: { verticalAlign: 'middle' } }}>
							<AiOutlineMenu />
						</IconContext.Provider>
					</button>
					<div className='p-2 m-2 text-white tracking-widest text-lg flex items-center space-x-5 transition duration-150 rounded-md hover:bg-slate-500'>
						<IconContext.Provider value={{ size: '1.46em', color: "white", style: { verticalAlign: 'middle' } }}>
							<FcAlarmClock />
						</IconContext.Provider>
						<strong>Clock</strong>
					</div>
				</ul>
			</div>
		</div>
	)
}
