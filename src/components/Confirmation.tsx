import React from 'react'
import styled from 'styled-components'
import { IMemberData } from '../data/types'

interface IConfirmation {
	memberData: IMemberData
	handleCancel: Function
	handleOk: Function
}

const Confirmation = ({ memberData, handleCancel, handleOk }: IConfirmation) => {
	const today = new Date().toLocaleDateString()
	return (
        <Box>
            <Img src="../img/positive1.png"></Img>
            <div style={{ padding: "1em" }}>
                Submit comment?
            </div>
            <div>
                <span>You are leaving a comment for {memberData.name} on the {today}</span>
            </div>
            <div style={{ padding: "2em" }}>
                Do you wish to proceed?
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", width: "40rem", padding: "10px" }}>
                <BackButton onClick={() => handleCancel()}>
                    Cancel
                </BackButton>
                <Button onClick={() => handleOk()}>
                    Complete
                </Button>
            </div>
        </Box>
	)
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px 20px 50px 20px;
	border-radius: 25px;
	border: 2px solid white;
	align-items:center;
	color: white;
	background-color: #112161;
	opacity: 1.0;
	z-index: 1000 !important;
`

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
	width: 200px;
    margin: 20px;
`;

export default Confirmation
