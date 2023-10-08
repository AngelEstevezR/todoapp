import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'pendiente 1', completed: true},
  {text: 'pendiente 2', completed: true},
  {text: 'pendiente 3', completed: false}
];

function App() {
  return (
    <>
      <TodoCounter completed={15} total={20}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
