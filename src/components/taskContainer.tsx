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
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    }
    setTaskList([...taskList, newTask])
  }

  const editTask = (id: number, completedValue: boolean) => {
    setTaskList(
      taskList.map((task: TaskType) => {
        if (task.id === id) {
          return { ...task, completed: completedValue }
        }
        return task
      })
    )
  }

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task: TaskType) => task.id !== id))
  }

  const getTaskCounts = () => {
    const completedTaskCount = taskList.filter((task: TaskType) => task.completed).length
    const incompletedTaskCount = taskList.length - completedTaskCount
    return { completedTaskCount, incompletedTaskCount }
  }

  const { completedTaskCount, incompletedTaskCount } = getTaskCounts();

  // console.log(completedTaskCount, incompletedTaskCount)

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList 
        taskList={taskList} 
        editTask={editTask} 
        deleteTask={deleteTask}
        incompletedTaskCount={incompletedTaskCount}
      />
      <Footer completedTaskCount={completedTaskCount} />
    </main>
  )
}
