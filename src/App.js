import React from 'react';
import {Button, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Foodo from "./ui-components/Foodo";
import {Box} from "@mui/material";

function App({ signOut, user }) {
  return (
      <>
        <Foodo />
        <Box
              sx={{
                  marginTop: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
            <Button onClick={signOut}>Sign Out</Button>
        </Box>
      </>
  );
}

export default withAuthenticator(App);