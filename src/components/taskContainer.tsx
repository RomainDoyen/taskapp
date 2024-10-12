/* eslint-disable react-hooks/rules-of-hooks */
import Header from "./header/Header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"
import Footer from "./footer/footer"
import { useState } from "react"
import { TaskType } from "../types/types"

export default function taskContainer() {

  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const addTask = (title: string) => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      completed: false,
    }
    setTaskList([...taskList, newTask])
  }

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList />
      <Footer />
    </main>
  )
}
