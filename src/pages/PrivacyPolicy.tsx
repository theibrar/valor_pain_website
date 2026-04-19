import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <p>Last Updated: April 17, 2026</p>
      
      <h2>1. Introduction</h2>
      <p>Valor Pain & Wellness ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We may collect personal information that you provide directly to us through our lead capture forms, contact forms, or when you schedule an appointment. This information may include:</p>
      <ul>
        <li>Name and contact information (email address, phone number).</li>
        <li>Health-related information provided in consultation requests.</li>
        <li>Demographic information.</li>
      </ul>
      
      <h2>3. HIPAA Compliance</h2>
      <p>As a healthcare provider, we handle "Protected Health Information" (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA). For detailed information on how we protect your PHI, please refer to our HIPAA Notice of Privacy Practices.</p>
      
      <h2>4. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our services.</li>
        <li>Communicate with you about appointments and services.</li>
        <li>Respond to your inquiries and support needs.</li>
        <li>Comply with legal and regulatory obligations.</li>
      </ul>
      
      <h2>5. Data Security</h2>
      <p>We implement robust technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
      
      <h2>6. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>
      
      <h2>7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>Valor Pain & Wellness<br />
      Address: 170 N. Preston Rd. #40, Prosper, TX. 75078<br />
      Email: Info@valorpainwellness.com<br />
      Phone: +1 469-215-8538</p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
