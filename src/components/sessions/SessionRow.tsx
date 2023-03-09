import React, { ChangeEventHandler } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { TableCell, TableRow } from '@mui/material';
import Button from '@mui/material/Button';

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
          <Button variant="contained" disabled>
            Done
          </Button>
        ) : (
          <Button variant="contained" onClick={() => router.push(`/session/${props.id}`)}>
            Start
          </Button>
        )}
      </TableCell>
      <TableCell>
        <BsCircleFill color={progressColor} />
      </TableCell>
    </TableRow>
  );
};

export default SessionRow;
