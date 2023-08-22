import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({children}) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className='w-screen transition duration-150 ease-linear font-fjalla bg-pritxt text-pribg dark:text-pritxt dark:bg-pribg'>
			<div className='layoutsection w-full h-screen flex flex-col'>
				<Header setShowMenu={setShowMenu}/>
				<div className='flex max-h-screen h-full'>
					<Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
					{children}
				</div>
			</div>
		</div>
	)
}
