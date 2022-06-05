import type { LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { MainLayout } from '~/components/layout/Main/Main'

import { links as layoutLinks } from '~/components/layout/Main/Main'
export const links: LinksFunction = () => {
	return [...layoutLinks()]
}

export default function Projects() {
	return (
		<MainLayout>
			<Outlet />
		</MainLayout>
	)
}
