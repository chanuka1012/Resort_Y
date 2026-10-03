import { site } from "../../data/siteData.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SmartImage from "../../components/SmartImage/SmartImage.jsx";

// TODO: replace the text below with your real story, values and team.
const values = [
  ["Fresh ingredients", "We cook with fresh, locally sourced ingredients wherever we can."],
  ["Warm hospitality", "Every guest is treated like family, whether for a quick meal or a full day."],
  ["Fun for everyone", "From the pool to the games to the tour, there is something for all ages."],
];

export default function About() {
  usePageTitle("About us");

  return (
    <>
      <Section tone="white">
        <SectionTitle as="h1" eyebrow="About us" title={`The story of ${site.shortName}`} />
        <div className="grid items-center gap-10 text-left md:grid-cols-2">
          <div className="space-y-4">
            <p>
              Tell your story here: how the restaurant started, who is behind it, and what makes your food and your
              place special.
            </p>
            <p>
              Mention your food philosophy, the ingredients you use, and how the pool, cabanas, sports, adventure
              activities and the Yakdessagala tour came to be part of what you offer.
            </p>
          </div>
          <SmartImage src="/images/about/about-01.jpg" alt="Our restaurant" className="aspect-[4/3] w-full rounded-2xl shadow-lg" />
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="What we believe" title="Our values" />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-6 text-left shadow">
              <h3 className="font-display text-xl text-forest">{title}</h3>
              <p className="mt-2 text-sm opacity-80">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle eyebrow="The people" title="Meet the team" />
        <SmartImage src="/images/about/about-02.jpg" alt="Our chef and team" className="mx-auto aspect-video w-full max-w-3xl rounded-2xl shadow-lg" />
      </Section>
    </>
  );
}