import { TaskType } from '../../types/types'
import styles from './TaskItem.module.css'

type TaskItemProps = {
  task: TaskType
  editTask: (id: number, completedValue: boolean) => void
  deleteTask: (id: number) => void
}

export default function taskItem({ task, editTask, deleteTask }: TaskItemProps) {
  return (
    <li className={`${styles.container} ${styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>
          {task.id}
        </div>
        <div className={styles.contentDefault}>
          {task.title}
        </div>
      </div>
      <button className='button-primary'>
        X
      </button>
    </li>
  )
}
