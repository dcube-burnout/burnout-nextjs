import { Textarea } from '@lifesg/react-design-system';
import React, { useState } from 'react'
import styled from 'styled-components';
import { IMemberData } from '../data/types';
import HeaderSection from './team-member/HeaderSection';
import Link from "next/link"

interface myProps {
	memberData: IMemberData;
	handleComplete: Function;
}

const SendMessage = ({ memberData, handleComplete }: myProps) => {

	const [input, setInput] = useState('')
	return (
        <Container>
            <HeaderSection
                profile={<Img src={memberData.imgSrc} />}
                teamName={"Team Burnout Hackers"}
                name={memberData.name}
            />

            <h1 style={{ color: "white", padding: "25px" }}>
                Leave a comment for your teammate! ✌
            </h1>
            <TextBox>
                Take a few moments to provide feedback to&nbsp; <span style={{ color: "#FF6624", fontWeight: "bold" }}>
                    {memberData.name}</span>&nbsp; on areas such as<br /> communication, teamwork, and job performance — try to be constructive in your<br />comments, focusing on specific behaviors or actions rather than personal opinions!
            </TextBox>
            <InputBox value={input} onChange={e => setInput(e.target.value)} />
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40rem",
                padding: "4rem 2rem"
            }}>
                <Link href={'/'} passHref>
                    <BackButton>
                        Back
                    </BackButton>
                </Link>
                <Button onClick={() => input ? handleComplete(input) : null}>
                    Submit
                </Button>
            </div>
        </Container>
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

const InputBox = styled(Textarea)`
    max-width: 50rem;
    height: 25rem;
    background-color: #112161;
    border: 1px solid #57A9FF;
    margin: 0px 25px 0px;
	color: white;

	&:active {
    	background-color: white;
  	}

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

const Button = styled.button`
	background-color: #FF6624;
	width: 150px;
	height: 50px;
	color: white;
	font-size: 1rem;
	border-radius: 4px;
	border-style: none;
	cursor: pointer;
	z-index: 100; // For particles

	&:hover{
		background-color: #cd3e00;
		box-shadow: 1px 1px;
	}
	@media screen and (max-width: 650px) {
		width: 100%;
	}
`;

const Img = styled.img`
	float: left;
	max-width: 200px;
	max-height: 150px;
	border-radius: 5px;
	z-index: 100;
`;

export default SendMessage