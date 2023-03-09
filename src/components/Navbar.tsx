import styled from 'styled-components';
import Link from 'next/link';
import { MdAllInbox, MdPerson, MdWbSunny } from 'react-icons/md';
import { Open_Sans } from '@next/font/google';

const open_Sans = Open_Sans({ subsets: ['latin'] });

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: sticky;
  z-index: 100; // For particles
`;

const StyledLink = styled.span`
  padding: 0rem 2rem;
  font-family: ${open_Sans.style.fontFamily};
`;

const InboxButton = styled.div`
  border: 1px solid white;
  border-radius: 16px;
  height: 2rem;
  width: 2rem;
  text-align: center;
  margin-right: 1rem;
`;

const ProfileButton = styled.div`
  border: 1px solid white;
  border-radius: 16px;
  height: 2rem;
  width: 2rem;
  text-align: center;
  margin-right: 1rem;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <StyledLink
            style={{
              fontSize: '1rem',
              letterSpacing: '3px',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Gratitude@GovTech
          </StyledLink>
        </Link>
      </div>
      <NavWrapper>
        <Link href="/" passHref style={{ textDecoration: 'none', color: 'white' }}>
          <ProfileButton>
            <MdWbSunny style={{ verticalAlign: 'middle', marginTop: '7px' }} />
          </ProfileButton>
        </Link>
        <Link href="/inbox" passHref style={{ textDecoration: 'none', color: 'white' }}>
          <InboxButton>
            <MdAllInbox style={{ verticalAlign: 'middle', marginTop: '7px' }} />
          </InboxButton>
        </Link>
        <Link href="/survey" passHref style={{ textDecoration: 'none', color: 'white' }}>
          <ProfileButton>
            <MdPerson style={{ verticalAlign: 'middle', marginTop: '7px' }} />
          </ProfileButton>
        </Link>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
