import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
          <p className="text-text-light mb-4">
            AGI Agents ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered services, including our AI Calling Bots, Chatbots, and Business Automation solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-2 text-white">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-4 text-text-light">
            <li>Contact information (name, email address, phone number)</li>
            <li>Business information (company name, role)</li>
            <li>Communication preferences</li>
            <li>Service usage data</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-white">2.2 Voice and Communication Data</h3>
          <p className="text-text-light mb-4">
            Our AI Calling Bots and Chatbots may collect and process:
          </p>
          <ul className="list-disc pl-6 mb-4 text-text-light">
            <li>Voice recordings and transcripts</li>
            <li>Chat logs and message content</li>
            <li>Interaction data and analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4 text-text-light">
            <li>Provide and improve our AI services</li>
            <li>Train and enhance our AI models</li>
            <li>Analyze service performance and usage patterns</li>
            <li>Comply with legal obligations</li>
            <li>Communicate about service updates and offerings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Protection and Security</h2>
          <p className="text-text-light mb-4">
            We implement industry-standard security measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-text-light">
            <li>End-to-end encryption for voice and chat communications</li>
            <li>Secure data storage and transmission</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication measures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Retention and Deletion</h2>
          <p className="text-text-light mb-4">
            We retain your data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your personal data, subject to legal requirements and technical limitations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights and Choices</h2>
          <p className="text-text-light mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-text-light">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request data deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Restrict data processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">7. AI-Specific Considerations</h2>
          <p className="text-text-light mb-4">
            Our AI services involve automated decision-making and processing. We ensure:
          </p>
          <ul className="list-disc pl-6 mb-4 text-text-light">
            <li>Transparency in AI operations</li>
            <li>Human oversight of AI systems</li>
            <li>Regular AI model updates and improvements</li>
            <li>Bias prevention and fairness in AI operations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Compliance</h2>
          <p className="text-text-light mb-4">
            We comply with applicable data protection laws and regulations, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-text-light">
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>Telephone Consumer Protection Act (TCPA)</li>
            <li>CAN-SPAM Act</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
          <p className="text-text-light mb-4">
            For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer at:
          </p>
          <p className="text-text-light">
            Email: privacy@agiagents.com<br />
            Phone: (123) 456-7890<br />
            Address: [Your Business Address]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">10. Updates to This Policy</h2>
          <p className="text-text-light mb-4">
            We may update this Privacy Policy periodically. The latest version will be posted on our website with the effective date.
          </p>
          <p className="text-text-light">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </div>
  );
}