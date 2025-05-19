import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #181d23;
  color: #fff;
  width: 100%;
  padding: 32px 0 16px 0;
  text-align: center;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  color: #fff;
  font-size: 0.95rem;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  min-width: 220px;
  max-width: 320px;
  width: 100%;

  a {
    color: #00e6b0;
    text-decoration: none;
    margin: 0 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 120px;
    max-width: 180px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks className="footer-links">
        <Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer; 