import React from 'react';
import { Button } from '@material-ui/core';

export default function LandingPage({ history }) {
  return (
    <div>
      <h1>THIS IS LandingPage</h1>
      <Button
        onClick={() => {
          history.push('/home');
        }}
      >
        GO TO HOME SWEET HOMEE
      </Button>
    </div>
  );
}
