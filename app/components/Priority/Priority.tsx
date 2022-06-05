import cn from 'classnames'
import type { LinksFunction } from '@remix-run/node'
import type { FC } from 'react'
import type { Priority as PriorityType } from '~/types/project'

import styles from './styles/priority.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

const PriorityText = {
	0: 'High priority',
	1: 'Medium priority',
	2: 'Low priority',
}

type Props = {
	priority: PriorityType
}

export const Priority: FC<Props> = ({ priority }) => {
	return (
		<div
			className={cn('priority', {
				'priority--high': priority === 0,
				'priority--medium': priority === 1,
				'priority--low': priority === 2,
			})}
		>
			<p>{PriorityText[priority]}</p>
		</div>
	)
}
