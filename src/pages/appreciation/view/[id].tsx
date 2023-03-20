import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import { Container } from '../../../global-style';
import ViewMessage from '../../../components/ViewMessage';
import { IAppreciationData } from '../../../data/types';
import { useRouter } from 'next/router';
const ViewAppreciationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [appreciations, setAppreciations] = useState<IAppreciationData[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/appreciation/` + id)
      .then((res) => res.json())
      .then((resData) => setAppreciations(resData));
  }, []);

  const writeup = appreciations.at(0) != undefined ? appreciations[0].writeup : '';
  return (
    <Container>
      <div>
        <Navbar />
        <ViewMessage title="Sprint 202 Personal Accomplishment" date="02/02/2023" message={writeup} />
      </div>
    </Container>
  );
};

export default ViewAppreciationPage;
