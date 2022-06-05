import type { LinksFunction } from '@remix-run/node'
import { Project } from '~/pages/project/Project'

import { links as projectLinks } from '~/pages/project/Project'
export const links: LinksFunction = () => {
	return [...projectLinks()]
}

export default function CurProject() {
	return <Project />
}

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error)

	return <div>An unexpected error occurred: {error.message}</div>
}
