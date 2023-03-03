import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css'

// Is this interface right?
interface NewTaskProps {
  onCreateNewTask: Function;
  newTaskTitle: string;
  onNewTaskChange: Function;
}

export function NewTask({ onCreateNewTask, newTaskTitle, onNewTaskChange }: NewTaskProps) {
  const isNewTaskEmpty = newTaskTitle.length === 0;

  return (
    <section>
      <form onSubmit={onCreateNewTask} className={styles.newTask}>
        {/* Maybe add auto height adjust later */}
        <textarea 
          placeholder='Add a new task'
          value={newTaskTitle}
          onChange={onNewTaskChange}
          required
        />

        <button type="submit" disabled={isNewTaskEmpty}>
          Add
          <PlusCircle size={30} weight='fill' />
        </button>      
      </form>
    </section>
  );
}