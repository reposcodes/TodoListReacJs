import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TaskForm.css";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName("");
    }
  }

  return (
    <form className="container-form" onSubmit={handleSubmit}>
      <button className="form-button" type="submit">
        <MdAdd size={25} />
      </button>
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="Digite sua tarefa..."
      />
    </form>
  );
}
