import React, { useReducer } from "react";
import { List } from "./List";
import { NewItem } from "./NewItem";
import { Item, Action } from "./typings";

const initialSize = 200000;

const initialItems = Array(initialSize)
  .fill(1)
  .map<Item>((_, index) => ({
    id: index,
    title: `Task #${index}`,
  }));

let id = initialSize;

export function reducer(items: Item[], action: Action) {
  switch (action.type) {
    case "add": {
      const copy = items.slice();
      copy.push({
        id: id++,
        title: action.title,
        content: action.content,
      });
      return copy;
    }
    case "remove": {
      const copy = items.slice();
      const index = copy.findIndex((item) => item.id === action.id);
      copy.splice(index, 1);
      return copy;
    }
    case "modify": {
      const copy = items.slice();
      const index = copy.findIndex((item) => item.id === action.id);
      copy.splice(index, 1, {
        ...copy[index],
        title: action.title,
        content: action.content,
      });
      return copy;
    }
    default:
      throw new Error();
  }
}

function App() {
  const [items, dispatch] = useReducer(reducer, initialItems);
  return (
    <div className="app">
      <h1>List</h1>
      <NewItem dispatch={dispatch} />
      <List dispatch={dispatch} items={items} />
    </div>
  );
}

export default App;
