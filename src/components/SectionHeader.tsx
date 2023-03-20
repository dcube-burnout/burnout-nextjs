import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { SectionHeader } from './types';
import { Box } from '@mui/system';

const SectionHeader = ({ Icon, title, description, buttonLabel, buttonAction }: SectionHeader) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">
          {Icon && <Icon />}
          &nbsp;{title}
        </Typography>
        {buttonLabel && (
          <Button variant="contained" onClick={buttonAction}>
            {buttonLabel}
          </Button>
        )}
      </Box>
      <Typography py={2}>{description}</Typography>
    </>
  );
};

export default SectionHeader;
