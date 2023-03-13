import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import { MdModeEdit } from 'react-icons/md';
import Link from 'next/link';
import { IMemberData } from '../../data/types';

interface Props {
  data: IMemberData[];
}

const MemberCards = ({ data }: Props) => {
  return (
    <>
      <SectionHeader
        headerType={'team'}
        title={'Team members'}
        description={'Kind words goes a long way, let your team members know what they did well today!'}
        buttonLabel={'Add member'}
      />
      <Layout>
        <CardWrapper>
          {data.map((member) => (
            <Card key={member.id}>
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
            </Card>
          ))}
        </CardWrapper>
      </Layout>
    </>
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

const Layout = styled.div`
  padding: 2em 2em;
  display: grid;
  grid-template-areas: 'card card card card';
`;

const Img = styled.img`
  float: left;
  max-width: 200px;
  max-height: 150px;
  border-radius: 5px;
  padding-right: 8px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 100; // For particles
`;

const Card = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: auto auto;
  flex: 0 0 calc(25% - 20px);
  max-width: calc(25% - 20px);
  max-height: 150px;
  background: #112161;
  border-radius: 10px;
  margin-bottom: 16px;
  transition: 0.3s;
  border: 2px solid transparent;

  @media screen and (max-width: 1199px) {
    flex: 0 0 calc(50%);
    max-width: calc(50% - 5px);
  }
  @media screen and (max-width: 650px) {
    flex: 0 0 calc(50%);
    padding-left: 16px;
    max-width: calc(50% - 5px);
    height: 150px;
  }
`;

export default MemberCards;
