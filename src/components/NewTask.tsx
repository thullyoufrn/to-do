import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <section className={styles.newTask}>
      {/* Maybe add auto height adjust later */}
      <textarea 
        className={styles.input}
        placeholder='Add a new task'
      />

      <button className={styles.button}>
        <strong>Add</strong>
        <PlusCircle size={30} weight='fill' />
      </button>      
    </section>
  );
}