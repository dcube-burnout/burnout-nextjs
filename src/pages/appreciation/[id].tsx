import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import SendMessage from '../../components/SendMessage';
import Particle from '../../components/background-animation/Particle';
import { memberData } from '../../data/member-data';
import CompleteMessage from '../../components/CompleteMessage';
import { Container } from '../../global-style';

enum AppreciationFlowState {
  APPRECIATION_START,
  APPRECIATION_SEND_MESSAGE,
  APPRECIATION_CONFIRMATION,
  APPRECIATION_DONE,
}

const AppreciationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [appreciationFlowState, setAppreciationFlowState] = useState(AppreciationFlowState.APPRECIATION_SEND_MESSAGE);

  // Find member's data based on ID
  const data = memberData.filter((member) => member.id === id);

  function handleComplete(input: string) {
    //Submit data by calling API

    fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/appreciation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiverId: id,
        writeup: input,
        userId: 1, // To change
      }),
    })
      .then((res) => res.json())
      .then((resData) => console.log(resData))
      .catch(() => console.log('error'));

    setAppreciationFlowState(AppreciationFlowState.APPRECIATION_DONE);
  }

  switch (appreciationFlowState) {
    case AppreciationFlowState.APPRECIATION_SEND_MESSAGE: {
      return (
        <>
          `{' '}
          <Container>
            <Navbar />
            <SendMessage key={`${id}`} memberData={{ ...data[0] }} handleComplete={handleComplete} />`{' '}
          </Container>
          <Particle />
        </>
      );
    }

    case AppreciationFlowState.APPRECIATION_DONE: {
      return (
        <>
          `{' '}
          <Container>
            <Navbar />
            <CompleteMessage />
          </Container>
          <Particle />
        </>
      );
    }
  }
};

export default AppreciationPage;
