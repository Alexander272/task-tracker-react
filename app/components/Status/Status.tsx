import cn from 'classnames'
import type { LinksFunction } from '@remix-run/node'
import type { FC } from 'react'
import type { Status as StatusType } from '~/types/project'

import styles from './styles/status.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

type Props = {
	status: StatusType
}

export const Status: FC<Props> = ({ status }) => {
	return (
		<div
			className={cn('status', {
				'status--completed': status === 'Completed',
				'status--canceled': status === 'Canceled',
				'status--process': status === 'In process',
				'status--hold': status === 'On hold',
			})}
		>
			<p>{status}</p>
		</div>
	)
}
