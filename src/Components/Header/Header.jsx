import React from 'react'
import logo from '../../assets/logo/logo.png'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { findAndAddClass } from '../../helperfunnction/helper'
import {Link} from 'react-router-dom'
import './Header.scss'
export const Header = ({ links, sublinks }) => {
	const { isMobile, isTablet, isDesctop } = useMatchMedia()
	const flexOrNotClasses = ['menu__list']
	const mobileOrPc = []
	if (isMobile) {
		mobileOrPc.push('mobile')
	}  else {
		mobileOrPc.push('desctop')
	}
	if (isDesctop || isTablet) {
		flexOrNotClasses.push('flex')
	}
  function addClass(e) {
const item =e.target
item.parentElement.classList.toggle('active')

  }

	return (
		<header className={mobileOrPc.join(' ')}>
			<a href='/' className='header-logo'>
				<img src={logo} alt='someimg' />
			</a>
			<div className='header-menu'>
				<div className='menu-icon' onClick={(event)=>findAndAddClass(event,'menu__body','active')}>
					<span> </span>
				</div>
				<nav className='menu__body'>
					<ul className={flexOrNotClasses.join(' ')}>
						{links.map((link, index) => {
							if (link.name === 'Catalog') {
								return (
									<li key={index}>
										<Link to={link.path} className='menu__link'>
											{link.name}
										</Link>
                    <span className="menu__arrow" onClick={addClass}></span>
										<ul className='menu__list__sub'>
											{sublinks.map((sublink, index) => (
												<li key={index}>
													<a href='/' className='menu__link__sub'>
														{sublink}
													</a>
												</li>
											))}
										</ul>
									</li>
								)
							}
							return (
								<li key={index}>
									<Link to={link.path} className='menu__link'>
										{link.name}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</header>
	)
}
