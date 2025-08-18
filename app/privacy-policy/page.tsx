import Link from "next/link"

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-zinc-400 mb-12">Last updated: April 20, 2025</p>
      </div>

      {/* Content */}
      <div className="container mx-auto pb-24">
        <div className="prose prose-lg prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Silvera Group ("we," "our," or "us") respects your privacy and is committed to protecting it through our
              compliance with this policy. This Privacy Policy describes the types of information we may collect from
              you or that you may provide when you visit our website and our practices for collecting, using,
              maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our website, including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Personal information such as name, email address, and phone number when you contact us through our forms
              </li>
              <li>
                Information about your internet connection, the equipment you use to access our website, and usage
                details
              </li>
              <li>
                Non-personal information such as browser type, language preference, referring site, and the date and
                time of each visitor request
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To present our website and its contents to you</li>
              <li>To provide you with information, products, or services that you request from us</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>To carry out our obligations and enforce our rights</li>
              <li>To notify you about changes to our website or any products or services we offer</li>
              <li>In any other way we may describe when you provide the information</li>
              <li>For any other purpose with your consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users, and information that does not identify any
              individual, without restriction. We may disclose personal information that we collect or you provide as
              described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To our subsidiaries and affiliates</li>
              <li>To contractors, service providers, and other third parties we use to support our business</li>
              <li>
                To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of our assets
              </li>
              <li>To fulfill the purpose for which you provide it</li>
              <li>For any other purpose disclosed by us when you provide the information</li>
              <li>With your consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
            <p>
              If you have any questions or comments about this Privacy Policy and our privacy practices, please contact
              us at:
            </p>
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
