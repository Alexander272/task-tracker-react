import type { LinksFunction } from '@remix-run/node'
import cn from 'classnames'
import type { FC } from 'react'

import styles from './styles/resize.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

type Props = {
	isOpen: boolean
	onResize: () => void
}

export const Resize: FC<Props> = ({ isOpen, onResize }) => {
	return (
		<div className={cn('navbar__resize', { 'navbar__resize-close': !isOpen })} onClick={onResize}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				shapeRendering='geometricPrecision'
				textRendering='geometricPrecision'
				imageRendering='optimizeQuality'
				fillRule='evenodd'
				clipRule='evenodd'
				viewBox='0 0 312 511.42'
				className='navbar__resize-icon'
			>
				<path fillRule='nonzero' d='M35.54 0 312 252.82 29.84 511.42 0 478.8l246.54-225.94L5.7 32.62z' />
			</svg>
		</div>
	)
}
