import TaskItem from '../taskItem/taskItem'
import styles from './TaskList.module.css'
import { TaskType, TaskListProps } from '../../types/types'

export default function taskList({ taskList, editTask, deleteTask, incompletedTaskCount }: TaskListProps) {
  
  const renderTaskList = taskList.map((task: TaskType) => {
    return (
      <TaskItem 
        key={task.id} 
        task={task} 
        editTask={editTask} 
        deleteTask={deleteTask}
      />
    )
  })

  if (taskList && taskList.length > 0) {
    return (
      <div className='box'>
        <h2 className={styles.title}>
          {incompletedTaskCount > 0 && (
            <>Il te reste encore <span className='important'>{incompletedTaskCount}</span> tâches à accomplir !</>
          )}
          {incompletedTaskCount === 0 && (
            <>Génial, tu as accompli toutes les tâches !</>
          )}
        </h2>
        <ul className={styles.container}>
          {renderTaskList}
        </ul>
      </div>
    )
  }
  
  return (
    <div className='box'>
      <h2 className={styles.emptyState}>Salut, tu n'as rien à faire !</h2>
    </div>
  )
}
