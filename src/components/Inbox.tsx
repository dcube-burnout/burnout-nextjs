import React, { useState, useEffect } from 'react';
import { Container } from '../global-style';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import HeaderSection from '../components/team-member/HeaderSection';
import { memberData } from '../data/member-data';
import Link from 'next/link';
import Particle from '../components/background-animation/Particle';
import { IAppreciationData, IUser } from '../data/types';

const Inbox = () => {
  const [appreciation, setAppreciation] = useState<IAppreciationData[]>([]);
  const [giveAppreciation, setGiveAppreciation] = useState<IAppreciationData[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/appreciation?userId=1`)
      .then((res) => res.json())
      .then((resData) => setAppreciation(resData));
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/appreciation/giver?giverId=1`)
      .then((res) => res.json())
      .then((resData) => setGiveAppreciation(resData));
  }, []);

  const [users, setUser] = useState<IUser[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/users`)
      .then((res) => res.json())
      .then((resData) => {
        setUser(resData);
      });
  }, []);

  const getUserName = (users: IUser[], userId: number) => {
    if (users.length === 0) {
      return '';
    }

    const data = users.filter((user) => user.id === userId)[0].name;
    if (data != undefined) return data;
  };

  const viewMessage = [];
  for (let i = 0; i < appreciation.length; i++) {
    const name = getUserName(users, appreciation[i].giver);
    viewMessage.push({
      userId: appreciation[i].giver,
      title: 'From: ' + name,
      date: '2022/02/02',
      messageId: appreciation[i].id,
    });
  }

  for (let i = 0; i < giveAppreciation.length; i++) {
    const name = getUserName(users, giveAppreciation[i].receiver);
    viewMessage.push({
      userId: giveAppreciation[i].giver,
      title: 'To: ' + name,
      date: '2022/02/02',
      messageId: giveAppreciation[i].id,
    });
  }

  return (
    <>
      <Navbar />
      <Container>
        <HeaderSection
          profile={<Img src={memberData[0].imgSrc} />}
          teamName={'Team Burnout Hackers'}
          name={memberData[0].name}
        />
        <h3 style={{ color: 'white', padding: '2.5rem' }}>Inbox - View your appreciation messages 🌟</h3>
        <TextBox>View messages written by your team members as well as your personal reviews here.</TextBox>
        <TableWrapper>
          <Table>
            <tbody>
              <tr
                style={{
                  paddingTop: '2rem',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                }}
              >
                <th style={{ padding: '2rem', textDecoration: 'underline' }}>Title</th>

                <th style={{ padding: '2rem', textDecoration: 'underline' }}>Date</th>

                <th style={{ padding: '2rem', textDecoration: 'underline' }}></th>
              </tr>

              {viewMessage.map((data) => (
                <tr key={data.messageId} style={{ borderCollapse: 'collapse' }}>
                  <>
                    <TableData>
                      <span>{data['title']}</span>
                    </TableData>

                    <TableData>{data['date']}</TableData>
                    <TableData>
                      <Link href={'appreciation/view/' + data['messageId']}>
                        <StartButton>View</StartButton>
                      </Link>
                    </TableData>
                  </>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </Container>
      <Particle />
    </>
  );
};

const Table = styled.table`
  display: table;
  border: 1px solid white;
  color: white;
  border-radius: 16px;
  z-index: 100; // For particles
  background-color: #0d1435;
  tr:nth-child(even) {
    background-color: #112161;
  }
`;

const TableData = styled.td`
  padding-top: 2rem;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const StartButton = styled.button`
  background-color: #ff6624;
  border-radius: 4px;
  height: 2rem;
  width: 4rem;
  border-style: 1px solid;
  border-color: #ff6624;
  color: white;
  cursor: pointer;
`;

const Img = styled.img`
  float: left;
  max-width: 200px;
  max-height: 150px;
  border-radius: 5px;
  z-index: 100;
`;

const TextBox = styled.p`
  color: white;
  padding: 2.5rem;
  width: 100%;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2.5rem;
`;

export default Inbox;
