import cn from 'classnames'
import type { LinksFunction } from '@remix-run/node'
import type { FC, MouseEvent } from 'react'

import styles from './styles/pin.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

type Props = {
	pin: boolean
	onPin: (event: MouseEvent<HTMLDivElement>) => void
}

export const Pin: FC<Props> = ({ pin, onPin }) => {
	return (
		<div className='pin' onClick={onPin}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 123.14 123.54'
				className={cn('pin__icon', { 'pin__icon--pinned': pin })}
			>
				<path d='M121.59,36.81,86.3,1.52c-3-3-7.77.09-9.2,2.74-.24.45.19.86-.2,3.91a46.16,46.16,0,0,1-2.72,11.32l-15.7,15.7c-6.26,6.27-15.22,3.48-22.87-.32-1.61-.8-3.68-2.57-5.47-.78l-6.65,6.65a2.5,2.5,0,0,0,0,3.53l55.79,55.78a2.5,2.5,0,0,0,3.53,0l6.64-6.65c1.77-1.77-.49-4.06-1.41-6-3.4-7-6.45-16.42-.78-22.09L103.65,49A84.08,84.08,0,0,1,115,46.38c3.09-.49,3.47-.1,3.91-.39,2.7-1.75,5.7-6.16,2.68-9.18ZM53.86,82.39,41.15,69.69.38,121.25l1.92,1.91L53.86,82.39Z' />
			</svg>
			<p className='pin__toast'>{pin ? 'unpin project' : 'pin the project'}</p>
		</div>
	)
}
