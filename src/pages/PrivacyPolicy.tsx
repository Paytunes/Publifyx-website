
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
            <p className="mb-8">
              Please read these Terms carefully, and contact us if you have any questions.
            </p>
            
            <p className="text-gray-600 mb-8">
              This document was last updated on September 19, 2021
            </p>

            <p className="mb-8">
              This Privacy Policy governs the manner in which PublifyX collects, uses, maintains, and discloses information collected from users (each, a "User") of the www.publifyx.com website ("Site"). This privacy policy applies to the Site and all products and services offered by PublifyX.
            </p>

            <section className="mb-12">
              <h2>Personal identification information</h2>
              <p>
                We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, and in connection with other activities, services, features, or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
              </p>
            </section>

            <section className="mb-12">
              <h2>Non-personal identification information</h2>
              <p>
                We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Sites, such as the operating system and the Internet service providers utilized and other similar information.
              </p>
            </section>

            <section className="mb-12">
              <h2>Web browser cookies</h2>
              <p>
                Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
              </p>
            </section>

            <section className="mb-12">
              <h2>How we use collected information</h2>
              <p>PublifyX may collect and use Users personal information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>To run a promotion, contest, survey or other Site feature</li>
                <li>To send Users information they agreed to receive about topics we think will be of interest to them.</li>
                <li>To send periodic emails</li>
              </ul>
              <p className="mt-4">
                If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
              </p>
            </section>

            <section className="mb-12">
              <h2>How we protect your information</h2>
              <p>
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
              </p>
            </section>

            <section className="mb-12">
              <h2>Sharing your personal information</h2>
              <p>
                We do not sell, trade, or rent User's personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above. We may use third-party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
              </p>
            </section>

            <section className="mb-12">
              <h2>Third-party websites</h2>
              <p>
                Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.
              </p>
            </section>

            <section className="mb-12">
              <h2>Changes to this privacy policy</h2>
              <p>
                PublifyX has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </section>

            <section className="mb-12">
              <h2>Your acceptance of these terms</h2>
              <p>
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>
            </section>

            <section className="mb-12">
              <h2>Contacting us</h2>
              <p>
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at info@publifyx.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
