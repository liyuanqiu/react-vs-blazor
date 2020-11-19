import React, { Dispatch } from "react";
import { Virtuoso } from "react-virtuoso";
import { ListItem } from "./ListItem";
import { Action, Item } from "./typings";

interface ListProps {
  items: Item[];
  dispatch: Dispatch<Action>;
}

export function List({ items, dispatch }: ListProps) {
  function generateItem(index: number) {
    return <ListItem dispatch={dispatch} {...items[index]} />;
  }
  return (
    <Virtuoso
      className="list-container"
      totalCount={items.length}
      overscan={20}
      item={generateItem}
      style={{ height: "400px", width: "350px" }}
    />
  );
}
