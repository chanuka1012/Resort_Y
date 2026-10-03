import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Button from "../../components/Button/Button.jsx";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <Section>
      <SectionTitle as="h1" title="Page not found" subtitle="Sorry, we could not find that page." />
      <Button to="/">Back to home</Button>
    </Section>
  );
}