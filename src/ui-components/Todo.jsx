import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import {Box, Button, Paper, Stack, Switch} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {SwitchField} from "@aws-amplify/ui-react";

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
                sx={{
                    backgroundColor: todo.complete ? '#fdbea5' : ''
                }}
            >
                <ListItem
                    key={`todo-${todo.id}`}
                    secondaryAction={
                        <SwitchField
                            id={`list-switch-${todo.id}`}
                            defaultChecked={false}
                            isDisabled={false}
                            isChecked={todo.complete}
                            value={todo.complete}
                            onChange={() => toggleTodo(todo.id)}
                        ></SwitchField>
                    }
                    disablePadding
                >
                    <ListItemButton id={`list-button-${todo.id}`} role={undefined} dense >
                        <ListItemIcon>
                            <IconButton aria-label={`todo-delete-${todo.id}`} color="error" onClick={() => deleteTodo(todo.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText id={`list-text-${todo.id}`} primary={todo.title} />
                    </ListItemButton>
                </ListItem>
            </Paper>
        </Box>
    );
}

export default Todo;