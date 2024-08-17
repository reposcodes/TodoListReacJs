import "./CheckboxComponent.css";
import { FaSquare, FaCheckSquare } from "react-icons/fa";

export default function Checkbox({ checked = false, onClick }) {
  return (
    <div onClick={onClick}>
      {!checked && (
        <div className="checkbox unchecked">
          <FaSquare size={24} color="#4a5568" />
        </div>
      )}

      {checked && (
        <div className="checkbox checked">
          <FaCheckSquare size={24} color="#38A169" />
        </div>
      )}
    </div>
  );
}
