"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        },
      );
  };

  return (
    <section className="min-h-screen px-24 py-32 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold">Get In Touch</h1>

          <p className="text-white/70 mt-4 max-w-md">
            I’m open to new opportunities, collaborations, or just a friendly
            conversation. Feel free to reach out.
          </p>

          <div className="mt-10 space-y-5">
            <ContactItem
              icon={<FaEnvelope />}
              title="Email"
              value="tushargupta10th@gmail.com"
              href="mailto:tushargupta10th@gmail.com"
            />
            <ContactItem
              icon={<FaLinkedinIn />}
              title="LinkedIn"
              value="linkedin.com/in/tushargupta11"
              href="https://www.linkedin.com/in/tushargupta11/"
            />
            <ContactItem
              icon={<FaGithub />}
              title="GitHub"
              value="github.com/TUSHAR-GIT11"
              href="https://github.com/TUSHAR-GIT11"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-10"
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <Input
              label="Your Name"
              placeholder="Enter your name"
              name="name"
            />
            <Input
              label="Email Address"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
            <Textarea
              label="Message"
              placeholder="Write your message..."
              name="message"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 text-black font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                Message sent successfully ✅
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Failed to send message ❌
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ITEM ---------- */
function ContactItem({ icon, title, value, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 6 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:text-green-400"
    >
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-white/60">{value}</p>
      </div>
    </motion.a>
  );
}

/* ---------- INPUT ---------- */
function Input({ label, placeholder, name, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/70">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white"
      />
    </div>
  );
}

/* ---------- TEXTAREA ---------- */
function Textarea({ label, placeholder, name }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/70">{label}</label>
      <textarea
        name={name}
        rows="4"
        required
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white resize-none"
      />
    </div>
  );
}
