import * as React from 'react';
import {useState} from "react";
import {
    FieldGroupIconButton,
    TextField,
} from "@aws-amplify/ui-react";
import AddIcon from '@mui/icons-material/Add';
import {Box} from "@mui/material";

const TodoInput = ({createTodo}) => {
    const [title, setTitle] = useState('');

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 16
            }}
        >
            <TextField
                placeholder="Add Foodo"
                isRequired={true}
                isReadOnly={false}
                onChange={(e) => setTitle(e.currentTarget.value)}
                innerEndComponent={
                    <FieldGroupIconButton
                        ariaLabel="Search"
                        variation="link"
                        onClick={() => createTodo(title)}
                    >
                        <AddIcon />
                    </FieldGroupIconButton>
                }
            ></TextField>
        </Box>
    );
}

export default TodoInput;