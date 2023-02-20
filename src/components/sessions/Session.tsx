import styled from 'styled-components';
import SessionRow from './SessionRow';
import SectionHeader from '../SectionHeader';
import { ISessionSummaryData } from '@/app/data/types';

function onClick() {
	console.log("Hello!")
}

interface Props {
	data: ISessionSummaryData[];
	openModalAction: () => void;
}

const Session = ({ data, openModalAction }: Props) => {
	return (
		<>
			<SectionHeader
				headerType={"sessions"}
				title={"Sessions"}
				buttonLabel={"Create session"}
				buttonAction={openModalAction}
			/>
			<Container>

				<Table>
					<tbody>
					<tr style={{ paddingTop: "2rem", textAlign: "center", verticalAlign: "middle" }}>
						<th style={{ padding: "2rem", textDecoration: "underline" }}>Title</th>

						<th style={{ padding: "2rem", textDecoration: "underline" }}>Date</th>

						<th style={{ padding: "2rem", textDecoration: "underline" }}>Progress</th>

						<th style={{ padding: "2rem", textDecoration: "underline" }}>Score</th>
					</tr>

					{
						data.map((session) =>
							<tr key={session.id} style={{ borderCollapse: "collapse" }}>
								<SessionRow
									id={session.id}
									title={session.title}
									date={session.date}
									onClick={onClick}
									done={session.done}
									score={session.score}
								/>
							</tr>
						)
					}
					</tbody>
				</Table>
			</Container>
		</>
	)
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
`;

const Table = styled.table`
    display: table;
    border: 1px solid white;
	color: white;
	border-radius: 16px;
	z-index: 100; // For particles
	background-color: #0D1435;
	width: 100%;

	@media screen and (max-width: 540px) {
		display: block;
		overflow-x: auto;
	}

	tr:nth-child(even){
		background-color: #112161;
	}
`;


export default Session
