import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "hire me",
  description:
    "looking for a dev who ships fast, writes clean code, and doesn't ghost? let's talk.",
};

export default function HireMePage() {
  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-normal mb-6">hire me</h1>
          <p className="text-white/40 leading-relaxed mb-8">
            i&apos;m available for freelance work, contract roles, and full-time
            positions. i ship fast, communicate clearly, and actually care about
            the product i&apos;m building.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="text-white/60 uppercase tracking-wider text-xs mb-2">
                what i do
              </h3>
              <ul className="text-white/40 space-y-1">
                <li>→ full-stack web development</li>
                <li>→ saas product development</li>
                <li>→ api design & architecture</li>
                <li>→ frontend (react/next.js)</li>
                <li>→ backend (django/python/node)</li>
                <li>→ cloud deployment & devops</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white/60 uppercase tracking-wider text-xs mb-2">
                availability
              </h3>
              <p className="text-white/40">
                open to opportunities. response time: usually within 24h.
              </p>
            </div>

            <div>
              <h3 className="text-white/60 uppercase tracking-wider text-xs mb-2">
                direct contact
              </h3>
              <p className="text-white/40">
                sahilnayak@proton.me
              </p>
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
