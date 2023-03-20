import SessionRow from './SessionRow';
import SectionHeader from '../SectionHeader';
import type { ISessionSummaryData } from '@/data/types';
import { TableBody, TableRow, TableCell, TableContainer, TableHead, Table } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

function onClick() {
  console.log('Hello!');
}

interface Props {
  data: ISessionSummaryData[];
  openModalAction: () => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

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
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Progress</StyledTableCell>
              <StyledTableCell>Score</StyledTableCell>
            </TableRow>
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
