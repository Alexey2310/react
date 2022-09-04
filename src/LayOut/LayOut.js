import React from 'react'

import { Header } from '../Components/Header/Header'
const links =['Link1','Link2','Link3','Link4']
const sublinks=['SubLink1','SubLink2','SubLink3']
export const LayOut = ({ children }) => {

	return (
		<>
			 <Header links={links} sublinks={sublinks}/>
			<main>
				<div className='container'>
          <h1 className='main-title'>Main title</h1>
          {children}
          </div>
			</main>
			<footer>Some footer</footer>
		</>
	)
}
