
import Layout from "@/components/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="bg-blue-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white">Terms and Conditions</h1>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using PublifyX's services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-12">
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of PublifyX's materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>3. Service Description</h2>
              <p>
                PublifyX provides a demand-side platform (DSP) for targeted audio advertising. Our services include campaign management, audience targeting, real-time analytics, and AI-powered optimization tools. Service availability and features may vary based on your subscription plan.
              </p>
            </section>

            <section className="mb-12">
              <h2>4. User Accounts</h2>
              <p>
                To access certain features of our service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-12">
              <h2>5. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services. By using PublifyX, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2>6. Payment Terms</h2>
              <p>
                Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as expressly stated in these terms. We reserve the right to change our pricing with 30 days' notice to existing customers.
              </p>
            </section>

            <section className="mb-12">
              <h2>7. Advertising Content Guidelines</h2>
              <p>
                All advertising content must comply with applicable laws and regulations. Prohibited content includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Illegal products or services</li>
                <li>Misleading or deceptive claims</li>
                <li>Adult content not appropriate for general audiences</li>
                <li>Content that promotes discrimination or hate speech</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall PublifyX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use PublifyX's services, even if PublifyX or a PublifyX authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-12">
              <h2>9. Termination</h2>
              <p>
                Either party may terminate this agreement at any time with or without notice. Upon termination, your right to use the service will cease immediately. All provisions of this agreement which by their nature should survive termination shall survive termination.
              </p>
            </section>

            <section className="mb-12">
              <h2>10. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the State of California, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-12">
              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>
                  <strong>PublifyX Legal Department</strong><br />
                  123 Digital Avenue<br />
                  San Francisco, CA 94105<br />
                  Email: legal@publifyx.com<br />
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

export default TermsConditions;
