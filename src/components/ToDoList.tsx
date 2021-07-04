import React from "react";

const ToDoList: React.FC<{ id: string, text: string }> = (props) => {
    return (
        <li key={props.id}>{props.text}</li>
    )
};

export default ToDoList;