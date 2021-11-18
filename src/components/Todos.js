import TodoItem from './TodoItem';

function Todos({ todos, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 && (
        <h1 className='text-center'>
          No todos to display, Add some to view the todos
        </h1>
      )}
      {todos.map((todo) => (
        <div key={todo.sno}>
          <TodoItem todo={todo} deleteTodo={deleteTodo} />
        </div>
      ))}
    </div>
  );
}

export default Todos;
