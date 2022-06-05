import type { LinksFunction } from '@remix-run/node'
import { useCatch } from '@remix-run/react'
import { Projects } from '~/pages/projects/Projects'

import { links as projectsLinks } from '~/pages/projects/Projects'
export const links: LinksFunction = () => {
	return [...projectsLinks()]
}

export default function Index() {
	return <Projects />
}

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error)

	return <div>An unexpected error occurred: {error.message}</div>
}

export function CatchBoundary() {
	const caught = useCatch()

	if (caught.status === 404) {
		return <div>Project not found</div>
	}

	throw new Error(`Unexpected caught response with status: ${caught.status}`)
}
