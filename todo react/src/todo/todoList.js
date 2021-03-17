import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div>
        {props.text}
        <button
          className="del"
          onClick={() => {
            props.onselect(props.id);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default TodoList;
