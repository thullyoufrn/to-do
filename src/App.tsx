import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Infos } from './components/Infos';
import { NoTask } from './components/NoTask';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css'

import { tasksList } from './components/NewTask'

export function App() {
  const hasTask: boolean = tasksList.length !== 0;

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <NewTask />
        
        <section>
          <Infos />     

          {hasTask ? 
            tasksList.map(task => {
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  taskTitle={task.taskTitle}
                  isComplete={task.isComplete}
                />
              ) 
            }) 
          : <NoTask />}
        </section>
      </main>
    </div>
  );
}