import { Link } from '@remix-run/react'

export const Home = () => {
	return (
		<div>
			<h1>Welcome to Remix</h1>
			<Link to={'test'}>Test</Link>
		</div>
	)
}
