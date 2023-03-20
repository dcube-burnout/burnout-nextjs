import React from 'react';
import { Box } from '@mui/system';

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return <Box my={2}>{children}</Box>;
};

export default Section;
