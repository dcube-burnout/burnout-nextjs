import React from 'react';
import SectionHeader from '../SectionHeader';
import { IMemberData } from '../../data/types';
import MemberCard from './MemberCard';
import { Grid } from '@mui/material';
import { MdGroups } from 'react-icons/md';
import Section from '../Section';

interface Props {
  data: IMemberData[];
}

const MemberCards = ({ data }: Props) => {
  return (
    <Section>
      <SectionHeader
        headerType={'team'}
        title={'Team members'}
        description={'Kind words goes a long way, let your team members know what they did well today!'}
        buttonLabel={'Add member'}
        Icon={MdGroups}
      />
      <Grid container spacing={2}>
        {data.map((member) => (
          <Grid item xs={3} key={member.id}>
            <MemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default MemberCards;
