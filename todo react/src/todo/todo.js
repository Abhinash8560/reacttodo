import React, { useState } from "react";
import TodoList from "./todoList";
import "./todo.css";

// import axios from 'axios';

function Todos() {
  const [input, setInput] = useState("");
  const [Items, setItems] = useState([]);

  const changing = (event) => {
    setInput(event.target.value);
  };

  const add = () => {
    if (input === "") {
      alert("write your item correctly");
    } else {
      setItems((oldItems) => {
        return [...oldItems, input];
      });
      setInput("");
    }
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="mainn-div">
      <div className="name">Todo List</div>
      <input
        type="text"
        onChange={changing}
        value={input}
        placeholder="Enter Your Item"
      />

      <button className="add" onClick={add}>
        +
      </button>

      <div style={{ color: "pink", fontSize: "1.3rem" }}>{input}</div>
      <ol>
        {Items.map((item, index) => {
          return (
            <li>
              <TodoList
                id={index}
                key={index}
                text={item}
                onselect={deleteItem}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export default Todos;
