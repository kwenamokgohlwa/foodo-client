import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import {Box, Button, Paper, Stack, Switch} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {SwitchField} from "@aws-amplify/ui-react";
import {getOverrideProps} from "@aws-amplify/ui-react/internal";
import {useState} from "react";
import * as Store from '../services/store'
import {isCompositeComponent} from "react-dom/test-utils";

const Todo = ({todo, toggleTodo, deleteTodo}) => {

    return (
        <Box
            key={`box-${todo.id}`}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 0.5,
                    width: 360,
                },
            }}
        >
            <Paper
                key={`paper-${todo.id}`}
                elevation={8}
            >
                <ListItem
                    key={`todo-${todo.id}`}
                    secondaryAction={
                        <SwitchField
                            defaultChecked={false}
                            isDisabled={false}
                            isChecked={todo.complete}
                            onChange={() => toggleTodo(todo.id)}
                        ></SwitchField>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={() => deleteTodo(todo.id)} dense>
                        <ListItemIcon>
                            <IconButton aria-label={`todo-delete-${todo.id}`} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText id={todo.id} primary={todo.title} />
                    </ListItemButton>
                </ListItem>
            </Paper>
        </Box>
    );
}

export default Todo;