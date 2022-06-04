import type { LinksFunction } from '@remix-run/node'
import { MainLayout } from '~/components/layout/Main/Main'
import { Projects } from '~/pages/projects/Projects'

import { links as layoutLinks } from '~/components/layout/Main/Main'
import { links as projectsLinks } from '~/pages/projects/Projects'
export const links: LinksFunction = () => {
	return [...layoutLinks(), ...projectsLinks()]
}

export default function Index() {
	return (
		<MainLayout>
			<Projects />
		</MainLayout>
	)
}
