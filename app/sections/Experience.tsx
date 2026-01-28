"use client";
import { ScrollTimeline } from "../reactbits/ScrollTimeline";
import SectionWrapper from "../components/SectionWrapper";

export default function Experience() {
  const events = [
    {
      year: "Aug-2025 - Present",
      title: "UI/UX Intern",
      subtitle: "Infinova Technologies",
      description:
        "In this job, I'll handle all things UI/UX plus Figma work - building flexible designs focused on real users to make interactions smoother. Doing this helps sharpen how I approach problems visually, giving me a boost while moving toward full-stack dev, because good design works right alongside coding.",
    },
    {
      year: "June-2025 - Aug-2025",
      title: "Web Developer Intern",
      subtitle: "InternPro",
      description: `As a newbie intern at InternPro, I landed a chance to join a live project. My group had to build a coaching center site plus an admin panel. For the website’s look, they picked me as a helper designer - on top of that, I pitched ideas and ran tests now and then.

I shared plenty of ideas about how the interface could work better. Since I’m in 12th grade and attend a coaching center, I’ve felt the struggles firsthand - so my tips came straight from what I've been through.`,
    },
  ];
  return (
    <SectionWrapper id="experience" className="py-12 md:py-20">
      <ScrollTimeline
        events={events}
        title="My Journey"
        subtitle="Scroll to explore the timeline"
        progressIndicator={true}
        cardAlignment="alternating"
        revealAnimation="fade"
      />
    </SectionWrapper>
  );
}
