import type { LinksFunction } from '@remix-run/node'
import type { FC } from 'react'
import { NavBar } from './NavBar/NavBar'

import { links as navbarLinks } from './NavBar/NavBar'
export const links: LinksFunction = () => {
	return [...navbarLinks()]
}

export const MainLayout: FC = ({ children }) => {
	return (
		<>
			<NavBar />
			<main className='app__main'>{children}</main>
		</>
	)
}
