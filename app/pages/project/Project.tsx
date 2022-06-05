import type { LinksFunction } from '@remix-run/node'

import styles from './styles/project.css'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

export const Project = () => {
	return <div>Project</div>
}
