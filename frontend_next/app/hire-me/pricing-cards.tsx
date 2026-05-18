"use client";

import { motion } from "motion/react";

const plans = [
  {
    name: "quick fix",
    price: "$200",
    period: "one-time",
    desc: "bug fixes, small features, or quick improvements to an existing project.",
    features: [
      "1-3 day turnaround",
      "single feature or fix",
      "code review included",
      "one round of revisions",
    ],
  },
  {
    name: "project sprint",
    price: "$1,500",
    period: "per week",
    desc: "dedicated dev time for building features, mvps, or entire modules from scratch.",
    features: [
      "full-time availability",
      "daily async updates",
      "frontend + backend",
      "deployment included",
      "unlimited revisions",
    ],
    highlight: true,
  },
  {
    name: "ongoing retainer",
    price: "$4,000",
    period: "per month",
    desc: "long-term partnership. i become part of your team, handling dev work end-to-end.",
    features: [
      "priority response",
      "architecture decisions",
      "code reviews & mentoring",
      "ci/cd setup & maintenance",
      "scaling & optimization",
      "dedicated slack channel",
    ],
  },
];

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className={`border p-8 flex flex-col ${
            plan.highlight
              ? "border-blue-400/30 bg-blue-400/[0.02]"
              : "border-white/8"
          }`}
        >
          <h3
            className="text-white/90 text-lg mb-2"
            style={{ fontFamily: '"Inria Serif", serif' }}
          >
            {plan.name}
          </h3>
          <div className="mb-4">
            <span className="text-3xl text-white/90" style={{ fontFamily: '"Inria Serif", serif' }}>
              {plan.price}
            </span>
            <span className="text-white/30 text-sm ml-2">/{plan.period}</span>
          </div>
          <p className="text-white/35 text-sm mb-6 leading-relaxed">{plan.desc}</p>
          <ul className="space-y-2.5 mt-auto">
            {plan.features.map((f) => (
              <li
                key={f}
                className="text-white/40 text-sm flex items-start gap-2"
                style={{ fontFamily: '"Source Code Pro", monospace' }}
              >
                <span className="text-blue-400/60 mt-0.5">+</span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
