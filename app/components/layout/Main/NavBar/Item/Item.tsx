import type { LinksFunction } from '@remix-run/node'
import { NavLink } from '@remix-run/react'
import type { FC } from 'react'

import styles from './styles/item.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

type Props = {
	icon?: JSX.Element
	title: string
	link: string
}

export const Item: FC<Props> = ({ icon, title, link }) => {
	return (
		<NavLink
			to={link}
			className={({ isActive }) => ['navbar__item', isActive ? 'navbar__item--active' : null].join(' ')}
		>
			{icon} <span className='navbar__item-text'>{title}</span>
		</NavLink>
	)
}
