import styles from './Footer.module.css'

export default function footer() {
  return (
    <footer>
      <code className={styles.footer}>
        Tu as éliminé <span id="completed-count">0</span> tâches sur <span id="total-count">0</span> tâches
      </code>
    </footer>
  )
}
