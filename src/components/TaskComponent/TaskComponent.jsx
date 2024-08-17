import { useState } from "react";
import Checkbox from "../CheckboxComponent/CheckboxComponent";
import { MdDelete } from "react-icons/md";
import "./TaskComponent.css";

export default function Task({ name, done, onToggle, onTrash, onRename }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={"task " + (done ? "done" : "")}>
      <div className="container-task">
        <Checkbox checked={done} onClick={() => onToggle(!done)} />

        {!editMode && (
          <div
            className="task-name"
            onClick={() => setEditMode((prev) => !prev)}
          >
            <span>{name}</span>
          </div>
        )}

        {editMode && (
          <form
            className="task-form"
            onSubmit={(ev) => {
              ev.preventDefault();
              setEditMode(false);
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(ev) => onRename(ev.target.value)}
            />
          </form>
        )}
      </div>

      <button className="trash" onClick={onTrash}>
        <MdDelete size={30} color="#888888" />
      </button>
    </div>
  );
}
