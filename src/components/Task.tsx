import { Trash } from 'phosphor-react';

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <input id="task" type="checkbox" />   

      <label htmlFor="task"> Fazer 50 muscle ups</label>

      <Trash />
    </div>
  );
}