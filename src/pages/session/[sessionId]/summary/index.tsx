import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import type { IButtonData, ISummaryData } from '@/data/types';
import { InfoSection } from './info-section';
import { IndivScore } from './indiv-score';
import { OverallScore } from './overall-score';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Textarea } from '@lifesg/react-design-system';
import Particle from 'src/components/background-animation/Particle';
import { summaryData } from 'src/data/session-data';
import { open_Sans } from 'src/global-style';
import Navbar from 'src/components/Navbar';

const getOverallStage = (score: number) => {
  console.log(score);
  return score === 0 ? 'Low' : score === 1 ? 'Medium' : 'High';
};

const getStage = (score: number) => {
  return score <= 17 ? 'Low' : score > 30 ? 'High' : 'Medium';
};

const getStageFulfilment = (score: number) => {
  return score <= 17 ? 'High' : score > 30 ? 'Low' : 'Medium';
};

const SummaryPage = () => {
  const router = useRouter();
  const { sessionId } = router.query;
  const responseData = JSON.parse(sessionStorage.getItem(`burnout-reflection-response-${sessionId}`) ?? '');
  const [data, setData] = useState<ISummaryData>({
    title: '',
    info: [],
    indivScores: [],
    overallScore: { label: '', category: 'Low' },
    accomplishments: '',
    description: '',
    buttons: [],
  });

  console.log({ responseData });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/sessions/` + sessionId)
      .then((res) => res.json())
      .then((resData) =>
        setData(
          summaryData(
            resData.title,
            resData.date.slice(0, 10),
            {
              indiv: [
                {
                  label: 'A. Emotional Exhaustion',
                  numeric: responseData.burnout_inv_id.exhaustion,
                  category: getStage(responseData.burnout_inv_id.exhaustion),
                },
                {
                  label: 'B. Depesonalisation',
                  numeric: responseData.burnout_inv_id.depersonalisation,
                  category: getStage(responseData.burnout_inv_id.depersonalisation),
                },
                {
                  label: 'C. Personal Fulfilment',
                  numeric: responseData.burnout_inv_id.fulfilment,
                  category: getStageFulfilment(responseData.burnout_inv_id.fulfilment),
                },
              ],
              overall: { label: 'Overall Score', category: getOverallStage(responseData.burnout_inv_id.overall) },
            },
            responseData.achievements,
          ),
        ),
      );
  }, []);

  return (
    <>
      <Navbar />
      <Particle />
      <Container>
        <Layout>
          <InstructionWrapper>
            {/* <NavPath items={['Home', 'Check-in']} /> */}
            <h1>{data.title}</h1>

            <h5>
              {data.info.map((i) => (
                <>
                  <InfoSection {...i} key={i.label} />
                  <br />
                </>
              ))}
            </h5>

            <p>{data.description}</p>
            <TableDisplay>
              {data.indivScores.map((s) => (
                <TableLayout>
                  <IndivScore {...s} key={s.label} />
                </TableLayout>
              ))}
            </TableDisplay>
          </InstructionWrapper>

          <OverallScore {...data.overallScore} />
          <br />
          <p>My personal accomplishments:</p>
          <InputBox value={data.accomplishments} readOnly={true} />

          {data.buttons.map((b: IButtonData) => (
            <Button onClick={() => router.push('/')} key={b.label}>
              {b.label}
            </Button>
          ))}
        </Layout>
      </Container>
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
  margin-top: 2rem;
  z-index: 100; // For particles

  &:hover {
    background-color: #cd3e00;
    box-shadow: 1px 1px;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const TableDisplay = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const TableLayout = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-right: 2rem;
  z-index: 100;
`;

const InputBox = styled(Textarea)`
  max-width: 50rem;
  height: 25rem;
  background-color: #112161;
  border: 1px solid #57a9ff !important;
  color: white;
  z-index: 100;

  &:active {
    background-color: white;
  }

  @media screen and (max-width: 950px) {
    width: 80%;
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

export default dynamic(() => Promise.resolve(SummaryPage), { ssr: false });
