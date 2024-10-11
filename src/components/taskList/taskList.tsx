import styles from './TaskList.module.css'

export default function taskList() {
  return (
    <div className='box'>
      <h2 className={styles.title}>Titre</h2>
      <ul className={styles.container}>
        Liste item
      </ul>
    </div>
  )
}
