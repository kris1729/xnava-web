import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';

const VALUES = [
  {
    title: 'Skill-First Approach',
    description: 'We believe degrees open doors, but skills build careers. Every program is designed to deliver real, employable skills.',
    icon: '🎯',
  },
  {
    title: 'Mentorship Excellence',
    description: 'Our mentors come from top MNCs and bring real-world experience into the classroom. Students learn what the industry actually needs.',
    icon: '👨‍🏫',
  },
  {
    title: 'Affordable Excellence',
    description: 'Quality education should be accessible. We keep our programs affordable without compromising on quality or outcomes.',
    icon: '💰',
  },
  {
    title: 'Community First',
    description: 'Based in Lucknow, we are building a community of learners, mentors, and industry partners to create a thriving talent ecosystem.',
    icon: '🤝',
  },
];

const XnavaAbout = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-xnava-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="About Us"
            title={META.ABOUT.TITLE}
            description="We are a Lucknow-based education company on a mission to bridge the gap between academic degrees and industry-ready skills."
            align="center"
          />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <ScrollReveal variant="slideUp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded near Amity University in Lucknow, {COMPANY.NAME} was born from a simple observation: students work hard for degrees, but many still struggle to land jobs. The gap between what colleges teach and what companies need was too wide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We set out to fix that. Through {COMPANY.UNITS.TECHTRAINX.NAME}, we train engineering students with real project experience and DSA mastery. Through {COMPANY.UNITS.CHETNA.NAME}, we ensure school students build strong foundations for board exams and competitive tests like JEE and NEET.
                </p>
              </div>
              <div className="bg-xnava-100 rounded-2xl p-8 text-center">
                <p className="text-6xl mb-4">📍</p>
                <h4 className="text-xl font-semibold text-xnava-900 mb-2">Based in Lucknow</h4>
                <p className="text-xnava-700">{COMPANY.ADDRESS.FULL}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What We Stand For"
            description="The principles that guide everything we do."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {VALUES.map((value, index) => (
              <ScrollReveal key={value.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center">
                  <span className="text-4xl block mb-4">{value.icon}</span>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal variant="slideUp">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge color="xnava" className="text-sm px-4 py-2">
                📧 {COMPANY.EMAIL.INFO}
              </Badge>
              <Badge color="xnava" className="text-sm px-4 py-2">
                📍 {COMPANY.ADDRESS.CITY}, {COMPANY.ADDRESS.STATE}
              </Badge>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default XnavaAbout;