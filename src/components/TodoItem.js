function TodoItem({ todo, deleteTodo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <button
        className='btn btn-primary btn-danger'
        onClick={() => deleteTodo(todo)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
