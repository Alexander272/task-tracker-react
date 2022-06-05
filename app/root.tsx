import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from '@remix-run/react'
import { links as notFoundLinks, NotFound } from './pages/not-found/NotFound'

import styles from './styles/app.global.css'
export let links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Taskee: Task Tracker',
	viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body className='app'>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

export function CatchBoundary() {
	const caught = useCatch()

	links = () => {
		return [{ rel: 'stylesheet', href: styles }, ...notFoundLinks()]
	}

	return (
		<html>
			<head>
				<title>Oops!</title>
				<Meta />
				<Links />
			</head>
			<body className='app'>
				<NotFound status={caught.status} text={caught.statusText} />
				<Scripts />
			</body>
		</html>
	)
}
