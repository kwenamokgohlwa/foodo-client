import React, {useEffect, useState} from 'react';
import { Amplify, DataStore } from "aws-amplify";
import {Button, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import {Todo} from "./models";
import Foodo from "./components/Foodo";
import {Box} from "@mui/material";
import { Loader } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App({ signOut, user }) {
    const [foodos, setFoodos] = useState([])

    useEffect(() => {
        fetchFoodos();

        DataStore.observe(Todo).subscribe(() => fetchFoodos());
    }, []);

    const fetchFoodos = async () => {
        try {
            const _foodos = await DataStore.query(Todo);

            setFoodos(_foodos)
        } catch (err) {
            console.error(err)
        }
    };

  return (
      <>
        <Foodo user={user} foodos={foodos} />
        <Box
              sx={{
                  marginTop: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
            <Button onClick={() => {
                signOut();
                DataStore.clear();
            }}>Sign Out</Button>
        </Box>
      </>
  );
}

export default withAuthenticator(App);