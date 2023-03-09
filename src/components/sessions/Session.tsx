import SessionRow from './SessionRow';
import SectionHeader from '../SectionHeader';
import type { ISessionSummaryData } from '@/data/types';
import { TableBody, TableCell, TableContainer, TableHead, Table } from '@mui/material';

function onClick() {
  console.log('Hello!');
}

interface Props {
  data: ISessionSummaryData[];
  openModalAction: () => void;
}

const Session = ({ data, openModalAction }: Props) => {
  return (
    <>
      <SectionHeader
        headerType={'sessions'}
        title={'Sessions'}
        buttonLabel={'Create session'}
        buttonAction={openModalAction}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Score</TableCell>
          </TableHead>
          <TableBody>
            {data.map((session) => (
              <SessionRow
                id={session.id}
                key={session.id}
                title={session.title}
                date={session.date}
                onClick={onClick}
                done={session.done}
                score={session.score}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Session;
