import React, { useState } from 'react';
import { Snackbar, Alert, Button, Box } from '@mui/material';

const ThreatNotifications = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Trigger Threat Notification
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Critical Threat Detected! Immediate action required.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ThreatNotifications;
