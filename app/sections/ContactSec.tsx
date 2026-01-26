"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

const ContactSec = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async () => {
    if (!form.current) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Configuration error: Missing EmailJS environment variables.");
      console.error("Missing EmailJS env vars. Check your .env.local file.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please check your configuration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 flex flex-col items-center justify-center text-center z-20"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Send me a message
          below.
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] text-left"
        >
          <div className="mb-6">
            <label className="block text-white/80 font-medium mb-2">Name</label>
            <input
              {...register("user_name", { required: "Name is required" })}
              name="user_name" // Required for EmailJS
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
              placeholder="Your Name"
            />
            {errors.user_name && (
              <p className="text-red-400 text-sm mt-1">
                {errors.user_name.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-white/80 font-medium mb-2">
              Email
            </label>
            <input
              {...register("user_email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              name="user_email" // Required for EmailJS
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
              placeholder="your@email.com"
            />
            {errors.user_email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.user_email.message}
              </p>
            )}
          </div>

          <div className="mb-8">
            <label className="block text-white/80 font-medium mb-2">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              name="message" // Required for EmailJS
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors resize-none"
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-blue-600 to-cyan-400 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-4">
              Message sent successfully!
            </p>
          )}
          {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        </form>

        <div className="mt-12 flex gap-6 justify-center">
          {/* Social Links placeholders - customize as needed */}
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
