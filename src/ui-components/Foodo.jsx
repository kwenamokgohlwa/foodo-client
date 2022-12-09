import * as React from 'react';
import { Box } from "@mui/material";
import Todos from "./Todos";
import TodoInput from "./TodoInput";
import {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Todo as TodoModel} from "../models";
import * as Store from "../services/store";

function Foodo() {
    const [todo, setTodo] = useState({ title:'Add your first Foodo!', complete: false });
    const [todos, setTodos] = useState([{ id: 1, title:'Add your first Foodo!', complete: false }]);

    const [foodo, setFoodo] = useState(todo);
    const [foodos, setFoodos] = useState(todos);

    const createTodo = (title) => {
        let updateTodos = [...todos];
        updateTodos = [...updateTodos, { id: todos.length + 1, title, complete: false }];

        setTodos(updateTodos);
    };

    const toggleTodo = (id) => {
        let updateTodos = todos.map((todo) => {
            return todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo};
        });

        setTodos(updateTodos);
    };

    const deleteTodo = (id) => {
        let updateTodos = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(updateTodos)
    };

    useEffect(() => {
        let initialFoodo = { id: 0, title:'', complete: false };
        let updatedFoodos = [...todos];

        setFoodos(updatedFoodos);
    }, [todo, todos]);

    return (
        <>
            <TodoInput createTodo={createTodo} />
            <Todos todos={foodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}

export default Foodo;