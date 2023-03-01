import { Trash } from 'phosphor-react';

import check from '../assets/checkbox done.svg'

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.taskToDo}>
      {/* Turn the id unique */}
      <input id="task" type="checkbox" />

      {/* Turn the htmlFor unique */}
      <label className={styles.taskName} htmlFor="task">
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </label>

      <button title='Delete task'>
        <Trash size={18}/>
      </button>
    </div>
  );
}