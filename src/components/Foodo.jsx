import * as React from 'react';
import Todos from "./Todos";
import TodoInput from "./TodoInput";
import { DataStore } from "aws-amplify";
import { Todo } from "../models";
import {Menu, MenuItem} from "@mui/material";
import {View} from "@aws-amplify/ui-react";

const createTodo = async (title) => {
    try {
        const foodo = new Todo({
            "title": title,
            "complete": false
        });

        await DataStore.save(foodo);
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
    } catch (err) {
        console.error(err);
    }
};

const deleteTodo = async (id) => {
    try {
        const foodo = await DataStore.query(Todo, id);

        await DataStore.delete(foodo);
    } catch (err) {
        console.error(err);
    }
};
function Foodo({user, foodos}) {
    return (
        <View>
            <TodoInput createTodo={createTodo} />
            <Todos todos={foodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </View>
    );
}

export default Foodo;