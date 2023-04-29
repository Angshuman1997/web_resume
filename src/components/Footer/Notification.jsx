import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({status, openNotify, setOpenNotify}) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenNotify(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openNotify} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} sx={{ width: '100%' }} severity={`${status === 200 ? "success" : "error"}`}>{`${status === 200 ? "Message Sent" : "Failed to Send Message"}`}</Alert>
      </Snackbar>
    </Stack>
  );
}