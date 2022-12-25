function Todos() {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div
            style={{
              textDecoration: todo.isDone ? 'line-through' : 'unset',
              marginTop: '16px',
              marginBottom: '8px',
            }}
          >
            {todo.text}
          </div>
          <button style={{ marginRight: '8px' }}>Done</button>
          <button
            onClick={() => {
              setTodos((todos) => todos.filter((t) => t.id !== todo.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}

      <form
        style={{ margin: '16px 0 16px 0' }}
        onSubmit={(e) => {
          e.preventDefault();
          setTodos((todos) => [
            ...todos,
            {
              id: Date.now(),
              text: newTodoText,
              isDone: false,
            },
          ]);
          setNewTodoText('');
        }}
      >
        <label htmlFor="new-todo" style={{ marginRight: '8px' }}>
          New Todo
        </label>
        <input
          type="text"
          id="new-todo"
          name="newTodo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <button
        disabled={isSameTodos}
        onClick={() => {
          mutation.mutate(todos, {
            onSuccess: () => {
              refetch();
            },
          });
        }}
      >
        Upload
      </button>
    </>
  );
}

export default function App() {
  return <div className="container"></div>;
}
