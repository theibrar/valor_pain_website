import React from 'react';
import LegalLayout from '../components/LegalLayout';

const HIPAA: React.FC = () => {
  return (
    <LegalLayout title="HIPAA Notice">
      <p>Notice of Privacy Practices</p>
      
      <h2>Our Commitment to Your Privacy</h2>
      <p>This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.</p>
      
      <h2>What is HIPAA?</h2>
      <p>The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal law that required the creation of national standards to protect sensitive patient health information from being disclosed without the patient’s consent or knowledge.</p>
      
      <h2>How We May Use and Disclose Your Health Information</h2>
      <p>We may use and disclose your health information for several different purposes, including:</p>
      <ul>
        <li><strong>Treatment:</strong> To provide you with medical treatment or services.</li>
        <li><strong>Payment:</strong> To bill and collect payment from you, an insurance company, or a third party.</li>
        <li><strong>Healthcare Operations:</strong> To run our practice and ensure all patients receive quality care.</li>
      </ul>
      
      <h2>Your Rights Regarding Your Health Information</h2>
      <p>You have the following rights regarding the health information we maintain about you:</p>
      <ul>
        <li>Right to Inspect and Copy your medical records.</li>
        <li>Right to Amend your medical information if you feel it is incorrect.</li>
        <li>Right to an Accounting of Disclosures.</li>
        <li>Right to Request Restrictions on how we use your information.</li>
        <li>Right to Request Confidential Communications.</li>
      </ul>
      
      <h2>Complaints</h2>
      <p>If you believe your privacy rights have been violated, you may file a complaint with our office or with the Secretary of the Department of Health and Human Services.</p>
      
      <h2>Contact</h2>
      <p>For more information about our privacy practices, please contact our Privacy Officer at +1 469-215-8538, email Info@valorpainwellness.com, or visit us at 170 N. Preston Rd. #40, Prosper, TX. 75078.</p>
    </LegalLayout>
  );
};

export default HIPAA;
