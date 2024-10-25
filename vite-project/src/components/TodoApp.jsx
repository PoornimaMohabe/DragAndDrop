import React from 'react';
import TodoList from './TodoList';
import '../App.css';

const TodoApp = ({ items }) => {
  return (
    <div className="todo-app">
      <h1 className="app-title">Task Manager</h1>
      <div className="todo-lists">
        <TodoList title="Todo" items={items.todo} droppableId="todo" />
        <TodoList title="In Progress" items={items.inProgress} droppableId="inProgress" />
        <TodoList title="Review" items={items.review} droppableId="review" />
        <TodoList title="Done" items={items.done} droppableId="done" />
        <TodoList title="Closed" items={items.closed} droppableId="closed" />
      </div>
    </div>
  );
};

export default TodoApp;
