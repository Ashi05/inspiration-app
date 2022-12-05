import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEntry, removeEntry, toggleEntryDone } from "./TodosSlice";

export default function Todos() {
  const [newEntry, setNewEntry] = useState("");
  const { entries } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (newEntry === "") {
      return;
    }
    dispatch(addEntry(newEntry));
    setNewEntry("");
  };

  return (
    <div>
      <div className="todo-entry">
        <h1>What's on your mind today?</h1>
        <form action="" onSubmit={onFormSubmit}>
          <input
            type="text"
            value={newEntry}
            id=""
            onChange={(e) => setNewEntry(e.target.value)}
          />
        </form>
      </div>
      <ul className="todo-entrylist">
        {entries.map(({ text, id, isDone }, i) => (
          <li key={text} id={i} className={isDone === true ? "entry-done" : ""}>
            <div>
              {text}
              <button
                className="remove"
                onClick={() => dispatch(removeEntry(id))}
              >
                Remove
              </button>
              <button
                className="done"
                onClick={() => dispatch(toggleEntryDone(id))}
              >
                done
                {/* {isDone ? "Redo" : "Done"} */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
