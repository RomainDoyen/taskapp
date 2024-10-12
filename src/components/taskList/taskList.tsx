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
  
  return (
    <div className='box'>
      <h2 className={styles.title}>Il te reste encore {incompletedTaskCount} tâches à accomplir !</h2>
        {taskList && taskList.length > 0 && (
          <ul className={styles.container}>
            {renderTaskList}
          </ul>
        )}
    </div>
  )
}
