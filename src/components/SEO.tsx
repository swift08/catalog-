export function SEO() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://blueblocks.in/#school",
        name: "Blue Blocks Montessori School",
        url: "https://blueblocks.in",
        logo: "https://blueblocks.in/logo.png",
        sameAs: [
          "https://www.facebook.com/blueblocks",
          "https://www.instagram.com/blueblocks",
          "https://www.linkedin.com/school/blueblocks",
        ],
        description:
          "Blue Blocks is a premium AMI-certified Montessori school in Hyderabad, offering a child-centric journey from Primary to Erdkinder.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gachibowli",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500032",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Blue Blocks Gachibowli",
        parentOrganization: { "@id": "https://blueblocks.in/#school" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gachibowli",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
        },
        telephone: "+91 9000955022",
      },
      {
        "@type": "LocalBusiness",
        name: "Blue Blocks Tellapur",
        parentOrganization: { "@id": "https://blueblocks.in/#school" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tellapur",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
        },
        telephone: "+91 9000955022",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Montessori education?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Montessori is a method of education that is based on self-directed activity, hands-on learning and collaborative play.",
            },
          },
          {
            "@type": "Question",
            name: "Is Blue Blocks AMI certified?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Blue Blocks is India's largest school with AMI-certified Montessori experts.",
            },
          },
          {
            "@type": "Question",
            name: "What ages does Blue Blocks cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover ages 1.5 to 16 years, from Toddler to Erdkinder (High School).",
            },
          },
          {
            "@type": "Question",
            name: "Where is Blue Blocks located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We have campuses in Gachibowli and Tellapur, Hyderabad.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Erdkinder stage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Erdkinder is the Montessori stage for adolescents, focusing on social organization and economic independence.",
            },
          },
          {
            "@type": "Question",
            name: "Does Blue Blocks have a drone lab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we have a specialized Drone Lab for STEM and flight exploration.",
            },
          },
          {
            "@type": "Question",
            name: "What is the student-teacher ratio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We maintain an optimal ratio to ensure personalized attention following AMI standards.",
            },
          },
          {
            "@type": "Question",
            name: "Are the teachers AMI certified?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we have the largest team of AMI-certified professionals in India.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer transport facilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide safe and secure transport for our students.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a farm at Blue Blocks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our Tellapur campus features an integrated farm for nature-based learning.",
            },
          },
        ],
      },

      {
        "@type": "VideoObject",
        name: "A Child's Journey at Blue Blocks",
        description: "A cinematic overview of the Montessori experience.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/hero.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Pony%20Tail%20Girl.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Day in the Life (3-6 Years)",
        description: "Following the curiosity of a child in the primary environment.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/primary.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Day%20in%20Life-3-6YRS.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Farm Day at Blue Blocks",
        description: "Sustainable learning and nature exploration at our farm.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/farm.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Farm%20Day.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Drone Lab Exploration",
        description: "STEM and aerodynamics for young explorers.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/drone.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Drone%20Lab.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Red Sweater Kid - Discovery",
        description: "Moments of focus and pure discovery.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/discovery.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Red%20Sweater%20Kid.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Primary School Environment",
        description: "The foundation of Montessori learning.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/primary-env.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/BB-Primary.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Elementary Growth",
        description: "Deepening the academic and social journey.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/elementary.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/BB-Elementary.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Erdkinder Stage",
        description: "Preparing adolescents for the real world.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/erdkinder.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/BB-erdkinder.mp4",
      },
      {
        "@type": "VideoObject",
        name: "The Visionary Founders",
        description: "The mission behind Blue Blocks Montessori.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/founders.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Founders%20at%20BB.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Our Expert Educators",
        description: "Meet the AMI-certified team at Blue Blocks.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/teachers.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Teachers%20at%20BB.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Parent Community",
        description: "The ecosystem of family and growth.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/parents.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Parent%20Engagement%20at%20BB.mp4",
      },
      {
        "@type": "VideoObject",
        name: "Safe Transport Infrastructure",
        description: "Ensuring safety and comfort for every child.",
        thumbnailUrl: "https://blueblocks.in/thumbnails/transport.jpg",
        uploadDate: "2024-04-24",
        contentUrl: "https://blueblocks.in/videos/Safe%20Transport.mp4",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
