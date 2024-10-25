import "../index.css";
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({ item, index, droppableId }) => {
  const draggableId = `${droppableId}-${item}`; 

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className="todo-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item}
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
