import type { LinksFunction } from '@remix-run/node'
import { Item } from './Item/Item'
import { projects } from './mock'

import styles from './styles/projects.css'
import { links as itemLinks } from './Item/Item'
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }, ...itemLinks()]
}

export const Projects = () => {
	return (
		<div className='projects'>
			<h1 className='projects__title'>Projects</h1>

			<div className='project__filter'>
				{/* 
					Блок для сортировки проектов (поиска по названию)
					пример по ссылке: https://dribbble.com/shots/14654003-todo-vu-Project-Management

					надо бы тут еще кнопочку для создания проекта сделать
				*/}
			</div>

			<div className='projects__container'>
				{projects.map(p => (
					<Item key={p.id} project={p} />
				))}
			</div>
		</div>
	)
}
