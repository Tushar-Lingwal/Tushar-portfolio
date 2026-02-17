"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const socialLinks = [
  { label: "GitHub", href: "https://github.com/tusharlingwal", icon: Github, handle: "@tusharlingwal" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tusharlingwal", icon: Linkedin, handle: "in/tusharlingwal" },
  { label: "Email", href: "mailto:tushar@nit.ac.in", icon: Mail, handle: "tushar@nit.ac.in" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters";
  }
  return errors;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  const inputClass = (field: keyof FormErrors) =>
    cn(
      "w-full px-4 py-3 rounded-lg bg-[#0D1321] border text-[#F1F5F9] text-sm placeholder:text-[#334155] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:border-[#00E5FF]",
      errors[field]
        ? "border-red-500/50"
        : "border-[#1E293B] hover:border-[#334155]"
    );

  return (
    <section
      id="contact"
      className="py-28 relative bg-[#0D1321]/30"
      aria-labelledby="contact-heading"
      ref={ref}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-3">
              07 / Contact
            </p>
            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl font-display text-[#F1F5F9] mb-4"
            >
              Let's Collaborate
            </h2>
            <p className="text-[#94A3B8] max-w-xl leading-relaxed">
              Open to research collaborations, ML engineering roles, and conversations
              about LLM evaluation, AI systems, and model behavior.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — Social + contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xs font-mono text-[#475569] tracking-widest uppercase mb-4">
                  Connect
                </h3>
                <ul className="space-y-3">
                  {socialLinks.map(({ label, href, icon: Icon, handle }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#F1F5F9] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-1 py-0.5"
                        aria-label={`${label}: ${handle}`}
                      >
                        <div className="w-8 h-8 rounded-md bg-[#111827] border border-[#1E293B] group-hover:border-[#334155] flex items-center justify-center transition-colors">
                          <Icon size={15} strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-xs">{handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono text-[#475569] tracking-widest uppercase mb-3">
                  Interested in
                </h3>
                <ul className="space-y-2">
                  {[
                    "LLM Research Collaborations",
                    "ML Engineering Roles",
                    "AI Systems Consulting",
                    "Research Paper Discussions",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#64748B]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#00E5FF]/40" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[300px] rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-10"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 size={40} className="text-emerald-400 mb-4" />
                  <h3 className="text-[#F1F5F9] font-semibold text-lg mb-2">
                    Message sent.
                  </h3>
                  <p className="text-[#64748B] text-sm">
                    I'll get back to you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-[#475569] mb-1.5"
                      >
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass("name")}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                          <AlertCircle size={11} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-[#475569] mb-1.5"
                      >
                        Email <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass("email")}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                          <AlertCircle size={11} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-[#475569] mb-1.5"
                    >
                      Subject <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Research collaboration / Job inquiry / ..."
                      className={inputClass("subject")}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                        <AlertCircle size={11} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[#475569] mb-1.5"
                    >
                      Message <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me what you're working on..."
                      className={cn(inputClass("message"), "resize-y min-h-[120px]")}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                        <AlertCircle size={11} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#00E5FF] text-[#080C14] text-sm font-semibold hover:bg-[#00E5FF]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14]"
                    aria-busy={formState === "submitting"}
                  >
                    {formState === "submitting" ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-[#080C14]/30 border-t-[#080C14] animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
