import React, { useState, useRef } from "react";

export default function CreateMeal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState();
  const textInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/meals', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then(() => {
      setInfo(`New meal ${title} added`);
      setTitle("");
      setDescription("");
      textInput.current.focus();
    });
  };
  return (
    <div>
      <p>Insert the meal data to create a new meal</p>
      {info && <p>{info}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            ref={textInput}
            placeholder="Title ..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="description ..."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
