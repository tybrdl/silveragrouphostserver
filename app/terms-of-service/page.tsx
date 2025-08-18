import Link from "next/link"

export default function TermsOfService() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-zinc-400 mb-12">Last updated: April 20, 2025</p>
      </div>

      {/* Content */}
      <div className="container mx-auto pb-24">
        <div className="prose prose-lg prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Silvera Group website, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
              using or accessing this site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Silvera Group's website for
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on Silvera Group's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p className="mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by Silvera Group at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p>
              The materials on Silvera Group's website are provided on an 'as is' basis. Silvera Group makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mt-4">
              Further, Silvera Group does not warrant or make any representations concerning the accuracy, likely
              results, or reliability of the use of the materials on its website or otherwise relating to such materials
              or on any sites linked to this site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p>
              In no event shall Silvera Group or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Silvera Group's website, even if Silvera Group or a Silvera Group authorized
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Revisions and Errata</h2>
            <p>
              The materials appearing on Silvera Group's website could include technical, typographical, or photographic
              errors. Silvera Group does not warrant that any of the materials on its website are accurate, complete or
              current. Silvera Group may make changes to the materials contained on its website at any time without
              notice. Silvera Group does not, however, make any commitment to update the materials.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
