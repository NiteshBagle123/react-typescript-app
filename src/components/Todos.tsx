import React from "react";
import Todo from '../models/todo';
import ToDoList from '../components/ToDoList';

const Todos: React.FC<{items: Todo[]}> = props =>  {
    return (
        <ul>
            {props.items.map(item => <ToDoList id={item.id} text={item.text}/>)}
        </ul>
    );
};

export default Todos;