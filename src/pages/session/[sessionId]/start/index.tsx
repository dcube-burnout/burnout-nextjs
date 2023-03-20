'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { useRouter } from 'next/router';
import { startData } from 'src/data/session-data';
import Navbar from 'src/components/Navbar';
import styled from 'styled-components';
import Particle from 'src/components/background-animation/Particle';
import { open_Sans } from 'src/global-style';

const { title, description, instruction, buttons } = startData;
const StartPage = () => {
  const router = useRouter();
  const { sessionId } = router.query;

  const begin = () => {
    router.push(`/session/${sessionId}/questionnaire`);
  };

  const exit = () => {
    router.push('/');
  };
  return (
    <>
      <Navbar />
      <Particle />
      <Container>
        <Layout>
          <InstructionWrapper>
            {/* <NavPath items={['Home', 'Check-in']} /> */}
            <Title>{title}</Title>
            <Description>{description}</Description>
            <InstructionDesc>{instruction}</InstructionDesc>
          </InstructionWrapper>

          <Img src={'/img/survey-img.png'} style={{ marginTop: '5rem', marginLeft: '5rem' }} alt="survey-img" />

          <ButtonWrapper>
            <BeginButton onClick={begin}>{buttons[0].label}</BeginButton>
            <ExitButton onClick={exit}>{buttons[1].label}</ExitButton>
          </ButtonWrapper>
        </Layout>
      </Container>
    </>
  );
};

const InstructionWrapper = styled.div`
  width: 100%;
`;

const Img = styled.img`
  float: right;
  min-width: 350px;
  min-height: 350px;
  z-index: 100;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'auto auto';
  z-index: 100;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 2.5rem;
  /* @media screen and (min-width: 950px) {
		position: absolute;
		width: 70%;
		flex-wrap: wrap;
		display: flex;
		flex-direction: column-reverse;
	} */
`;

const Container = styled.div`
  padding: 2.5rem 2.5rem;
  background: #0d1435;
  min-height: 1080px;
  font-family: ${open_Sans.style.fontFamily};
  z-index: 100;
  color: white;
`;

const Description = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white;
  z-index: 100;
`;

const InstructionDesc = styled.div`
  z-index: 100;
  background-color: #112161;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #ff6624;
`;

const ExitButton = styled.button`
  background: #57a9ff;
  border: 1px solid #57a9ff;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  z-index: 100; // For particles

  &:hover {
    background-color: #112161;
    box-shadow: 1px 1px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const BeginButton = styled.button`
  background-color: #ff6624;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  z-index: 100; // For particles
  margin-right: 10rem;

  &:hover {
    background-color: #cd3e00;
    box-shadow: 1px 1px;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export default dynamic(() => Promise.resolve(StartPage), { ssr: false });
