export interface IProject {
	id: string
	title: string
	started: number
	deadline?: number
	priority: Priority
	status: Status
	pinned: boolean
	allTask: number
	doneTask: number
	members?: any[]
}

export type Status = 'In process' | 'On hold' | 'Canceled' | 'Completed' | 'Pending'
export type Priority = 0 | 1 | 2
