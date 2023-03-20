import React, { ChangeEventHandler } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { TableCell, TableRow } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}));

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0,
		},
	}));

	return (
		<TableRow>
			<StyledTableCell>{props.title}</StyledTableCell>
			<StyledTableCell>{props.date}</StyledTableCell>
			<StyledTableCell>
				{disableButton ? (
					<Button variant="contained" disabled>
						Done
					</Button>
				) : (
					<Button variant="contained" onClick={() => router.push(`/session/${props.id}/start`)}>
						Start
					</Button>
				)}
			</StyledTableCell>
			<StyledTableCell>
				<BsCircleFill color={progressColor} />
			</StyledTableCell>
		</TableRow>
	);
};

export default SessionRow;
