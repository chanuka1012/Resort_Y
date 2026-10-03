import { experiences } from "../../data/experiences.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SmartImage from "../../components/SmartImage/SmartImage.jsx";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton.jsx";

export default function Experiences() {
  usePageTitle("Experiences");

  return (
    <>
      <Section>
        <SectionTitle
          as="h1"
          eyebrow="Experiences"
          title="A whole day of fun"
          subtitle="Swim, play, relax and explore. Tap any experience to ask or book on WhatsApp."
        />
      </Section>

      {experiences.map((exp, i) => (
        <Section key={exp.id} id={exp.id} tone={i % 2 === 0 ? "white" : "cream"}>
          <div className="grid items-center gap-10 text-left md:grid-cols-2">
            <SmartImage
              src={exp.image}
              alt={exp.title}
              className={`aspect-[4/3] w-full rounded-2xl shadow-lg ${i % 2 ? "md:order-2" : ""}`}
            />

            <div>
              <h2 className="font-display text-3xl">
                <span aria-hidden="true">{exp.icon} </span>
                {exp.title}
              </h2>
              <p className="mt-1 font-semibold text-terra">{exp.tagline}</p>
              <p className="mt-4">{exp.description}</p>

              <ul className="mt-4 space-y-1">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2"><span className="text-leaf" aria-hidden="true">✓</span>{h}</li>
                ))}
              </ul>

              {exp.note && <p className="mt-4 text-sm opacity-75">{exp.note}</p>}

              <div className="mt-6">
                <WhatsAppButton
                  label={`Ask about ${exp.title}`}
                  text={`Hello! I would like to know more about / book: ${exp.title}.`}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {exp.photos.map((p, n) => (
              <SmartImage key={p} src={p} alt={`${exp.title} photo ${n + 1}`} className="aspect-video w-full rounded-xl" />
            ))}
          </div>

          {exp.video && (
            <div className="mx-auto mt-8 max-w-2xl">
              <VideoPlayer video={exp.video} />
            </div>
          )}
        </Section>
      ))}
    </>
  );
}