import styles from './TaskItem.module.css'

export default function taskItem() {
  return (
    <li className={`${styles.container} ${styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>
          numéro
        </div>
        <div className={styles.contentDefault}>
          Titre
        </div>
      </div>
      <button className='button-primary'>
        X
      </button>
    </li>
  )
}
