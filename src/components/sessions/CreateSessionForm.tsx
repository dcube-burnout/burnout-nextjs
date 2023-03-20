import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, TextField, Typography } from '@mui/material';

const CloseButton = styled.button`
  align-self: flex-end;
  padding: 6px 12px;
  background-color: transparent;
  border: none;
  font-size: 2em;
  color: white;
`;

const TeamName = styled.span`
  color: #ff6624;
`;

interface Props {
  closeModalAction: () => void;
}

export const CreateSessionForm = ({ closeModalAction }: Props) => {
  const [title, setTitle] = useState('');

  const submitAction = async () => {
    await axios.post((process.env.NEXT_PUBLIC_BACKEND ?? '') + 'api/sessions', { title, userId: 1 });
    window.location.reload();
  };

  const closeAction = () => {
    closeModalAction();
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    padding: '8px',
  };

  return (
    <Box sx={style}>
      <CloseButton onClick={closeAction}>x</CloseButton>
      <Typography variant="h5" pb={2}>
        Create a session
      </Typography>
      <Typography pb={4}>
        You are creating a session for <TeamName>Team Burnout Hackers.</TeamName>
      </Typography>

      <Box pb={4}>
        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={inputOnChange} />
      </Box>

      <Box pb={4}>
        <Button variant="outlined" onClick={closeAction} size="large">
          Cancel
        </Button>
        <Button variant="contained" onClick={submitAction} size="large">
          Create
        </Button>
      </Box>
    </Box>
  );
};
