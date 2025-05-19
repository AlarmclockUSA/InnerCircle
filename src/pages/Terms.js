import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
`;

const TermsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const TermsSection = styled.section`
  margin-bottom: 30px;
`;

const TermsHeading = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const TermsParagraph = styled.p`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Inner Circle's Terms of Service outlines the rules and guidelines for using our leadership training and coaching services."
        keywords="terms of service, legal terms, membership terms, inner circle terms, refund policy"
        canonicalUrl="/terms"
      />
      <Header />
      <TermsContainer>
        <TermsTitle>Terms of Service</TermsTitle>
        
        <TermsSection>
          <TermsHeading>1. Introduction</TermsHeading>
          <TermsParagraph>
            Welcome to Inner Circle. These Terms of Service govern your use of our website and services offered by Inner Circle.
            By accessing or using our services, you agree to be bound by these Terms.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>2. Use of Services</TermsHeading>
          <TermsParagraph>
            Our services are designed to help executives and leaders build high-performance teams. You agree to use our services only for lawful purposes
            and in accordance with these Terms of Service.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>3. Membership and Subscription</TermsHeading>
          <TermsParagraph>
            Access to certain features of our service requires paid membership. By subscribing to our services, you agree to pay all fees associated with
            the plan you select. Subscription fees are charged at the beginning of your subscription period and will automatically renew unless
            canceled before the renewal date.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>4. Refund Policy</TermsHeading>
          <TermsParagraph>
            We offer a 30-day money-back guarantee for new memberships. If you are not satisfied with our services within the first 30 days, 
            you may request a refund by contacting our support team.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>5. Intellectual Property</TermsHeading>
          <TermsParagraph>
            All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, and videos,
            are the exclusive property of Inner Circle and are protected by copyright, trademark, and other intellectual property laws.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>6. Limitation of Liability</TermsHeading>
          <TermsParagraph>
            In no event shall Inner Circle be liable for any indirect, incidental, special, consequential, or punitive damages, including 
            but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of
            or inability to access or use the services.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>7. Changes to Terms</TermsHeading>
          <TermsParagraph>
            We may modify these Terms of Service at any time. We will provide notice of any significant changes by posting the new Terms 
            on our website or via email. Your continued use of our services after such modifications constitutes your acceptance of the revised Terms.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>8. Contact Information</TermsHeading>
          <TermsParagraph>
            If you have any questions about these Terms, please contact us at help@brilliantperspectives.com.
          </TermsParagraph>
        </TermsSection>
      </TermsContainer>
      <Footer />
    </>
  );
};

export default Terms; 