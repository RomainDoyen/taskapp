import styles from './Header.module.css'
import logo from '../../assets/icon48.png'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={logo} alt="logo" width={50} height={50} />
        <div>
          <h1>Task App</h1>
          <div className="color-gray">
            <code>Gérez vos tâches quotidiennes</code>
            </div>
        </div>
      </div>
      <code className="color-primary">
        v1.0
      </code>
    </div>
  )
}
