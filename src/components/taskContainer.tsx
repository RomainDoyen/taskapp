import Header from "./header/Header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"
import Footer from "./footer/footer"

export default function taskContainer() {
  return (
    <main>
      <Header />
      <TaskInput />
      <TaskList />
      <Footer />
    </main>
  )
}
