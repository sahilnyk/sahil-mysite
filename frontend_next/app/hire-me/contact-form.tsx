"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mysite-qz44.onrender.com";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="text-white/40 text-sm block mb-2">
          name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-base focus:border-white/30 focus:outline-none transition-colors"
          placeholder="your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-white/40 text-sm block mb-2">
          email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-base focus:border-white/30 focus:outline-none transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-white/40 text-sm block mb-2">
          message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-base focus:border-white/30 focus:outline-none transition-colors resize-none"
          placeholder="tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-white/20 px-5 py-2 text-sm text-white/70 hover:bg-white hover:text-black transition-all disabled:opacity-50"
        style={{ fontFamily: '"Source Code Pro", monospace' }}
      >
        {status === "sending"
          ? "sending..."
          : status === "sent"
            ? "sent! i'll get back to you"
            : "send"}
      </button>

      {status === "error" && (
        <p className="text-red-400/60 text-sm">
          something went wrong. try emailing me directly.
        </p>
      )}
    </form>
  );
}
