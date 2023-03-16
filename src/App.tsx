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
    taskTitle: "Estudar TypeScript",
    isComplete: false,
  },
  {
    id: 2,
    taskTitle: "Estudar JavaScript",
    isComplete: true,
  },
]

export function App() {
  const [tasks, setTasks] = useState<taskStructure[]>(initialTasks)

  const [newTaskTitle, setNewTaskTitle] = useState<string>('')

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskTitle(event.target.value)
  }

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

  function deleteTask(taskToDeleteId: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDeleteId
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function changeTaskSituation(taskToChangeSituation: number) {
    const tasksWithNewSituations = tasks.map(task => {
      if(task.id === taskToChangeSituation) {
        task.isComplete = !task.isComplete
      }

      return task
    })

    setTasks(tasksWithNewSituations);
  }

  const createdTasks = tasks.length

  const doneTasks = tasks.reduce((acc, task) => {
    return task.isComplete === true ? acc + 1 : acc
  }, 0)
  
  const hasTask = tasks.length !== 0;

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTask 
          handleNewTaskChange={handleNewTaskChange}
          newTaskTitle={newTaskTitle}
          handleCreateNewTask={handleCreateNewTask}
        />
        
        <section>
          <Infos 
            createdTasks={createdTasks}
            doneTasks={doneTasks}
          />     

          {hasTask ? 
            tasks.map(task => {
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  taskTitle={task.taskTitle}
                  isComplete={task.isComplete}
                  onDeleteTask={deleteTask}
                  onChangeTaskSituation={changeTaskSituation}
                />
              ) 
            }) 
          : <NoTask />}
        </section>
      </main>
    </div>
  );
}
