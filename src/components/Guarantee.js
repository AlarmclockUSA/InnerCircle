import React from 'react';
import styled from 'styled-components';

const GuaranteeSection = styled.section`
  width: 100vw;
  background: #181d23;
  color: #fff;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  margin-top: 32px;
  margin-bottom: 0;
  padding: 0;
`;

const GuaranteeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 32px 8px;
    gap: 24px;
  }
`;

const GuaranteeImage = styled.div`
  flex: 0 0 320px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: none;
    max-width: 90vw;
  }
`;

const GuaranteeBadge = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
  background: #fff;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 90vw;
  }
`;

const GuaranteeText = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
`;

const GuaranteeHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const GuaranteeDescription = styled.p`
  font-size: 1.1rem;
  color: #e0e0e0;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const Guarantee = () => {
  return (
    <GuaranteeSection className="guarantee">
      <GuaranteeContent className="guarantee-content">
        <GuaranteeImage className="guarantee-image">
          <GuaranteeBadge 
            src="/assets/moneybackguarentee.jpg" 
            alt="Money Back Guarantee" 
            className="guarantee-badge"
          />
        </GuaranteeImage>
        <GuaranteeText className="guarantee-text">
          <GuaranteeHeading>Get Started Today 100% Risk-Free</GuaranteeHeading>
          <GuaranteeDescription>
            At the i49, we are committed to providing you with the highest quality training and resources. 
            We believe in what you are capable of and want to see you succeed. We're so confident you 
            and your team will see life-changing results, we're offering a 30-day money-back guarantee.
            <br /><br />
            If for any reason, if after a 30-day money-back guarantee, you're not happy with your purchase, 
            simply email us at help@brilliantperspectives.com.
          </GuaranteeDescription>
        </GuaranteeText>
      </GuaranteeContent>
    </GuaranteeSection>
  );
};

export default Guarantee; 