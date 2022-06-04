import type { LinksFunction } from '@remix-run/node'
import { MainLayout } from '~/components/layout/Main/Main'
import { Home } from '~/components/pages/home/Home'

import { links as layoutLinks } from '~/components/layout/Main/Main'
export const links: LinksFunction = () => {
	return [...layoutLinks()]
}

export default function Index() {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	)
}
