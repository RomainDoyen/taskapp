import styles from './taskInput.module.css'

export default function taskInput() {
  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
      <form className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ajouter une tâche"
        />
        <button className="button-primary" type='submit'>Ajouter</button>
      </form>
    </div>
  )
}
