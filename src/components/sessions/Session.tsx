import SessionRow from './SessionRow';
import SectionHeader from '../SectionHeader';
import type { ISessionSummaryData } from '@/data/types';
import { TableBody, TableCell, TableContainer, TableHead, Table, styled, TableRow } from '@mui/material';
import { MdOutlineEventNote } from 'react-icons/md';
import { tableCellClasses } from '@mui/material/TableCell';
import Section from '../Section';

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
    <Section>
      <SectionHeader
        headerType={'sessions'}
        title={'Sessions'}
        buttonLabel={'Create session'}
        buttonAction={openModalAction}
        Icon={MdOutlineEventNote}
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
    </Section>
  );
};

export default Session;
