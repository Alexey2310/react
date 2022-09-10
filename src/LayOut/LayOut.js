import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Components/Header/Header'
const links = [
	{ name: 'Main', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Contacts', path: '/contacts' },
	{name:'Catalog',path:'/catalog'}
]
const sublinks = ['SubLink1', 'SubLink2', 'SubLink3']
export const LayOut = ({ children }) => {
	return (
		<>
			<Header links={links} sublinks={sublinks} />
			<main>
				<div className='container'>
					<Outlet />
				</div>
			</main>
			<footer>Some footer</footer>
		</>
	)
}
