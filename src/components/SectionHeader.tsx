import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from './types';
import { MdGroups, MdOutlineEventNote, MdStarRate } from 'react-icons/md';
import Button from '@mui/material/Button';

const SectionHeader = ({ headerType, title, description, buttonLabel, buttonAction }: SectionHeader) => {
  return (
    <>
      <TextWrapper>
        <h2>
          {headerType === 'team' ? (
            <MdGroups />
          ) : headerType === 'intitatives' ? (
            <MdStarRate />
          ) : (
            <MdOutlineEventNote />
          )}
          &nbsp;{title}
        </h2>
        <br />
        {buttonLabel && <Button variant="contained" onClick={buttonAction}>{buttonLabel}</Button>}
      </TextWrapper>
      <Description>{description}</Description>
    </>
  );
};

const TextWrapper = styled.div`
  margin-top: 48px;
  flex-direction: 'row';
  flex-wrap: 'wrap';
  padding: 1rem 2rem;
  color: white;
  justify-content: space-between;
  display: flex;
`;

const Description = styled.div`
  flex-direction: 'row';
  flex-wrap: 'wrap';
  padding: 0.5rem 2rem;
  color: white;
`;

export default SectionHeader;
