import TaskItem from '../taskItem/taskItem'
import styles from './TaskList.module.css'

export default function taskList() {
  return (
    <div className='box'>
      <h2 className={styles.title}>Il te reste encore x tâches à accomplir !</h2>
      <ul className={styles.container}>
        <TaskItem />
      </ul>
    </div>
  )
}
