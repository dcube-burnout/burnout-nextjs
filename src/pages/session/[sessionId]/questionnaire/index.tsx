'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Navbar from 'src/components/Navbar';
import { questionnaireData } from 'src/data/session-data';
import { Section } from './questionnaire-section';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { open_Sans } from 'src/global-style';

const { sections, buttons } = questionnaireData;

const QuestionnairePage = () => {
  const [vals, setVals] = useState(new Array(22));
  const router = useRouter();
  const { sessionId } = router.query;

  const setValsFunc = (i: number) => (val: string) => {
    const newVals = [...vals];
    newVals[i] = val;
    setVals(newVals);
  };

  const saveData = () => {
    sessionStorage.setItem(`burnout-questionnaire-session-${sessionId}-vals`, vals.join(','));
    router.push(`/session/${sessionId}/accomplishments`);
  };

  const back = () => {
    router.push(`/session/${sessionId}/start`);
  };

  useEffect(() => {
    console.log(vals.join(','));
  }, [vals]);

  return (
    <>
      <Navbar />
      <Container>
        <Layout>
          <InstructionWrapper>
            {/* <NavPath items={['Home', 'Check-in']} /> */}
            {sections.map((s) => (
              <Section sectionData={s} vals={vals} setVals={setValsFunc} key={s.title} />
            ))}
          </InstructionWrapper>

          <ButtonWrapper>
            <BackButton onClick={back}>{buttons[1].label}</BackButton>
            <NextButton onClick={saveData}>{buttons[0].label}</NextButton>
          </ButtonWrapper>
        </Layout>
      </Container>
    </>
  );
};

const ButtonWrapper = styled.div`
  padding: 2rem 2rem;
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
`;

const Layout = styled.div`
  z-index: 100;
`;

export default dynamic(() => Promise.resolve(QuestionnairePage), { ssr: false });
