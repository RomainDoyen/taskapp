import styles from './TaskList.module.css'
import TaskItem from '../taskItem/taskItem'

export default function taskList() {
  return (
    <div className='box'>
      <h2 className={styles.title}>Titre</h2>
      <ul className={styles.container}>
        <TaskItem />
      </ul>
    </div>
  )
}
