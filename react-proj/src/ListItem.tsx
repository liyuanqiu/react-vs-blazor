import React, { Dispatch } from "react";
import { Action, Item } from "./typings";

interface ListItemProps extends Item {
  dispatch: Dispatch<Action>;
}

export function ListItem({ id, title, content, dispatch }: ListItemProps) {
  function handleRemove() {
    dispatch({
      type: "remove",
      id,
    });
  }
  return (
    <div className="list-item-container">
      <div className="list-item-title">{title}</div>
      <span
        className={
          content === undefined
            ? "list-item-content"
            : "list-item-content list-item-no-content"
        }
      >
        {content ?? "NO CONTENT"}
      </span>
      <span className="list-item-remove" onClick={handleRemove}>
        x
      </span>
    </div>
  );
}
