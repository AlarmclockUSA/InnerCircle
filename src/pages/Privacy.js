import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
`;

const PrivacyTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const PrivacySection = styled.section`
  margin-bottom: 30px;
`;

const PrivacyHeading = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const PrivacyParagraph = styled.p`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Inner Circle's Privacy Policy outlines how we collect, use, and protect your personal information when you use our leadership training services."
        keywords="privacy policy, data protection, personal information, cookies, GDPR, privacy rights, data security"
        canonicalUrl="/privacy"
      />
      <Header />
      <PrivacyContainer>
        <PrivacyTitle>Privacy Policy</PrivacyTitle>
        
        <PrivacySection>
          <PrivacyHeading>1. Introduction</PrivacyHeading>
          <PrivacyParagraph>
            At Inner Circle, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, 
            and safeguard your information when you use our services.
          </PrivacyParagraph>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>2. Information We Collect</PrivacyHeading>
          <PrivacyParagraph>
            We collect personal information that you voluntarily provide to us when you register for an account, express interest in obtaining information
            about our services, or otherwise contact us. This may include your name, email address, phone number, and billing information.
          </PrivacyParagraph>
          <PrivacyParagraph>
            We also automatically collect certain information when you visit our website, including IP address, browser type, operating system, 
            and pages visited. This information helps us improve our website and user experience.
          </PrivacyParagraph>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>3. How We Use Your Information</PrivacyHeading>
          <PrivacyParagraph>
            We use your personal information to:
          </PrivacyParagraph>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process payments and manage your account</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send you updates, newsletters, and promotional materials</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>4. Cookies and Tracking Technologies</PrivacyHeading>
          <PrivacyParagraph>
            We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies help us remember your 
            preferences, understand how you use our website, and improve your experience. You can manage your cookie preferences through your browser settings.
          </PrivacyParagraph>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>5. Data Sharing and Disclosure</PrivacyHeading>
          <PrivacyParagraph>
            We may share your information with:
          </PrivacyParagraph>
          <ul>
            <li>Service providers who help us operate our business</li>
            <li>Payment processors to complete transactions</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
          <PrivacyParagraph>
            We do not sell your personal information to third parties.
          </PrivacyParagraph>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>6. Data Security</PrivacyHeading>
          <PrivacyParagraph>
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, 
            disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, 
            and we cannot guarantee absolute security.
          </PrivacyParagraph>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>7. Your Rights</PrivacyHeading>
          <PrivacyParagraph>
            Depending on your location, you may have rights regarding your personal information, including:
          </PrivacyParagraph>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
          </ul>
          <PrivacyParagraph>
            To exercise your rights, please contact us using the information provided below.
          </PrivacyParagraph>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>8. Changes to This Privacy Policy</PrivacyHeading>
          <PrivacyParagraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website or 
            via email. We encourage you to review this Privacy Policy periodically.
          </PrivacyParagraph>
        </PrivacySection>
        
        <PrivacySection>
          <PrivacyHeading>9. Contact Information</PrivacyHeading>
          <PrivacyParagraph>
            If you have any questions about this Privacy Policy or our data practices, please contact us at help@brilliantperspectives.com.
          </PrivacyParagraph>
        </PrivacySection>
      </PrivacyContainer>
      <Footer />
    </>
  );
};

export default Privacy; 