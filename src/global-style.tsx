import styled from 'styled-components';
import { Open_Sans } from '@next/font/google'

export const open_Sans = Open_Sans({ subsets: ['latin'] })

export const Container = styled.div`
	background: #0D1435;
  	min-height: 1080px;
	font-family: ${open_Sans.style.fontFamily};
	z-index: 100;
`;


export const FireIcon = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
	text-align: center;
	font-size: 42px;
	padding-top: 14px;
	flex-basis: 40%;
`;
