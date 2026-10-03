import { useState } from "react";
import { site } from "../../data/siteData.js";
import { whatsappLink } from "../../utils/helpers.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";

const types = ["Restaurant table", "Cabana", "Activity (pool / adventure / sports)", "Yakdessagala tour"];
const today = new Date().toISOString().split("T")[0];
const initial = { name: "", phone: "", email: "", type: types[0], date: "", time: "", guests: 2, request: "" };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!/^\+?[0-9\s-]{9,15}$/.test(f.phone.trim())) e.phone = "Enter a valid phone number.";
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (!f.date) e.date = "Please choose a date.";
  else if (f.date < today) e.date = "The date cannot be in the past.";
  if (!f.time) e.time = "Please choose a time.";
  if (Number(f.guests) < 1 || Number(f.guests) > 50) e.guests = "Guests must be between 1 and 50.";
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div className="text-left">
      <label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  );
}

export default function Reservations() {
  usePageTitle("Reservations");
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const input = "w-full rounded-lg border border-forest/30 bg-white p-3";
  const bind = (name) => ({
    id: name,
    value: form[name],
    onChange: (e) => setForm({ ...form, [name]: e.target.value }),
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const text = [
      "Hello! I would like to make a reservation.",
      "",
      `Type: ${form.type}`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email ? `Email: ${form.email}` : null,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Guests: ${form.guests}`,
      form.request.trim() ? `Special request: ${form.request.trim()}` : null,
    ].filter((line) => line !== null).join("\n");

    window.open(whatsappLink(site.whatsapp, text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <Section>
      <SectionTitle
        as="h1"
        eyebrow="Reservations"
        title="Book your visit"
        subtitle="Fill in the form and we will open WhatsApp with your request ready to send. We will confirm your booking there."
      />

      <form onSubmit={handleSubmit} noValidate className="mx-auto grid max-w-2xl gap-5 rounded-2xl bg-white p-6 shadow md:grid-cols-2">
        <div className="md:col-span-2">
          <Field id="type" label="What would you like to book?">
            <select {...bind("type")} className={input}>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
        </div>

        <Field id="name" label="Your name" error={errors.name}>
          <input type="text" autoComplete="name" {...bind("name")} className={input} />
        </Field>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <input type="tel" autoComplete="tel" {...bind("phone")} className={input} />
        </Field>
        <div className="md:col-span-2">
          <Field id="email" label="Email (optional)" error={errors.email}>
            <input type="email" autoComplete="email" {...bind("email")} className={input} />
          </Field>
        </div>
        <Field id="date" label="Date" error={errors.date}>
          <input type="date" min={today} {...bind("date")} className={input} />
        </Field>
        <Field id="time" label="Time" error={errors.time}>
          <input type="time" {...bind("time")} className={input} />
        </Field>
        <div className="md:col-span-2">
          <Field id="guests" label="Number of guests" error={errors.guests}>
            <input type="number" min="1" max="50" {...bind("guests")} className={input} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field id="request" label="Special request (optional)">
            <textarea rows="3" maxLength={400} {...bind("request")} className={input} />
          </Field>
        </div>

        <button
          type="submit"
          className="min-h-11 rounded-full bg-terra px-8 py-3 font-semibold text-white transition hover:bg-terra/90 md:col-span-2"
        >
          Send reservation on WhatsApp
        </button>

        {sent && (
          <p role="status" className="rounded-lg bg-forest/10 p-4 text-left text-sm md:col-span-2">
            WhatsApp should have opened with your request. Press <strong>Send</strong> there to confirm.
            If nothing opened, check that your browser allowed the pop-up.
          </p>
        )}
      </form>
    </Section>
  );
}