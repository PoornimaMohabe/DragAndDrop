import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodoApp from './components/TodoApp';

const initialItems = {
  todo: ['Task 1', 'Task 2'],
  inProgress: [],
  review: [],
  done: [],
  closed: [],
};

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result);

    if (!destination) return;

    const sourceList = Array.from(items[source.droppableId]);
    console.log(source.droppableId);

    const destList = Array.from(items[destination.droppableId]);


    const [movedItem] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, movedItem);


    setItems((prev) => ({
      ...prev,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList,
    }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TodoApp items={items} />
    </DragDropContext>
  );
};

export default App;
