import type { LinksFunction } from '@remix-run/node'
import type { FC } from 'react'
import cn from 'classnames'
import type { Status } from '~/types/project'

import styles from './styles/progress.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

type Props = {
	title: string
	progress: number
	status: Status
}

export const Progress: FC<Props> = ({ title, progress, status }) => {
	const style = { width: progress + '%' }

	return (
		<div
			className={cn('progress', {
				'progress--completed': status === 'Completed',
				'progress--canceled': status === 'Canceled',
				'progress--process': status === 'In process',
				'progress--hold': status === 'On hold',
			})}
		>
			<div className='progress__header'>
				<p className='progress__title'>{title}</p>
				<p className='progress__status'>{Math.round(progress)}%</p>
			</div>
			<div className='progress__line'>
				<div className='progress__progress' style={style}></div>
			</div>
		</div>
	)
}
