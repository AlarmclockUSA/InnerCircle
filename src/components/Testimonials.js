import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 40px auto;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 98vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 24px;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 32px 32px 0;
  gap: 32px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 16px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 8px;
    gap: 8px;
  }
`;

const TestimonialImgWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 110px;
    height: 110px;
  }
`;

const TestimonialCircle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at 50% 40%, #6cb6ff 60%, #7e8ca3 100%);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0.85;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90px;
    height: 90px;
  }
`;

const TestimonialImg = styled.img`
  position: relative;
  z-index: 2;
  width: 300px;
  height: 300px;
  object-fit: contain;
  background: transparent;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 160px;
    height: 160px;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90px;
    height: 90px;
    border-bottom-left-radius: 45px;
    border-bottom-right-radius: 45px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TestimonialLabel = styled.div`
  color: #00b6e6;
  font-size: 0.95em;
  font-weight: 700;
  margin-bottom: 2px;
  letter-spacing: 0.03em;
`;

const TestimonialHeading = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 4px;
`;

const TestimonialText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin-bottom: 8px;
`;

const TestimonialAuthor = styled.span`
  color: #00b6e6;
  font-size: 0.95em;
  font-weight: 600;
`;

const TestimonialBullets = styled.ul`
  margin: 0 0 8px 0;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.97em;
  line-height: 1.5;
`;

const TestimonialBullet = styled.li``;

const TestimonialButton = styled.a`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 60%, ${({ theme }) => theme.colors.secondary} 100%);
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  width: fit-content;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection className="testimonials">
      <TestimonialCard className="testimonial">
        <TestimonialImgWrapper className="testimonial-img-wrapper">
          <TestimonialCircle className="testimonial-circle" />
          <TestimonialImg 
            src="/assets/person1.png" 
            alt="Testimonial 1" 
            className="testimonial-img" 
          />
        </TestimonialImgWrapper>
        <TestimonialContent className="testimonial-content">
          <TestimonialLabel className="testimonial-label">ABOUT THE PROGRAM</TestimonialLabel>
          <TestimonialHeading>Upgrade Your Team</TestimonialHeading>
          <TestimonialText>
            "It's teaching my team principles that I couldn't teach them, my people are saying, wow, this works!" 
            <TestimonialAuthor>Robin | CEO Noah Certified</TestimonialAuthor>
          </TestimonialText>
          <TestimonialBullets className="testimonial-bullets">
            <TestimonialBullet>
              Are you secretly worried your team might be sabotaging your company's growth and not even know it?
            </TestimonialBullet>
            <TestimonialBullet>
              Bulletproof: The exact strategy we use to instantly shift the energy culture (that skyrockets productivity). 
              Discover how (while being a hands-on admin) and bonus: two powerful new habits and workflows for your team.
            </TestimonialBullet>
          </TestimonialBullets>
          <TestimonialButton href="#pricing" className="header-btn filled">
            Get Started Now
          </TestimonialButton>
        </TestimonialContent>
      </TestimonialCard>

      <TestimonialCard className="testimonial">
        <TestimonialImgWrapper className="testimonial-img-wrapper">
          <TestimonialCircle className="testimonial-circle" />
          <TestimonialImg 
            src="/assets/person2.png" 
            alt="Testimonial 2" 
            className="testimonial-img" 
          />
        </TestimonialImgWrapper>
        <TestimonialContent className="testimonial-content">
          <TestimonialLabel className="testimonial-label">ABOUT THE PROGRAM</TestimonialLabel>
          <TestimonialHeading>Get Your Life Back</TestimonialHeading>
          <TestimonialText>
            "You will never look or think about business the same way ever again. This training gave me my life back." 
            <TestimonialAuthor>Jay | Human Resources</TestimonialAuthor>
          </TestimonialText>
          <TestimonialBullets className="testimonial-bullets">
            <TestimonialBullet>
              Has your business become all-absorbing with no simple way to show it?
            </TestimonialBullet>
            <TestimonialBullet>
              Results: We'll show you the step-by-step process to take your business to the next level, 
              unlock and win life on your own terms.
            </TestimonialBullet>
          </TestimonialBullets>
          <TestimonialButton href="#pricing" className="header-btn filled">
            Get Started Now
          </TestimonialButton>
        </TestimonialContent>
      </TestimonialCard>

      <TestimonialCard className="testimonial">
        <TestimonialImgWrapper className="testimonial-img-wrapper">
          <TestimonialCircle className="testimonial-circle" />
          <TestimonialImg 
            src="/assets/person3.png" 
            alt="Testimonial 3" 
            className="testimonial-img" 
          />
        </TestimonialImgWrapper>
        <TestimonialContent className="testimonial-content">
          <TestimonialLabel className="testimonial-label">ABOUT THE PROGRAM</TestimonialLabel>
          <TestimonialHeading>Proven Results</TestimonialHeading>
          <TestimonialText>
            "This has revolutionized my business and my time and made me more productive than I've ever been 
            in all the years I've been in business. Plus, we're able to help each team member feel safe! 
            That didn't really exist in my business before because I never had the right principles." 
            <TestimonialAuthor>Bailey | Marketing & Tech Agency</TestimonialAuthor>
          </TestimonialText>
          <TestimonialBullets className="testimonial-bullets">
            <TestimonialBullet>
              We've gone down to four-day work weeks. I never would have thought we'd get the core right, 
              and each feel unstressed, after feeling like there aren't enough hours in the day.
            </TestimonialBullet>
          </TestimonialBullets>
          <TestimonialButton href="#pricing" className="header-btn filled">
            Get Started Now
          </TestimonialButton>
        </TestimonialContent>
      </TestimonialCard>
    </TestimonialsSection>
  );
};

export default Testimonials; 