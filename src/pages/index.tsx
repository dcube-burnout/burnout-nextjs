import React, { useEffect, useState } from 'react';
import MemberCards from '../components/team-member/MembersCard';
import Navbar from '../components/Navbar';
import { Container, FireIcon } from '../global-style';
import HeaderSection from '../components/team-member/HeaderSection';
import Session from '../components/sessions/Session';
import Particle from '../components/background-animation/Particle';
import { memberData, MemberRole, MemberText } from '../data/member-data';
import { sessionSummaryData } from '../data/session-summary';
import { ISessionSummaryData } from '../data/types';
import { Modal } from '@lifesg/react-design-system';
import { CreateSessionForm } from '../components/sessions/CreateSessionForm';
import { InitiativesCards } from '../components/govtech-initiatives/initiativesCards';

export default function Home() {
	const [membersData, setMembersData] = useState(memberData);
	const [sessionsData, setSessionsData] = useState<ISessionSummaryData[]>(sessionSummaryData)
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		fetch(`${process.env.BACKEND}/users`)
			.then(res => res.json())
			.then(data => {
				setMembersData(data.filter((m: any) => m.team === 1).map((m: any) => ({
					id: m.id,
					imgSrc: `../ img / member${m.id}.jpg`,
					description: <>
						<MemberText>{m.name}</MemberText>
						<MemberRole>{m.role}</MemberRole>
					</>,
				})))
			})
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			const sessionsData = await fetch(`${process.env.BACKEND}/sessions?userId=1`);
			const reflectionsData = await fetch(`${process.env.BACKEND}/reflections?userId=1`);

			const sessions = await sessionsData.json();
			const reflections = await reflectionsData.json();

			return {
				sessions,
				reflections
			}
		}

		fetchData().then(data => {
			const reflectionsIds = data.reflections.map((r: any) => r.session);
			for (let i = 0; i < data.sessions.length; i++) {
				if (reflectionsIds.includes(data.sessions[i].id)) {
					data.sessions[i].done = true;
				}
			}

			setSessionsData(data.sessions.map((s: any) => ({
				id: s.id,
				title: s.title,
				date: s.date.slice(0, 10),
				done: s.done,
				score: s.done ? data.reflections.filter((d: any) => d.session === s.id)[0].burnout_inv_id.overall + 1 : 0
			})).reverse())
		})
	}, [])

	return (
		<>
			<Container>
				<Navbar />
				<HeaderSection
					profile={<FireIcon>🔥</FireIcon>}
					teamName={"Team"}
					userDetails={"Burnout Hackers"}
				/>
				<MemberCards data={membersData} />
				<hr />
				<Session data={sessionsData} openModalAction={() => setShowModal(true)} />
				<Modal show={showModal}><CreateSessionForm closeModalAction={() => setShowModal(false)} /></Modal>
				<hr />
				<InitiativesCards />
			</Container>
			<Particle />
		</>
	)
}
