import type { IProject } from '~/types/project'

export const projects: IProject[] = [
	{
		id: '1',
		title: 'Task Tracker',
		started: 1654340104665,
		deadline: 0,
		status: 'In process',
		priority: 1,
		allTask: 56,
		doneTask: 3,
		pinned: true,
	},
	{
		id: '2',
		title: 'Task Tracker copy',
		started: 1654340104665,
		deadline: 0,
		status: 'On hold',
		priority: 1,
		allTask: 56,
		doneTask: 3,
		pinned: false,
	},
	{
		id: '3',
		title: 'Task Tracker copy',
		started: 1654340104665,
		deadline: 0,
		status: 'Canceled',
		priority: 1,
		allTask: 56,
		doneTask: 3,
		pinned: false,
	},
	{
		id: '4',
		title: 'Task Tracker copy',
		started: 1654340104665,
		deadline: 1654340104665,
		status: 'Completed',
		priority: 1,
		allTask: 56,
		doneTask: 3,
		pinned: false,
	},
	{
		id: '5',
		title: 'Task Tracker copy',
		started: 1654340104665,
		deadline: 0,
		status: 'In process',
		priority: 1,
		allTask: 56,
		doneTask: 3,
		pinned: false,
	},
]