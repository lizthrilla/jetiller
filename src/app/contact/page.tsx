"use client";

import { useState, FormEvent } from "react";
import { Main, MainPageLayout } from "../components/Main";
import { PageHeader, SectionHeader } from "../components/Headers";
import Section from "../components/Section";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Encode the form data
        const encodedData = new URLSearchParams(formData as unknown as Record<string, string>).toString();

        try {
            // Post to the static HTML form path that Netlify detects
            const response = await fetch("/__forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encodedData,
            });
            
            console.log("Form response:", response.status);
            setSubmitted(true);
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitted(true);
        }
    };

    return (
        <Main>
            <MainPageLayout>
                <Section id="contact-header" className="w-full">
                    <PageHeader 
                        pageTitle="Contact Us" 
                        pageSubtitle="Get in touch with Butterfly Financial Consultants" 
                    />
                </Section>

                <Section id="contact-content">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <SectionHeader>Get In Touch</SectionHeader>
                            <p className="mb-6">
                                Have questions about reinsurance consulting, M&A advisory, or our book? 
                                We&apos;d love to hear from you.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-bf-blue text-xl" />
                                    <a 
                                        href="mailto:jetiller@jetiller.com" 
                                        className="text-bf-blue hover:underline"
                                    >
                                        jetiller@jetiller.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-bf-blue text-xl" />
                                    <span>Tampa, Florida</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <SectionHeader>Send a Message</SectionHeader>
                            
                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                    <h3 className="text-green-800 font-bf-display font-bold text-lg mb-2">
                                        Thank you for your message!
                                    </h3>
                                    <p className="text-green-700">
                                        We&apos;ll get back to you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form 
                                    name="contact"
                                    method="POST"
                                    action="/__forms.html"
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    {/* Hidden fields for Netlify */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    <p className="hidden">
                                        <label>
                                            Don&apos;t fill this out: 
                                            <input name="bot-field" />
                                        </label>
                                    </p>

                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block font-bf-display font-semibold mb-1">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block font-bf-display font-semibold mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block font-bf-display font-semibold mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            placeholder="What is this regarding?"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block font-bf-display font-semibold mb-1">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Your message..."
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bf-blue focus:border-transparent resize-y"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-bf-blue text-white font-bf-display font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </Section>
            </MainPageLayout>
        </Main>
    );
}
