import styles from './Footer.module.css'
import { FooterProps } from '../../types/types'

export default function footer({ completedTaskCount }: FooterProps) {

  if (completedTaskCount) {
    return (
      <footer>
        <code className={styles.footer}>
          Tu as éliminé <span id="completed-count">{completedTaskCount}</span> tâche
          {completedTaskCount > 1 ? "s" : ""} !
        </code>
      </footer>
    )
  }
  return null;
}
