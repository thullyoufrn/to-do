import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Infos } from './components/Infos';
import { NoTask } from './components/NoTask';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css'

interface Tasks {
  id: number;
  taskTitle: string;
  isComplete: boolean;
}

const tasks: Tasks[] = [
  {
    id: 1,
    taskTitle: "Study the React fundamentals",
    isComplete: true,
  },
  {
    id: 2,
    taskTitle: "Build a social media feed with React and TypeScript",
    isComplete: true,
  },
  {
    id: 3,
    taskTitle: "Build a to-do list with React and TypeScript",
    isComplete: false,
  },
  {
    id: 4,
    taskTitle: "Study how to create a SPA with React",
    isComplete: false,
  }
];

export function App() {
  const hasTask: boolean = tasks.length == 0 ? false : true;

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <NewTask />
        
        <section className={styles.tasks}>
          <Infos />     

          {/* If there is no task, the NoTask component will be rendered */}
          {hasTask === true ? 
            tasks.map(task => {
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  taskTitle={task.taskTitle}
                  isComplete={task.isComplete}
                />
              ) 
            }) 
            : <NoTask />
          }
        </section>
      </main>
    </div>
  );
}