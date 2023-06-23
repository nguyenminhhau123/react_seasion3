import React from "react";
import { useState } from "react";
import _ from "lodash";
const TodoList = (props) => {
  const [name, setName] = useState("hau");
  const [todoList, setTodoList] = useState([
    { id: "todo1", name: "WhatChing Youtube" },
    { id: "todo2", name: "Using Facebook" },
    { id: "todo3", name: "Reading Book" },
  ]);
  const handleDelete = (id) => {
    // let data = todoList;
    let data = _.clone(todoList);
    // tìm kiếm những item có id khác với ID mình truyền vào và set nó lại thành một mảng mới
    data = data.filter((item) => item.id !== id);
    setTodoList(data);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const todoID = randomIntFromInterval(4, 99999999999999);

  const handleOnclick = (e) => {
    let newTodo = {
      id: `todo${todoID}`,
      name: name,
    };
    let current = _.clone(todoList);
    current.push(newTodo);
    setTodoList(current);
    // setTodoList([...todoList, newTodo]);
  };
  return (
    <>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="summit" onClick={() => handleOnclick()}>
        summit
      </button>
      <div>my name is {name}</div>
      <div>to do list</div>
      {todoList.map((item) => (
        <div key={item.id}>
          {item.name}
          <span
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            X
          </span>
        </div>
      ))}
    </>
  );
};

export default TodoList;
