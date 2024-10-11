import Header from "./header/Header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"

export default function taskContainer() {
  return (
    <main>
      <Header />
      <TaskInput />
      <TaskList />
    </main>
  )
}
