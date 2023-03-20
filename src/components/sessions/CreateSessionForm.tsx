import { open_Sans } from '../../global-style';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 25px;
  border: 2px solid white;
  align-items: center;
  color: white;
  background-color: #112161;
  margin: auto;
  margin-top: 4rem;
  opacity: 1;
  z-index: 1000 !important;
  padding: 3rem 2rem;
  width: 60%;
  height: 50%;
  font-size: 1.2em;
  font-family: ${open_Sans.style.fontFamily};
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const P = styled.p`
  text-align: center;
  padding-bottom: 36px;
`;

const TeamName = styled.span`
  color: #ff6624;
`;

const FormSection = styled.div`
  padding-bottom: 48px;
`;

const ExitButton = styled(Button)({
  backgroundColor: '#112161',
  border: '1px solid #57a9ff',
});

interface Props {
  closeModalAction: () => void;
}

export const CreateSessionForm = ({ closeModalAction }: Props) => {
  const [title, setTitle] = useState('');

  console.log(title);

  const closeAction = () => {
    closeModalAction();
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Box>
      <CloseButton onClick={closeAction}>x</CloseButton>
      <P>
        Create a session
        <br />
        <br />
        You are creating a session for <TeamName>Team Burnout Hackers.</TeamName>
      </P>

      <FormSection>
        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={inputOnChange} />
      </FormSection>

      <Stack spacing={2} direction="row">
        <ExitButton variant="outlined" onClick={closeAction} size="large">
          Cancel
        </ExitButton>
        <Button variant="contained" onClick={closeAction} size="large">
          Create
        </Button>
      </Stack>
    </Box>
  );
};
