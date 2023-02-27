import React from "react";
import styled from "styled-components";
import { SectionHeader } from "./types";
import { MdGroups, MdOutlineEventNote, MdStarRate } from "react-icons/md";

const SectionHeader = ({
  headerType,
  title,
  description,
  buttonLabel,
  buttonAction,
}: SectionHeader) => {
  return (
    <>
      <TextWrapper>
        <h2>
          {headerType === "team" ? (
            <MdGroups />
          ) : headerType === "intitatives" ? (
            <MdStarRate />
          ) : (
            <MdOutlineEventNote />
          )}
          &nbsp;{title}
        </h2>
        <br />
        {buttonLabel && <Button onClick={buttonAction}>{buttonLabel}</Button>}
      </TextWrapper>
      <Description>{description}</Description>
    </>
  );
};

const Button = styled.button`
  background-color: #ff6624;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  z-index: 100; // For particles

  &:hover {
    background-color: #cd3e00;
    box-shadow: 1px 1px;
  }
`;

const TextWrapper = styled.div`
  margin-top: 48px;
  flex-direction: "row";
  flex-wrap: "wrap";
  padding: 1rem 2rem;
  color: white;
  justify-content: space-between;
  display: flex;
`;

const Description = styled.div`
  flex-direction: "row";
  flex-wrap: "wrap";
  padding: 0.5rem 2rem;
  color: white;
`;

export default SectionHeader;
