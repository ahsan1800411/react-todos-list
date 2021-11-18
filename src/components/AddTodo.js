import { useState } from 'react';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle('');
    setDescription('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Add a Title
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Add a Description
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
