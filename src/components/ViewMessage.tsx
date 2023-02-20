import React from 'react'
import styled from 'styled-components';
import Particle from './background-animation/Particle';
import Link from "next/link"

interface myProps{
    title: string;
    date: string;
    message: string;
}

const ViewMessage = ({title, date, message}: myProps) => {
	return (
		<>
			<Container>

				<h1 style={{ color: "white", padding: "25px" }}>
					{title}
				</h1>
				<TextBox>
					Date<br/><h3>{date}</h3>
				</TextBox>
				<InputBox>
                    {message}
                </InputBox>
				<div style={{
					display: "flex",
					justifyContent: "space-between",
					width: "40rem",
					padding: "4rem 2rem"
				}}>
                <Link href={'/inbox'} passHref>
					<BackButton>
						Back
					</BackButton>
                </Link>
				</div>
			</Container>
			<Particle />
		</>
	)
}

const Container = styled.div`
	padding: 0 2rem;
`;

const TextBox = styled.div`
    color: white;
    padding: 25px;
	width: 100%;
`;

const InputBox = styled.div`
    max-width: 50rem;
    height: 25rem;
    background-color: #112161;
    border: 1px solid #57A9FF;
    margin: 0px 25px 0px;
	color: white;
	z-index: 100;
    padding: 10px;

	@media screen and (max-width: 950px) {
		width: 80%;
	}
`;

const BackButton = styled.button`
	background: #57A9FF;
	border: 1px solid #57A9FF;
	width: 150px;
	height: 50px;
	color: white;
	font-size: 1rem;
	border-radius: 4px;
	cursor: pointer;
	z-index: 100; // For particles
	margin-right: 2rem;
	margin-bottom: 2rem;

	&:hover{
		background-color: #112161;
		box-shadow: 1px 1px;
	}

	@media screen and (max-width: 650px) {
		width: 100%;
	}
`;

export default ViewMessage