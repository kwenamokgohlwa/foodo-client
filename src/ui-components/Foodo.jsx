import * as React from 'react';
import Todos from "./Todos";
import TodoInput from "./TodoInput";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Todo } from "../models";

function Foodo() {
    const [todo, setTodo] = useState({ id: 1,  title:'', complete: false });
    const [todos, setTodos] = useState([{ id: 1, title: '', complete: false }]);

    const fetchTodos = async () => {
        try {
            const foodos = await DataStore.query(Todo);

            setTodos(foodos);
        } catch (err) {
            console.error(err);
        }
    };

    const createTodo = async (title) => {
        try {
            const foodo = new Todo({
                "title": title,
                "complete": false
            });
            await DataStore.save(foodo);

            setTodo(foodo);
        } catch (err) {
            console.error(err);
        }
    };

    const toggleTodo = async (id) => {
        try {
            const prevFoodo = await DataStore.query(Todo, id);
            const foodo = Todo.copyOf(prevFoodo, nextFoodo => {
                nextFoodo.complete = !prevFoodo.complete;
            })
            await DataStore.save(foodo);

            setTodo(foodo);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const deleteFoodo = await DataStore.query(Todo, id);
            await DataStore.delete(deleteFoodo);

            setTodo(deleteFoodo);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, [todo]);

    return (
        <>
            <TodoInput createTodo={createTodo} />
            <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}

export default Foodo;