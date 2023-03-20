import { RadioButton } from "@lifesg/react-design-system";
import { ChangeEvent, useState } from "react";
import styled from 'styled-components';

interface Props {
	val: string;
	setValFunc: (val: string) => void;
	options: string[];
}

const RowDiv = styled.div`
  display: flex;
	flex-direction: row;
	margin-top: 1rem;
	margin-bottom: 2rem;
`

const RadioContainer = styled.div`
  width: 70px;
`;

export const RadioSet = ({ val, setValFunc, options }: Props) => {
	const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
		setValFunc(event.target?.value);
	};

	return <RowDiv>
		{options.map((opt) => <RadioContainer key={opt}>
			<RadioButton value={opt} id={`options-${opt}`} name="options" checked={val === opt} onChange={handleSelection} />
			{opt == "6" && <label htmlFor="options-a">&nbsp;{opt}<br />Everyday</label>}
			{opt == "0" && <label htmlFor="options-a">&nbsp;{opt}<br />Never</label>}
			{opt > "0" && opt < "6" && <label htmlFor="options-a">&nbsp;{opt}</label>}
		</RadioContainer>)}
	</RowDiv>;
}
