import type { LinksFunction } from '@remix-run/node'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { HomeRoute } from '~/constants/routes'

import styles from './styles/not-found.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

type Props = {
	status: number
	text: string
}

export const NotFound: FC<Props> = ({ status, text }) => {
	return (
		<div className='not-found'>
			<div className='not-found__status'>{status}</div>
			<div className='not-found__text-block'>
				<h1 className='not-found__title'>Page not found</h1>
				<p className='not-found__text'>Please check the URL in the address bar and try again.</p>
			</div>
			<div className='not-found__btns'>
				<Link to={HomeRoute} className='not-found__link'>
					Go back home &#10140;
				</Link>
			</div>
		</div>
	)
}
