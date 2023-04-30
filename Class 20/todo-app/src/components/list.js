import { useEffect, useState } from "react";

const List = (props) => {
  const [todos, updateTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [currentIdx, setCurerentIdx] = useState(-1);

  useEffect(() => {
    console.log("Re-rendered");
  });

  useEffect(() => {
    console.log("Mounted");
    fetch("https://dummyjson.com/users/15/todos")
      .then((res) => res.json())
      .then((data) => {
        const initialData = data.todos.map((todo) => ({
          id: todo.id,
          title: todo.todo,
          completed: todo.completed,
        }));
        updateTodos(initialData);
      });
  }, []);

  // const [state, setState] = useState();
  const handleRandomAdd = (e) => {
    const newTodo = { title: `Todo ${todos.length + 1}` };
    const updateFn = (oldTodos) => [...oldTodos, newTodo];
    updateTodos(updateFn);
  };

  const handleAdd = () => {
    const newTodo = { title: currentTodo };
    updateTodos((oldTodos) => [...oldTodos, newTodo]);
    setCurrentTodo(() => "");
  };

  const handleTodoChange = (e) => {
    setCurrentTodo(() => e.target.value);
  };

  const handleDelete = (idx) => (e) => {
    updateTodos((oldTodos) => {
      const updatedTodos = oldTodos.slice();
      updatedTodos.splice(idx, 1);
      return updatedTodos;
    });
  };

  const handleEdit = (idx) => (e) => {
    setCurrentTodo(() => todos[idx].title);
    setCurerentIdx(() => idx);
  };

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      if (currentIdx == -1) {
        handleAdd();
        return;
      }
      updateTodos((oldTodos) => {
        const updatedTodos = [...oldTodos];
        updatedTodos.splice(currentIdx, 1, {
          ...updatedTodos[currentIdx],
          title: currentTodo,
        });
        return updatedTodos;
      });
      setCurrentTodo(() => "");
      setCurerentIdx(-1);
    }
  };

  const handleCompleted = (idx) => () => {
    updateTodos((oldTodos) => {
      const updatedTodos = [...oldTodos];
      updatedTodos.splice(idx, 1, {
        ...updatedTodos[idx],
        completed: !updatedTodos[idx].completed,
      });

      const completedCount = updatedTodos.filter(item => item.completed).length;
      props.updateCount(completedCount);
      return updatedTodos;
    });

  };

  return (
    <div>
      <ul className="todo-list">
        <input
          value={currentTodo}
          onChange={handleTodoChange}
          placeholder="Enter todo"
          onKeyDown={handleEnter}
        />
        {todos.map((todo, idx) => {
          return (
            <li>
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={handleCompleted(idx)}
                />
                {idx}: {todo.title}
              </div>
              <div>
                <span className="edit" onClick={handleEdit(idx)}>
                  Edit
                </span>
                <span className="cross" onClick={handleDelete(idx)}>
                  x
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={handleRandomAdd}>Add Random Todo</button>
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default List;
