import styled from 'styled-components';
import { IMemberData } from './types';

export const MemberText = styled.h4`
  color: white;
  font-weight: bold;
`;

export const MemberRole = styled.div`
  color: white;
  font-size: small;
`;

export const memberData: IMemberData[] = [
  {
    id: '1',
    name: 'Ann Smith',
    imgSrc: '../../img/member1.jpg',
    description: (
      <>
        <MemberText>Ann Smith</MemberText>
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
  {
    id: '2',
    name: 'John Lim',
    imgSrc: '../../img/member2.jpg',
    description: (
      <>
        <MemberText>John Lim</MemberText>
        {'\n'}
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
  {
    id: '3',
    name: 'Harry Teo',
    imgSrc: '../../img/member3.jpg',
    description: (
      <>
        <MemberText>Harry Teo</MemberText>
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
  {
    id: '4',
    name: 'Richard Lee',
    imgSrc: '../../img/member4.jpg',
    description: (
      <>
        <MemberText>Richard Lee</MemberText>
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
  {
    id: '5',
    name: 'Charlotte Au',
    imgSrc: '../../img/member5.png',
    description: (
      <>
        <MemberText>Charlotte Au</MemberText>
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
  {
    id: '6',
    name: 'Rebecca Loh',
    imgSrc: '../../img/member6.jpg',
    description: (
      <>
        <MemberText>Rebecca Loh</MemberText>
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
  {
    id: '7',
    name: 'Martin Tay',
    imgSrc: '../../img/member7.jpg',
    description: (
      <>
        <MemberText>Martin Tay</MemberText>
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
  {
    id: '8',
    name: 'Sarah Peh',
    imgSrc: '../../img/member8.jpg',
    description: (
      <>
        <MemberText>Sarah Peh</MemberText>
        <MemberRole>UX designer</MemberRole>
      </>
    ),
  },
];
