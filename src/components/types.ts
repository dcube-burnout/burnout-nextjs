import React, { ReactElement } from "react";

export interface CardInterface {
	imgSrc: string;
	description: string | ReactElement;
}

export interface SectionHeader {
	headerType: string;
	title: string;
	description?: string;
	buttonLabel?: string;
	buttonAction?: () => void;
}

export interface HeaderSection {
	profile: string | ReactElement;
	name?: string;
	teamName: string;
	userDetails?: string | ReactElement;
}
