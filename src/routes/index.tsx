import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Chapter, type Slide } from "@/components/Chapter";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MemoryTrail } from "@/components/MemoryTrail";
import { GrowthBlocks } from "@/components/GrowthBlocks";
import { SEO } from "@/components/SEO";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blue Blocks Montessori — A Child's Journey | Hyderabad's Premium AMI School" },
      {
        name: "description",
        content:
          "Experience the future of Montessori education at Blue Blocks, Hyderabad. AMI-certified expertise from Primary to Erdkinder. Watch our cinematic story of discovery, nature, and technology.",
      },
      {
        name: "keywords",
        content:
          "Montessori school Hyderabad, AMI Montessori India, Blue Blocks Montessori, Erdkinder school, Drone lab school, premium education Hyderabad",
      },
      { property: "og:title", content: "Blue Blocks Montessori — A Child's Journey" },
      {
        property: "og:description",
        content:
          "An immersive, cinematic journey through the world of authentic Montessori education in Hyderabad.",
      },
      { property: "og:image", content: "https://blueblocks.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#020617" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const ch1: Slide[] = [
  {
    title: "A World Built for Wonder.",
    subtitle: "The Seed",
    body: "Every morning begins with the potential for a thousand memories.",
  },
  {
    title: "Authentic Montessori.",
    subtitle: "AMI Certified",
    body: "Led by India's largest team of AMI-certified experts since 2009.",
  },
];

const ch2: Slide[] = [
  {
    title: "Farm Day Adventures.",
    subtitle: "Nature's Classroom",
    body: "Harvesting wisdom and sustainability from our very own farm.",
  },
  {
    title: "The Drone Lab.",
    subtitle: "Tech Frontiers",
    body: "Where aerodynamics meets imagination in a state-of-the-art flight center.",
  },
];

const ch3: Slide[] = [
  {
    title: "The Joy of Mastery.",
    subtitle: "Skill Building",
    body: "Watching confidence grow as little hands solve complex problems.",
  },
  {
    title: "STEM in Action.",
    subtitle: "Innovation",
    body: "Coding, building, and dreaming in our specialized creative spaces.",
  },
];

const ch4: Slide[] = [
  {
    title: "Primary Foundations.",
    subtitle: "Ages 3-6",
    body: "A prepared environment where curiosity finds its first true direction.",
  },
  {
    title: "Elementary Depth.",
    subtitle: "Grades 1-6",
    body: "Continuing the journey with academic rigour and creative freedom.",
  },
  {
    title: "Erdkinder Experience.",
    subtitle: "Middle School",
    body: "Preparing the earth-children for the challenges of the global future.",
  },
];

const ch5: Slide[] = [
  {
    title: "Expert Guidance.",
    subtitle: "Our Educators",
    body: "Passionate teachers dedicated to nurturing the human spirit.",
  },
  {
    title: "Partners in Growth.",
    subtitle: "Parent Community",
    body: "A collaborative ecosystem where families thrive together.",
  },
];

function Index() {
  return (
    <main className="relative bg-background">
      <SEO />
      <Nav />
      <ScrollProgress
        chapters={[
          "Journey",
          "Wonder",
          "Nature",
          "STEM",
          "Skills",
          "Primary",
          "Elementary",
          "Erdkinder",
          "Vision",
          "Team",
          "Community",
          "Trust",
        ]}
      />
      <MemoryTrail />
      <GrowthBlocks />
      <Hero />

      <Chapter
        id="chapter-1"
        index="01"
        eyebrow="Beginning of Journey"
        title="The Seed of Curiosity"
        intro="In the soft light of a Montessori morning, curiosity takes its first steps. A world designed for the child's wonder."
        image=""
        videoSrc="/videos/Day in Life-3-6YRS.mp4"
        imageAlt="Child engaging in Montessori activities"
        slides={ch1}
        tone="calm"
        originalRatio={true}
      />

      <Chapter
        id="chapter-2"
        index="02"
        eyebrow="Exploration & Discovery"
        title="Worlds to Discover"
        intro="Where the earth meets the sky. Experience a curriculum that bridges the wisdom of nature with the frontiers of technology."
        image=""
        videoSrc="/videos/Farm Day.mp4"
        imageAlt="Children at the Blue Blocks farm"
        slides={ch2}
        tone="playful"
        reverse
        originalRatio={true}
      />

      <Chapter
        id="chapter-2-extra"
        index="02.1"
        eyebrow="Drone Lab"
        title="Soaring Higher"
        intro="Mastering the skies. Our specialized Drone Lab brings the science of flight into the hands of the student."
        image=""
        videoSrc="/videos/Drone Lab.mp4"
        imageAlt="Students in the Drone Lab"
        slides={[
          {
            title: "Flight Simulation",
            subtitle: "Tech Frontiers",
            body: "Learning aerodynamics and physics through hands-on flight.",
          },
          {
            title: "The Drone Lab.",
            subtitle: "Aviation",
            body: "Where aerodynamics meets imagination in a state-of-the-art flight center.",
          },
        ]}
        tone="energy"
        originalRatio={true}
      />

      <Chapter
        id="chapter-3"
        index="03"
        eyebrow="Skill Building"
        title="Building Intelligence"
        intro="Moments of cinematic curiosity. Watch as focus emerges from the pure, vibrant chaos of discovery."
        image=""
        videoSrc="/videos/Red Sweater Kid.mp4"
        imageAlt="Child working with Montessori materials"
        slides={ch3}
        tone="energy"
        reverse
        originalRatio={true}
      />

      <Chapter
        id="chapter-4"
        index="04"
        eyebrow="Academic Journey"
        title="The Primary Years"
        intro="From the first steps of Primary, we prepare explorers for the world of tomorrow."
        image=""
        videoSrc="/videos/BB-Primary.mp4"
        imageAlt="Students in the primary environment"
        slides={[
          { title: "Foundation", subtitle: "Ages 3-6", body: "Sensorial and language mastery." },
        ]}
        tone="aspire"
        originalRatio={true}
      />

      <Chapter
        id="chapter-4-elem"
        index="04.1"
        eyebrow="Academic Growth"
        title="Elementary & Beyond"
        intro="Continuing the journey with depth, rigour, and imagination."
        image=""
        videoSrc="/videos/BB-Elementary.mp4"
        imageAlt="Students in the elementary environment"
        slides={[
          {
            title: "Depth",
            subtitle: "Grades 1-6",
            body: "Cosmic education and collaborative research.",
          },
        ]}
        tone="aspire"
        reverse
        originalRatio={true}
      />

      <Chapter
        id="chapter-4-erd"
        index="04.2"
        eyebrow="Future Leadership"
        title="The Erdkinder Stage"
        intro="Preparing the earth-children for the challenges of the global future."
        image=""
        videoSrc="/videos/BB-erdkinder.mp4"
        imageAlt="Middle school students"
        slides={[
          {
            title: "Leadership",
            subtitle: "Middle School",
            body: "Social organization and economic independence.",
          },
        ]}
        tone="aspire"
        originalRatio={true}
      />

      <Chapter
        id="chapter-5"
        index="05"
        eyebrow="People & Trust"
        title="The Visionary Heart"
        intro="A legacy of excellence built by pioneers. Meet the founders behind the dream."
        image=""
        videoSrc="/videos/Founders at BB.mp4"
        imageAlt="Founders of Blue Blocks"
        slides={[
          {
            title: "Vision",
            subtitle: "Leadership",
            body: "Dedicated to the AMI Montessori movement.",
          },
        ]}
        tone="warm"
        reverse
        originalRatio={true}
      />

      <Chapter
        id="chapter-5-teachers"
        index="05.1"
        eyebrow="Our Educators"
        title="Nurturing Souls"
        intro="Passionate teachers dedicated to nurturing the human spirit."
        image=""
        videoSrc="/videos/Teachers at BB.mp4"
        imageAlt="Teachers at Blue Blocks"
        slides={[
          {
            title: "Expertise",
            subtitle: "AMI Certified",
            body: "India's largest team of Montessori professionals.",
          },
        ]}
        tone="warm"
        originalRatio={true}
      />

      <Chapter
        id="chapter-5-parents"
        index="05.2"
        eyebrow="Parent Engagement"
        title="A Shared Journey"
        intro="A collaborative ecosystem where families thrive together."
        image=""
        videoSrc="/videos/Parent Engagement at BB.mp4"
        imageAlt="Parents at Blue Blocks"
        slides={[
          {
            title: "Community",
            subtitle: "Partnership",
            body: "Engaging parents in the beautiful unfolding of their child.",
          },
        ]}
        tone="warm"
        reverse
        originalRatio={true}
      />

      <CTASection />
      <Footer />
    </main>
  );
}
