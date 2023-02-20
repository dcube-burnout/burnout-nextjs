import { ReactElement } from "react";

export interface IButtonData {
	label: string;
	nav?: string;
}

export interface ISessionStartData {
	imgSrc: string;
	title: string;
	description: string;
	instruction: string | ReactElement;
	buttons: IButtonData[];
}

export interface IQuestion {
	itemId: number;
	questionText: string;
}

export interface ISection {
	title: string;
	description: string;
	questions: IQuestion[];
}

export interface IQuestionnaireData {
	sections: ISection[];
	buttons: IButtonData[];
}

export interface IAccomplishmentData {
	title: string;
	description: string;
	buttons: IButtonData[];
}

export interface IMemberCard {
	memberData: IMemberData[];
}

export interface IMemberData {
	id: string;
	name: string;
	imgSrc?: string;
	description?: string | ReactElement;
}

export interface Info {
	label: string;
	data: string;
}

type Category = "Low" | "Medium" | "High";

export interface IIndivScore {
	label: string;
	numeric: number;
	category: Category;
}

export interface IOverallScore {
	label: string;
	category: Category;
}

export interface IScoreData {
	indiv: IIndivScore[];
	overall: IOverallScore;
}

export interface ISummaryData {
	title: string;
	info: Info[];
	description: string;
	indivScores: IIndivScore[];
	overallScore: IOverallScore;
	accomplishments: string;
	buttons: IButtonData[];
}

export interface ISessionSummaryData {
	id: string;
	title: string;
	date: string;
	done: boolean;
	score: number
}

export interface IAppreciationData {
    id: number,
	giver : number,
	receiver: number,
	writeup: string,
}

export interface IUser {
	id: number,
    login: string
    password: string
    name: string,
    role: string,
    team: number
}
