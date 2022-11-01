import { useState } from "react";

export default function Todos() {
  const [entry, setEntry] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(entry);
  };

  return (
    <div>
      <div className="todo-entry">
        <h1>What's on your mind today?</h1>
        <form action="" onSubmit={onFormSubmit}>
          <input
            type="text"
            value={entry}
            id=""
            onChange={(e) => setEntry(e.target.value)}
          />
        </form>
      </div>
      <div className="todo-entrylist">{entry}</div>
    </div>
  );
}
