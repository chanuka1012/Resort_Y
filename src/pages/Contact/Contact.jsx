import { useState } from "react";
import { site } from "../../data/siteData.js";
import { telLink, whatsappLink } from "../../utils/helpers.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Button from "../../components/Button/Button.jsx";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton.jsx";
import HoursList from "../../components/HoursList/HoursList.jsx";
import MapEmbed from "../../components/MapEmbed/MapEmbed.jsx";

export default function Contact() {
  usePageTitle("Contact");
  const [form, setForm] = useState({ name: "", message: "" });
  const [error, setError] = useState("");

  const socials = Object.entries(site.social).filter(([, url]) => url);
  const input = "w-full rounded-lg border border-forest/30 bg-white p-3";

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please enter your name and a message.");
      return;
    }
    setError("");
    const text = `Hello! My name is ${form.name.trim()}.\n\n${form.message.trim()}`;
    window.open(whatsappLink(site.whatsapp, text), "_blank", "noopener,noreferrer");
  }

  return (
    <Section>
      <SectionTitle as="h1" eyebrow="Contact" title="We would love to hear from you" />

      <div className="grid gap-8 text-left md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-3 font-display text-xl">Get in touch</h2>
            <ul className="space-y-2">
              <li>📞 <a href={telLink(site.phone)} className="underline">{site.phone}</a></li>
              <li>✉️ <a href={`mailto:${site.email}`} className="underline">{site.email}</a></li>
              <li>📍 {site.address}</li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-4 text-sm">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize underline">{name}</a>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-5 flex flex-wrap gap-3">
              <WhatsAppButton label="WhatsApp us" text="Hello!" />
              <Button href={telLink(site.phone)} variant="outline">Call now</Button>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-3 font-display text-xl">Opening hours</h2>
            <HoursList />
            <div className="mt-5">
              <Button href={site.mapUrl} target="_blank" rel="noopener noreferrer" variant="outline">Get directions</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl bg-white p-6 shadow">
            <h2 className="font-display text-xl">Send us a message</h2>
            <div>
              <label htmlFor="c-name" className="mb-1 block text-sm font-medium">Your name</label>
              <input
                id="c-name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={input}
              />
            </div>
            <div>
              <label htmlFor="c-message" className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                id="c-message"
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={input}
              />
            </div>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <button type="submit" className="min-h-11 w-full rounded-full bg-terra px-8 py-3 font-semibold text-white hover:bg-terra/90">
              Send via WhatsApp
            </button>
          </form>

          <MapEmbed className="h-64" />
        </div>
      </div>
    </Section>
  );
}