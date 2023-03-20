import { IQuestion, ISection } from "@/data/types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RadioSet } from "./radio-set";

const options = ['0', '1', '2', '3', '4', '5', '6'];

interface QuestionProps {
	questionData: IQuestion;
	val: string;
	setValFunc: (val: string) => void;
}

export const Question = ({ questionData, val, setValFunc }: QuestionProps) => (
	<div>
		<div>{questionData.questionText}</div>
		<RadioSet val={val} setValFunc={setValFunc} options={options} />
	</div>
)

interface SectionProps {
	sectionData: ISection;
	vals: string[];
	setVals: (i: number) => (val: string) => void;
}

export const Section = ({ sectionData, vals, setVals }: SectionProps) => {

	return <div>
		<h1>{sectionData.title}</h1>
		<Description>{sectionData.description}</Description>
		<div>{sectionData.questions.map((q) => <Question questionData={q} val={vals[q.itemId - 1]} setValFunc={setVals(q.itemId - 1)} key={q.itemId} />)}</div>
	</div>
}

const Description = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
	color: white;
`;

