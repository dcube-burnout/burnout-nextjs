import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';

export const InitiativesCards = () => {
  return (
    <>
      <SectionHeader headerType="intitatives" title="GovTech's Intitatives" />
      <Grid>
        <Item>
          <Link href="https://supportgowhere.life.gov.sg/categories/mental-health?activeTab=services" target="_blank">
            <Img src={'/img/SupportGoWhere.png'} alt="SupportGoWhere" />
            <Title>SupportGoWhere</Title>
            <br />
            <Description>Find support schemes and services all in one place.</Description>
          </Link>
        </Item>

        <Item>
          <Link href="https://www.facebook.com/InsideGovTech/" target="_blank">
            <Img src={'/img/Play@Govtech.png'} alt="Play@Govtech" />
            <Title>Play@Govtech</Title>
            <br />
            <Description>
              Join interest groups and hang out with other fellow Govtechies to take your mind off work!
            </Description>
          </Link>
        </Item>

        <Item>
          <Link href="" target="_blank">
            <Img src={'/img/Wellness@govtech.png'} alt="Wellness@govtech" />
            <Title>Wellness@Govtech</Title>
            <br />
            <Description>
              Mental health is equally as important as your physical health.
              <br />
              Join our relaxing sessions of meditation through our telegram group!
            </Description>
          </Link>
        </Item>
      </Grid>
    </>
  );
};
const Title = styled.h3`
  margin-top: 1rem;
`;

const Description = styled.div`
  margin-bottom: 1rem;
`;

const Img = styled.img`
  min-height: 15%;
  max-width: 100%;
`;

const Item = styled.div`
  padding: 1.5rem;
  z-index: 100;
  background-color: #112161;
  border-radius: 1rem;
`;

const Grid = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  color: white;

  @media screen and (max-width: 820px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
