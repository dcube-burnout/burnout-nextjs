import { ReactElement } from 'react';
import type { IconType } from 'react-icons';

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
  Icon?: IconType;
}

export interface HeaderSection {
  profile: string | ReactElement;
  name?: string;
  teamName: string;
  userDetails?: string | ReactElement;
}
