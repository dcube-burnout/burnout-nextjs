'use client';
import dynamic from 'next/dynamic';
import React, { useState, ChangeEvent } from 'react';
import Navbar from 'src/components/Navbar';
import { accomplishmentData } from 'src/data/session-data';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';
import { Textarea } from '@lifesg/react-design-system';
import { open_Sans } from 'src/global-style';

const { title, description, buttons } = accomplishmentData;

const AccomplishmentsPage = () => {
  const [accompState, setAccompState] = useState('');
  const router = useRouter();
  const { sessionId } = router.query;

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAccompState(e.target.value);
  };

  const submitReflections = async () => {
    console.log({ responses: sessionStorage.getItem(`burnout-questionnaire-session-${sessionId}-vals`) });
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_BACKEND}api/reflections`,
      method: 'POST',
      data: {
        session: sessionId,
        achievements: accompState,
        responses: sessionStorage.getItem(`burnout-questionnaire-session-${sessionId}-vals`),
        userId: 1,
      },
    });
    console.log({ response: response.data });
    sessionStorage.setItem(`burnout-reflection-response-${sessionId}`, JSON.stringify(response.data));
    router.push(`/session/${sessionId}/summary`);
  };

  return (
    <>
      <Navbar />
      <Container>
        {/* <NavPath items={['Home', 'Check-in']} /> */}
        <div>
          <h1>{title}</h1>
        </div>

        <InstructionWrapper>
          <p>{description}</p>
        </InstructionWrapper>

        {/* <textarea onChange={(e) => onTextAreaChange(e)} /><br /> */}
        <InputBox onChange={(e) => onTextAreaChange(e)} />
        <br />

        <BackButton onClick={() => router.push(`/session/${sessionId}/questionnaire`)}>{buttons[1].label}</BackButton>
        <NextButton onClick={submitReflections}>{buttons[0].label}</NextButton>
      </Container>
      ;
    </>
  );
};

const Container = styled.div`
  padding: 2.5rem 2.5rem;
  background: #0d1435;
  min-height: 1080px;
  font-family: ${open_Sans.style.fontFamily};
  z-index: 100;
  color: white;
`;

const InstructionWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const InputBox = styled(Textarea)`
  max-width: 50rem;
  height: 25rem;
  background-color: #112161;
  border: 1px solid #57a9ff;
  margin-top: 2rem;
  color: white;
  z-index: 100;

  &:active {
    background-color: white;
  }

  @media screen and (max-width: 950px) {
    width: 95%;
  }
`;

const BackButton = styled.button`
  background: #57a9ff;
  border: 1px solid #57a9ff;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  z-index: 100; // For particles
  margin-right: 2rem;
  margin-bottom: 2rem;

  &:hover {
    background-color: #112161;
    box-shadow: 1px 1px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const NextButton = styled.button`
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
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export default dynamic(() => Promise.resolve(AccomplishmentsPage), { ssr: false });
