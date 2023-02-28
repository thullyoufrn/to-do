import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Infos } from './components/Infos';
import { NoTask } from './components/NoTask';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <NewTask />
        
        <section className={styles.tasks}>
          <Infos /> 

          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </section>
      </main>
    </div>
  );
}