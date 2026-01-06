import React, { useReducer } from "react";
import "../style/ToDoList.css";

const initialState = {
  draft: "",
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "changed_draft":
      return { ...state, draft: action.nextDraft };

    case "added_todo": {
      const text = state.draft.trim();
      if (!text) return state;

      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };

      return {
        ...state,
        draft: "",
        todos: [newTodo, ...state.todos],
      };
    }

    case "toggled_todo":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        ),
      };

    case "removed_todo":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id),
      };

    default:
      return state;
  }
}

export default function ToDoList({ setPage }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "added_todo" });
  }

  return (
    <div className="todoApp">
      <h1 className="todoTitle">To Do List</h1>
      <form className="todoControls" onSubmit={handleSubmit}>
        <input
          className="todoInput"
          type="text"
          placeholder="Add a task..."
          value={state.draft}
          onChange={(e) =>
            dispatch({ type: "changed_draft", nextDraft: e.target.value })
          }
        />
        <button className="todoAddBtn" type="submit">
          Add
        </button>
      </form>
      <ul className="todoList">
        {state.todos.map((t) => (
          <li className="todoItem" key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => dispatch({ type: "toggled_todo", id: t.id })}
            />

            <span
              className={t.completed ? "todoText todoTextDone" : "todoText"}
            >
              {t.text}
            </span>

            <button
              className="todoRemoveBtn"
              type="button"
              onClick={() => dispatch({ type: "removed_todo", id: t.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="todoNextBtn"
        type="button"
        onClick={() => setPage("RandomPassword")}
      >
        Next
      </button>
    </div>
  );
}
