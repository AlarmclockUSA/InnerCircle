import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCarousel from '../components/FeatureCarousel';
import Testimonials from '../components/Testimonials';
import OfferList from '../components/OfferList';
import Pricing from '../components/Pricing';
import Guarantee from '../components/Guarantee';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroBg = styled.div`
  width: 100vw;
  background: url('/assets/Header.png') center center/cover no-repeat;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 10px 32px 0 rgba(42, 110, 207, 0.15);
  padding: 0;
  aspect-ratio: unset;
  overflow: visible;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 220px;
    border-radius: 0 0 22px 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 120px;
    border-radius: 0 0 10px 10px;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 875px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 56px 0 32px 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 98vw;
    padding: 32px 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 0 0 0;
  }
`;

const HeroSection = styled.section`
  background: none;
  margin-top: 40px;
  box-shadow: none;
  width: 95%;
  max-width: 675px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 16px;
    max-width: 99vw;
    padding-bottom: 16px;
  }
`;

const Home = () => {
  return (
    <>
      <SEO 
        title="Build A High Performance Team"
        description="Transform your leadership and build a high performance team that functions from rest. Experience monthly executive trainings, leadership habits, and a powerful platform for Kingdom leaders."
        keywords="leadership training, executive coaching, high performance team, kingdom leadership, LeaderForge, leadership development"
        canonicalUrl="/"
      />
      <Header />
      <Hero />
      <MainContent>
        <HeroBg className="hero-bg">
          <HeroContent className="hero-content"></HeroContent>
        </HeroBg>
        <HeroSection className="hero">
          <FeatureCarousel />
          <Testimonials />
          <OfferList />
          <Pricing />
        </HeroSection>
        <Guarantee />
      </MainContent>
      <Footer />
    </>
  );
};

export default Home; 