import Link from "next/link"

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="container mx-auto py-8">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-zinc-400 mb-12">Last updated: April 20, 2025</p>
      </div>

      {/* Content */}
      <div className="container mx-auto pb-24">
        <div className="prose prose-lg prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Silvera Group ("we," "our," or "us") uses cookies and similar technologies
              on our website. This policy provides you with information about how we use cookies, what types of cookies
              we use, and how you can control them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
              websites. They are widely used to make websites work more efficiently and provide information to the
              website owners. Cookies enhance user experience by remembering your preferences and enabling certain
              website functions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
            <p>We use the following types of cookies on our website:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                They enable basic functions like page navigation and access to secure areas of the website. The website
                cannot function properly without these cookies.
              </li>
              <li>
                <strong>Preference Cookies:</strong> These cookies allow the website to remember choices you make (such
                as your preferred language or the region you are in) and provide enhanced, more personalized features.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously. This helps us improve our website and your
                experience.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The
                intention is to display ads that are relevant and engaging for the individual user.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. How We Use Cookies</h2>
            <p>We use cookies for various purposes, including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provide and maintain our website's functionality</li>
              <li>To improve our website and user experience</li>
              <li>To analyze how users navigate and use our website</li>
              <li>To personalize content and remember your preferences</li>
              <li>To provide targeted advertising based on your browsing behavior</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the website and deliver advertisements on and through the website. These third parties may include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Analytics providers (such as Google Analytics)</li>
              <li>Advertising networks</li>
              <li>Social media platforms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Managing Cookies</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies
              or delete certain cookies. Generally, you can also manage similar technologies in the same way that you
              manage cookies – using your browser's preferences.
            </p>
            <p className="mt-4">
              The following links provide information on how to modify your browser's settings to block or delete
              cookies:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  className="text-zinc-300 hover:text-white underline"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  className="text-zinc-300 hover:text-white underline"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                  className="text-zinc-300 hover:text-white underline"
                >
                  Edge
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className="text-zinc-300 hover:text-white underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://help.opera.com/en/latest/web-preferences/"
                  className="text-zinc-300 hover:text-white underline"
                >
                  Opera
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Please note that if you choose to block cookies, you may not be able to use all the features of our
              website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. GDPR Compliance</h2>
            <p>In accordance with the General Data Protection Regulation (GDPR), we ensure that:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>We obtain your consent before placing non-essential cookies on your device</li>
              <li>We provide clear and comprehensive information about the cookies we use</li>
              <li>We make it easy for you to withdraw your consent and manage your cookie preferences</li>
              <li>We document and store your consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
            <p className="mt-4">
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p>If you have any questions or concerns about our Cookie Policy, please contact us at:</p>
            <div className="mt-4">
              <p>Silvera Group</p>
              <p>Email: info@silveragroup.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
