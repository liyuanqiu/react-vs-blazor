import React, { ChangeEvent, Dispatch, useState } from "react";
import { Action } from "./typings";

interface NewItemProps {
  dispatch: Dispatch<Action>;
}

export function NewItem({ dispatch }: NewItemProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function handleContentChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }
  function handleCreate() {
    dispatch({
      type: "add",
      title,
      content,
    });
  }
  return (
    <div>
      <input placeholder="Title" value={title} onChange={handleTitleChange} />
      <input
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}
