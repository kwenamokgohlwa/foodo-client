import React, {useEffect, useState} from "react";
import {Box, Button, Paper, Stack, Switch} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Todo from "./Todo";

const Todos = ({todos, toggleTodo, deleteTodo}) => {

    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    { todos && todos.map((todo, index ) => {
                        return <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={index} />
                    }) }
                </List>
            </Box>
        </>
    );
}

export default Todos;







