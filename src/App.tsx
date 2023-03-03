import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Infos } from './components/Infos';
import { NoTask } from './components/NoTask';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css'

import { ChangeEvent, FormEvent, useState } from 'react';

interface taskStructure {
  id: number;
  taskTitle: string;
  isComplete: boolean;
}

const initialTasks: taskStructure[] = [
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
  const [tasks, setTasks] = useState<taskStructure[]>(initialTasks)

  const [newTaskTitle, setNewTaskTitle] = useState<string>('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    // The reduce method will search for the biggest task id
    const biggestId = tasks.reduce((acc, task) => {
      return task.id > acc ? task.id : acc
    }, 0)
    
    const newTaskId = biggestId + 1;

    const newTask = {
      id: newTaskId,
      taskTitle: newTaskTitle,
      isComplete: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('');
  }
  
  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskTitle(event.target.value)
  }
  
  const hasTask = tasks.length !== 0;

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <NewTask 
          onNewTaskChange={handleNewTaskChange}
          newTaskTitle={newTaskTitle}
          onCreateNewTask={handleCreateNewTask}
        />
        
        <section>
          <Infos />     

          {hasTask ? 
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
          : <NoTask />}
        </section>
      </main>
    </div>
  );
}