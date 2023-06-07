import React, { useState } from "react"
import './index.css'

// type formElement = React.FormEvent<HTMLFormElement>

interface ITask {
  name: string;
  done: boolean;
  id: number;
}

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([])


  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false, id: parseFloat((Math.random() * 1000).toFixed(4)) }]
    setTasks(newTasks)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  const clearTask = (id: number) => {
    const actualizedTasks: ITask[] = tasks.filter(tasksState => tasksState.id !== id)
    setTasks(actualizedTasks)
  }


  const doneTask = (i: number) => {
    const newTasks: ITask[] = [...tasks]
    newTasks[i].done = !newTasks[i].done
    setTasks(newTasks);
  }


  // DAR ESTILO A PARTIR DAQUI!!! 

  return (
    <div className="">

      {/* ----------- */}
      <div className="">
        <form
          className=""
          onSubmit={handleSubmit}
        >
          <input
            className=""
            type="text"
            onChange={e => setNewTask(e.target.value)}
            value={newTask}
          />

          <button className="">SAVE</button>

        </form>
      </div>
      {/* ----------- */}

      {
        tasks.map((t: ITask, i: number) => (

          // ****************
          <div className='' key={t.id}>

            {/* Editar Somente 'text-name' */}
            <h2 className={t.done ? 'task-done text-name' : 'text-name'}>Task: <span>{t.name}</span></h2>

            <button
              className=''
              onClick={() => doneTask(i)}
            >done</button>

            <div
              className=''
              onClick={() => clearTask(t.id)}
            >Clear</div>

          </div>

          // *****************

        ))
      }
    </div>
  )
}

export default App
