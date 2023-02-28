import styles from './Infos.module.css'

export function Infos() {
  return (
    <div className={styles.infos}>
        <div className={styles.createdTasks}>
          Created tasks
          <div className={styles.counter}>0</div>
        </div>

        <div className={styles.doneTasks}>
          Done
          <div className={styles.counter}>0</div>
        </div>
    </div>
  );
}