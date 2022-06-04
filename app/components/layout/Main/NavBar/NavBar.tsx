import { useState } from 'react'
import cn from 'classnames'
import type { LinksFunction } from '@remix-run/node'
import { Item } from './Item/Item'
import { Header } from './Header/Header'
import { routes } from './routes'

import styles from './styles/navbar.css'
import { links as itemLinks } from './Item/Item'
import { links as resizeLinks, Resize } from './Resize/Resize'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }, ...itemLinks(), ...resizeLinks()]
}

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(true)

	const onToggle = () => {
		console.log('resize')

		setIsOpen(prev => !prev)
	}

	return (
		<div className={cn('navbar', { 'navbar-close': !isOpen })}>
			<Header />

			{/* <Item title='Dashboard' link={HomeRoute} /> */}
			{routes.map(r => (
				<Item key={r.link} icon={r.icon} title={r.title} link={r.link} />
			))}

			<Resize isOpen={isOpen} onResize={onToggle} />
		</div>
	)
}
