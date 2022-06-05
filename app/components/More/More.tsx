import type { LinksFunction } from '@remix-run/node'
import type { FC, MouseEvent } from 'react'
import cn from 'classnames'
import { useState } from 'react'

import styles from './styles/more.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

export const More: FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation()
		setIsOpen(prev => !prev)
	}

	return (
		<div className='more' onClick={onOpen}>
			<svg
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 0 29.957 122.88'
				xmlSpace='preserve'
				className='more__icon'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M14.978,0c8.27,0,14.979,6.708,14.979,14.979c0,8.27-6.709,14.976-14.979,14.976 C6.708,29.954,0,23.249,0,14.979C0,6.708,6.708,0,14.978,0L14.978,0z M14.978,92.926c8.27,0,14.979,6.708,14.979,14.979 s-6.709,14.976-14.979,14.976C6.708,122.88,0,116.175,0,107.904S6.708,92.926,14.978,92.926L14.978,92.926z M14.978,46.463 c8.27,0,14.979,6.708,14.979,14.979s-6.709,14.978-14.979,14.978C6.708,76.419,0,69.712,0,61.441S6.708,46.463,14.978,46.463 L14.978,46.463z'
				/>
			</svg>
			<div className={cn('more__container', { 'more__container--open': isOpen })}>{children}</div>
		</div>
	)
}
