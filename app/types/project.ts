export interface IProject {
	id: string
	title: string
	started: number
	deadline?: number
	priority: 0 | 1 | 2
	status: Status
	pinned: boolean
	allTask: number
	doneTask: number
	members?: any[]
}

export type Status = 'In process' | 'On hold' | 'Canceled' | 'Completed' | 'Pending'

// high priority
// medium priority
// low priority
