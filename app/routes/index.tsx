import type { LinksFunction } from '@remix-run/node'
import { Home } from '~/pages/home/Home'
import { MainLayout } from '~/components/layout/Main/Main'

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
