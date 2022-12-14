import React, {useEffect, useState} from 'react';
import { Amplify, DataStore } from "aws-amplify";
import {Button, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import {Todo} from "./models";
import Foodos from "./components/Foodos";
import {Box} from "@mui/material";

Amplify.configure(awsconfig);

function App({ signOut, user }) {
    const [foodos, setFoodos] = useState([])

    // console.log(JSON.stringify(user))

    useEffect(() => {
        fetchFoodos();

        // DataStore.observe(Todo).subscribe(() => fetchFoodos());
    }, []);

    const fetchFoodos = async () => {
        try {
            // const _foodos = await DataStore.query(Todo);
            //
            // setFoodos(_foodos)
        } catch (err) {
            console.error(err)
        }
    };

  return (
      <>
        <Foodos user={user} foodos={foodos} />
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