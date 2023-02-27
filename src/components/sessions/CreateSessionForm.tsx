import { open_Sans } from "../../global-style";
import { Form } from "@lifesg/react-design-system"
import axios from "axios";
import { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: space-between;
	border-radius: 25px;
	border: 2px solid white;
	align-items:center;
	color: white;
	background-color: #112161;
	opacity: 1.0;
	z-index: 1000 !important;
	width: 90%;
	height: 442px;
	font-size: 1.2em;
	font-family: ${open_Sans.style.fontFamily};
	`;

const CloseButton = styled.button`
  align-self: flex-end;
  padding: 6px 12px;
  background-color: transparent;
  border: none;
  font-size: 2em;
  color: white;
`

const P = styled.p`
  text-align: center;
  padding-bottom: 36px;
`

const TeamName = styled.span`
  color: #FF6624;
`

const Label = styled.label`
  padding-bottom: 12px;
  font-size: 0.8em;
`

const FormSection = styled.div`
  padding-bottom: 48px;
`

const ButtonSection = styled.div`
  padding-bottom: 72px;
`

const BeginButton = styled.button`
	background-color: #FF6624;
	width: 150px;
	height: 50px;
	color: white;
	font-size: 1rem;
	border-radius: 4px;
	border-style: none;
	cursor: pointer;
	z-index: 100; // For particles
  	margin-left: 20px;


	&:hover{
		background-color: #cd3e00;
		box-shadow: 1px 1px;
	}
`;

const ExitButton = styled.button`
	background-color: #112161;
	border: 1px solid #57A9FF;
	width: 150px;
	height: 50px;
	color: white;
	font-size: 1rem;
	border-radius: 4px;
	cursor: pointer;
	z-index: 100; // For particles

	&:hover{
    background-color: #57A9FF;
		box-shadow: 1px 1px;
	}
`;

interface Props {
	closeModalAction: () => void;
}

export const CreateSessionForm = ({ closeModalAction }: Props) => {
	const [title, setTitle] = useState('');

	const submitAction = async () => {
		await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/sessions`, { title, userId: 1 });
		window.location.reload();
	}

	const closeAction = () => {
		closeModalAction();
	}

	const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	}

	return <Box>
		<CloseButton onClick={closeAction}>x</CloseButton>
		<P>Create a session<br /><br />
			You are creating a session for <TeamName>Team Burnout Hackers.</TeamName></P>

		<FormSection>
			<Label>Title</Label>
			<Form.Input type="text" placeholder="Title" onChange={inputOnChange} />
		</FormSection>

		<ButtonSection>
			<ExitButton onClick={closeAction}>Cancel</ExitButton>
			<BeginButton onClick={submitAction}>Create</BeginButton>
		</ButtonSection>
	</Box>
}
