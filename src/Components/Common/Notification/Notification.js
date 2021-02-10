import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// severity types : success / warning / error / info
export default function Notification({ severity, message, closed }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    closed();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert severity={severity} elevation={6} variant='filled' onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
