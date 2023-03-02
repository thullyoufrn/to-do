import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTask.module.css'

export interface Tasks {
  id: number;
  taskTitle: string;
  isComplete: boolean;
}

export const tasks: Tasks[] = [
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

export const [tasksList, setTasksList] = useState<Tasks[]>(tasks)

const [newTaskTitle, setNewTaskTitle] = useState<string>('')

export function NewTask() {

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: 5,
      taskTitle: newTaskTitle,
      isComplete: false,
    }

    setTasksList([...tasksList, newTask])
    setNewTaskTitle('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskTitle(event.target.value)
  }

  return (
    <section>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
        {/* Maybe add auto height adjust later */}
        <textarea 
          placeholder='Add a new task'
          onChange={handleNewTaskChange}
        />

        <button type="submit">
          Add
          <PlusCircle size={30} weight='fill' />
        </button>      
      </form>
    </section>
  );
}