import { useEffect, useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HerderComponent";
import TaskForm from "./components/TaskForm/TaskForm";
import Task from "./components/TaskComponent/TaskComponent";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTasks(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((_, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];

      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function renameTasks(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;

    if (percentage === 0) {
      return "Tenha um dia de vencedor, liste e faça suas tarefas! 🙏";
    }

    if (percentage === 100) {
      return "Bom trabalho por hoje! 🏝";
    }
    return "Continue assim 💪🏻";
  }

  return (
    <main>
      <HeaderComponent />

      <span>
        {numberComplete} / {numberTotal} Completas
      </span>
      <p>{getMessage()}</p>

      <TaskForm onAdd={addTasks} />

      {tasks.map((task, index) => (
        <Task
          {...task}
          onRename={(newName) => renameTasks(index, newName)}
          onTrash={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
        />
      ))}
    </main>
  );
}

export default App;
