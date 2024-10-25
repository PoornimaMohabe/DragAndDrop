import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
import '../App.css';

const TodoList = ({ title, items, droppableId }) => {
  return (
    <div className="todo-list">
      <h2 className="list-title">{title}</h2>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            className="list-items"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <TodoItem key={item} item={item} index={index} droppableId={droppableId} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
