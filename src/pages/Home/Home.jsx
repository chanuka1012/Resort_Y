import { site } from "../../data/siteData.js";
import { menuItems } from "../../data/menu.js";
import { experiences } from "../../data/experiences.js";
import { testimonials } from "../../data/testimonials.js";
import { telLink } from "../../utils/helpers.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Button from "../../components/Button/Button.jsx";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton.jsx";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import FoodCard from "../../components/FoodCard/FoodCard.jsx";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard.jsx";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard.jsx";
import HoursList from "../../components/HoursList/HoursList.jsx";
import MapEmbed from "../../components/MapEmbed/MapEmbed.jsx";

function Hero() {
  const { hero } = site;
  return (
    <header className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#2E7D32] to-[#1B5E20] text-center text-white">
      <picture>
        {hero.mobileImage && <source media="(max-width: 767px)" srcSet={hero.mobileImage} />}
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
      </picture>

      {hero.video && (
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-[#1B5E20]/35 via-[#1B5E20]/20 to-[#1B5E20]/55" />

      <div className="relative max-w-3xl px-6">
        <h1 className="font-display text-4xl md:text-6xl">{site.name}</h1>
        <p className="mt-4 text-lg md:text-xl">{site.tagline}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/menu">View Menu</Button>
          <WhatsAppButton label="Order on WhatsApp" text="Hello! I would like to place an order." />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  usePageTitle("");
  const popular = menuItems.filter((i) => i.tags.includes("Popular")).slice(0, 4);

  return (
    <>
      <Hero />

      <Section id="welcome" tone="white">
        <SectionTitle eyebrow="Welcome" title={`Welcome to ${site.name}`} subtitle={site.description} />
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/reservations">Reserve a table</Button>
          <Button to="/about" variant="outline">Our story</Button>
        </div>
      </Section>

      <Section id="popular">
        <SectionTitle eyebrow="From our kitchen" title="Guest favourites" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((item) => <FoodCard key={item.id} item={item} />)}
        </div>
        <div className="mt-10">
          <Button to="/menu">See the full menu</Button>
        </div>
      </Section>

      <Section id="experiences" tone="white">
        <SectionTitle
          eyebrow="More than a meal"
          title="Swim, play, relax and explore"
          subtitle="Make a whole day of it with our pool, adventure activities, sports, cabanas and guided tour."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)}
        </div>
      </Section>

      <Section id="reviews">
        <SectionTitle eyebrow="Kind words" title="What our guests say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </Section>

      <Section id="visit" tone="white">
        <SectionTitle eyebrow="Find us" title="Opening hours & location" />
        <div className="grid gap-8 text-left md:grid-cols-2">
          <div className="rounded-2xl bg-cream p-6 shadow">
            <h3 className="mb-4 font-display text-xl">Opening hours</h3>
            <HoursList />
            <p className="mt-6">{site.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={site.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</Button>
              <Button href={telLink(site.phone)} variant="outline">Call us</Button>
            </div>
          </div>
          <MapEmbed className="min-h-72 md:h-full" />
        </div>
      </Section>

      <Section id="cta" tone="forest">
        <SectionTitle light title="Hungry? Ready to play?" subtitle="Order your food or book your visit in a few taps." />
        <div className="flex flex-wrap justify-center gap-4">
          <WhatsAppButton label="Message us on WhatsApp" text="Hello! I would like to make an enquiry." />
          <Button to="/reservations" variant="light">Make a reservation</Button>
        </div>
      </Section>
    </>
  );
}
