import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import { MdOutlineEventNote } from 'react-icons/md';
import Section from '../Section';

export const InitiativesCards = () => {
  return (
    <Section>
      <SectionHeader headerType="intitatives" title="GovTech's Intitatives" Icon={MdOutlineEventNote} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link href="https://supportgowhere.life.gov.sg/categories/mental-health?activeTab=services" target="_blank">
            <Img src={'/img/SupportGoWhere.png'} alt="SupportGoWhere" />
            <Typography variant="h6">SupportGoWhere</Typography>
            <br />
            <Typography>Find support schemes and services all in one place.</Typography>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link href="https://www.facebook.com/InsideGovTech/" target="_blank">
            <Img src={'/img/Play@Govtech.png'} alt="Play@Govtech" />
            <Typography variant="h6">Play@Govtech</Typography>
            <br />
            <Typography>
              Join interest groups and hang out with other fellow Govtechies to take your mind off work!
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link href="" target="_blank">
            <Img src={'/img/Wellness@govtech.png'} alt="Wellness@govtech" />
            <Typography variant="h6">Wellness@Govtech</Typography>
            <br />
            <Typography>
              Mental health is equally as important as your physical health.
              <br />
              Join our relaxing sessions of meditation through our telegram group!
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Section>
  );
};

const Img = styled.img`
  min-height: 15%;
  max-width: 100%;
`;
