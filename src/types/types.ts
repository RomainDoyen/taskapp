export type TaskType = {
  id: number,
  title: string,
  completed: boolean,
}

export type addTaskType = {
  addTask: (title: string) => void
}