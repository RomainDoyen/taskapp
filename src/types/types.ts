export type TaskType = {
  id: number,
  title: string,
  completed: boolean,
}

export type addTaskType = {
  addTask: (title: string) => void
}

export type TaskListProps = {
  taskList: TaskType[]
  editTask: (id: number, completedValue: boolean) => void
  deleteTask: (id: number) => void
  incompletedTaskCount: number
}