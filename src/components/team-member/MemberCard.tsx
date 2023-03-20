import React from 'react';
import styled from 'styled-components';
import { MdModeEdit } from 'react-icons/md';
import Link from 'next/link';
import { IMemberData } from '../../data/types';

interface Props {
  member: IMemberData;
}

const MemberCard = ({ member }: Props) => {
  return (
    <CardC key={member.id}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Img src={member.imgSrc} />
        <DescriptionWrapper>{member.description}</DescriptionWrapper>
        <Link href={'/appreciation/' + member.id} passHref>
          <Button>
            <MdModeEdit size={'1rem'} color={'white'} />
          </Button>
        </Link>
      </div>
    </CardC>
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #0d1435;
  border-radius: 16px;
  height: 2rem;
  width: 2rem;
  border-style: 1px solid;
  border-color: white;
  cursor: pointer;
`;

const Img = styled.img`
  float: left;
  max-width: 200px;
  max-height: 150px;
  border-radius: 5px;
  padding-right: 8px;

  @media screen and (max-width: 200px) {
    display: none;
  }
`;

const CardC = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: auto auto;
  background: #112161;
  border-radius: 10px;
  transition: 0.3s;
`;

export default MemberCard;
