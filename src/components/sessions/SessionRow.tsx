import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { BsCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { TableCell, TableRow } from '@mui/material';

interface SessionRowInterface {
  id: string;
  title: string;
  date: string;
  onClick: ChangeEventHandler<HTMLInputElement>;
  done: boolean;
  score: number;
}

const SessionRow = (props: SessionRowInterface) => {
  const router = useRouter();
  function getProgressColor(score: number) {
    if (score == 0) {
      return 'grey';
    } else if (score == 1) {
      return 'green';
    } else if (score == 2) {
      return 'yellow';
    } else if (score >= 3) {
      return 'red';
    }
  }
  const progressColor = getProgressColor(props.score);
  const disableButton = props.done;

  return (
    <TableRow>
      <TableCell>{props.title}</TableCell>
      <TableCell>{props.date}</TableCell>
      <TableCell>
        {disableButton ? (
          <Button disabled> Done </Button>
        ) : (
          <StartButton onClick={() => router.push(`/session/${props.id}`)}> Start</StartButton>
        )}
      </TableCell>
      <TableCell>
        <BsCircleFill color={progressColor} />
      </TableCell>
    </TableRow>
  );
};

const Button = styled.button`
  background-color: white;
  border-radius: 4px;
  height: 2rem;
  width: 4rem;
  border-style: 1px solid;
  border-color: white;
  cursor: pointer;
  color: #222;
`;

const StartButton = styled.button`
  background-color: #ff6624;
  border-radius: 4px;
  height: 2rem;
  width: 4rem;
  border-style: 1px solid;
  border-color: #ff6624;
  color: white;
  cursor: pointer;
`;

export default SessionRow;
