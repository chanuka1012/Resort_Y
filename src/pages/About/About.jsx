import { site } from "../../data/siteData.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SmartImage from "../../components/SmartImage/SmartImage.jsx";

const values = [
  ["Fresh ingredients", "We serve flavourful meals made with care and local goodness."],
  ["Warm hospitality", "Every guest is welcomed like family, from first arrival to final farewell."],
  ["Fun for everyone", "Whether you are swimming, playing, exploring, or relaxing, there is something for you."],
];

const highlights = [
  { value: "Nature", label: "Wrapped in beauty" },
  { value: "History", label: "Rooted in legend" },
  { value: "Adventure", label: "Made for discovery" },
  { value: "Comfort", label: "Built for rest" },
];

export default function About() {
  usePageTitle("About us");

  return (
    <>
      <Section tone="white">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,30,20,0.08)]">
            <div className="grid items-center gap-6 p-4 md:grid-cols-[1.05fr_0.95fr] md:p-6">
              <div className="space-y-5 p-3 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-terra">About us</p>
                <h1 className="font-display text-5xl leading-[0.9] text-forest md:text-7xl">
                  The story of<br />
                  {site.shortName}
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                  Where nature, history, and hospitality meet in one unforgettable destination.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {highlights.map((item) => (
                    <span key={item.label} className="rounded-full border border-forest/20 bg-forest/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-forest">
                      {item.value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-forest/10">
                <SmartImage
                  src="/images/about/about-hero.png"
                  alt="Yakdessagala resort landscape"
                  className="h-[300px] w-full object-cover md:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/15 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm">
                  Comfort • Nature • Adventure • Memories
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid items-center gap-10 text-left md:grid-cols-[1.08fr_0.92fr]">
            <div className="relative">
              <SmartImage
                src="/images/about/about-hero-sunset.png"
                alt="Yakdessagala resort landscape"
                className="aspect-video w-full rounded-[2rem] shadow-[0_25px_60px_rgba(20,40,29,0.14)]"
              />
              <div className="absolute -bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-forest shadow-lg backdrop-blur-sm">
                Nature • History 
              </div>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-3">
                <h2 className="font-display text-3xl text-forest">Where nature meets history</h2>
                <p className="leading-relaxed text-slate-700">
                  Nestled in the scenic surroundings of Yakdessagala, Kurunegala, {site.shortName} Resort is a place where nature, history, adventure, and Sri Lankan hospitality come together in perfect harmony.
                </p>
              </div>

              <p className="leading-relaxed text-slate-700">
                Yakdessagala is more than a beautiful mountain landscape. It is a location deeply connected to one of Sri Lanka's most fascinating legends — the story of Kuveni — giving the area a rich cultural and historical identity that adds a unique sense of wonder to every visit.
              </p>

              <p className="leading-relaxed text-slate-700">
                Inspired by that beauty and spirit, {site.shortName} was created as a relaxed destination for guests to reconnect with nature, enjoy meaningful time with loved ones, and make memories that last well beyond the day.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Our story" title="A place to slow down and enjoy life" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-white p-7 shadow-[0_18px_40px_rgba(10,26,20,0.08)] ring-1 ring-slate-200/80">
              <h3 className="font-display text-2xl text-forest">Our vision</h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                Our vision is to create more than just a place to stay. We aim to offer a complete experience where guests can escape the noise of everyday life and reconnect with nature, culture, and each other.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-cream p-7 shadow-[0_18px_40px_rgba(10,26,20,0.08)] ring-1 ring-slate-200/80">
              <h3 className="font-display text-2xl text-forest">What you will find</h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                From beautiful mountain views and comfortable spaces to refreshing swimming facilities, delicious food, and unforgettable adventures, the resort offers something for families, couples, friends, and travelers seeking a memorable getaway.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="What we believe" title="Our values" />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(([title, text]) => (
            <div key={title} className="rounded-[1.75rem] bg-white p-6 text-left shadow-[0_18px_40px_rgba(10,26,20,0.08)] ring-1 ring-slate-200/80">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-terra/10 text-lg text-terra">
                ✦
              </div>
              <h3 className="font-display text-2xl text-forest">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle eyebrow="The people" title="Meet the team" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SmartImage
            src="/images/about/team.png"
            alt="Our team at Yakdessagala Resort"
            className="aspect-video w-full rounded-[2rem] shadow-[0_25px_60px_rgba(20,40,29,0.14)]"
          />
          <div className="flex flex-col justify-center rounded-[2rem] bg-cream p-8 shadow-sm ring-1 ring-slate-200/80">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terra">Behind the scenes</p>
            <h3 className="mt-4 font-display text-3xl text-forest">A team that cares</h3>
            <p className="mt-4 leading-relaxed text-slate-700">
              Whether you are here for a peaceful break, a family outing, or a day of adventure, our team is committed to creating a warm experience backed by genuine Sri Lankan hospitality and attentive care.
            </p>
            <p className="mt-4 font-medium text-forest">
              Come and experience the story of Yakdessagala — where every stay becomes a memory.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}