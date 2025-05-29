
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-blue-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white">Privacy Policy</h1>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2>1. Introduction</h2>
              <p>
                PublifyX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our demand-side platform and related services.
              </p>
            </section>

            <section className="mb-12">
              <h2>2. Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Company information (company name, job title, industry)</li>
                <li>Account credentials (username, encrypted passwords)</li>
                <li>Billing information (payment details, billing address)</li>
              </ul>

              <h3>Usage Information</h3>
              <p>We automatically collect information about how you use our services:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Campaign performance data and analytics</li>
                <li>Platform usage patterns and preferences</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Log files and technical data for service optimization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Providing and maintaining our advertising platform services</li>
                <li>Processing payments and managing your account</li>
                <li>Delivering targeted advertising campaigns</li>
                <li>Analyzing and improving our platform performance</li>
                <li>Communicating with you about your account and our services</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              
              <h3>Service Providers</h3>
              <p>We work with third-party service providers who assist us in operating our platform, including:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Cloud hosting and data storage providers</li>
                <li>Payment processing companies</li>
                <li>Analytics and monitoring services</li>
                <li>Customer support platforms</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</p>

              <h3>Legal Requirements</h3>
              <p>We may disclose your information if required to do so by law or in response to valid legal requests.</p>
            </section>

            <section className="mb-12">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication systems</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We will also retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-12">
              <h2>7. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-12">
              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers are conducted in accordance with applicable data protection laws and include appropriate safeguards.
              </p>
            </section>

            <section className="mb-12">
              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>
                  <strong>PublifyX Privacy Team</strong><br />
                  123 Digital Avenue<br />
                  San Francisco, CA 94105<br />
                  Email: privacy@publifyx.com<br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
