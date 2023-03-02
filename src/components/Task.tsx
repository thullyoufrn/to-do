import { Trash } from 'phosphor-react';

import styles from './Task.module.css'

interface TaskProps {
  id: number;
  taskTitle: string;
  isComplete: boolean;
}

// Prop "id" is useful to make input and label unique
export function Task({ id, taskTitle, isComplete }: TaskProps) {
  return (
    <div className={styles.taskToDo}>
      <div>
        <input id={""+id+""} type="checkbox" />

        <label className={styles.taskTitle} htmlFor={""+id+""}>
          {taskTitle}
        </label>  
      </div>

      <button title='Delete task'>
        <Trash size={18}/>
      </button>
    </div>
  );
}