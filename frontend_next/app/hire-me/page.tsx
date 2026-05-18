import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { PricingCards } from "./pricing-cards";

export const metadata: Metadata = {
  title: "hire me",
  description:
    "looking for a dev who ships fast, writes clean code, and doesn't ghost? let's talk.",
};

export default function HireMePage() {
  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
      <div className="mb-16">
        <h1
          className="text-4xl md:text-5xl font-normal mb-4"
          style={{ fontFamily: '"Inria Serif", serif' }}
        >
          hire me
        </h1>
        <p className="text-white/40 max-w-lg text-lg leading-relaxed">
          i&apos;m available for freelance work, contract roles, and full-time
          positions. i ship fast, communicate clearly, and actually care about
          the product i&apos;m building.
        </p>
      </div>

      {/* pricing cards */}
      <PricingCards />

      {/* contact section */}
      <div className="grid md:grid-cols-2 gap-16 mt-24">
        {/* left info */}
        <div>
          <h2
            className="text-2xl mb-6 text-white/80"
            style={{ fontFamily: '"Inria Serif", serif' }}
          >
            let&apos;s talk
          </h2>

          <div className="space-y-6 text-base">
            <div>
              <h3
                className="text-white/50 text-[13px] tracking-wide mb-3"
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                what i do
              </h3>
              <ul className="text-white/40 space-y-2 text-base">
                <li>→ full-stack web development</li>
                <li>→ saas product development</li>
                <li>→ api design & architecture</li>
                <li>→ frontend (react/next.js)</li>
                <li>→ backend (django/python/node)</li>
                <li>→ cloud deployment & devops</li>
              </ul>
            </div>

            <div>
              <h3
                className="text-white/50 text-[13px] tracking-wide mb-3"
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                availability
              </h3>
              <p className="text-white/40">
                open to opportunities. response time: usually within 24h.
              </p>
            </div>

            <div>
              <h3
                className="text-white/50 text-[13px] tracking-wide mb-3"
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                direct contact
              </h3>
              <p className="text-white/40">
                sahilnayak@proton.me
              </p>
            </div>
          </div>
        </div>

        {/* right form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
