/* eslint-disable react-hooks/rules-of-hooks */
import styles from './taskInput.module.css'
import { useState } from 'react'
import { addTaskType } from '../../types/types';

export default function taskInput({ addTask }: addTaskType) {

  const [task, setTask] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  function hanleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (task.trim()) {
      addTask(task)
      setTask('')
    } else {
      alert('Ajoutez une tâche')
    }
  }

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
      <form className={styles.container} onSubmit={hanleAddTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ajouter une tâche"
          onChange={handleInputChange}
          value={task}
        />
        <button className="button-primary" type='submit'>Ajouter</button>
      </form>
    </div>
  )
}
