import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ROUTES } from '@/constants/routes';

const VALUES = [
  {
    title: 'Skill-First Approach',
    description: 'Degrees open doors but skills build careers. Every program delivers real, employable skills — not just theory.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Mentorship Excellence',
    description: 'Our mentors come from top MNCs and bring real-world experience. Students learn what the industry actually demands.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Excellence',
    description: 'Quality education must be accessible. We keep programs affordable without compromising on outcomes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Community First',
    description: 'Based in Lucknow, we are building a thriving talent ecosystem — students, mentors, and industry partners together.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const XnavaAbout = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding bg-gradient-to-br from-xnava-50 to-white">
        <div className="container-custom">
          <SectionHeading
            badge="About Us"
            title={META.ABOUT.TITLE}
            description="We are a Lucknow-based education company bridging the gap between academic degrees and industry-ready skills."
            align="center"
          />
        </div>
      </section>

      {/* ── Story (2-col) ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ScrollReveal variant="slideUp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  From Lucknow, for India
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded near Amity University in Lucknow, {COMPANY.NAME} was born
                  from a simple observation: students work incredibly hard for degrees,
                  yet many still struggle to land jobs they deserve. The gap between
                  college curriculum and industry expectations was too wide.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We set out to close that gap. Through{' '}
                  <strong>{COMPANY.UNITS.TECHTRAINX.NAME}</strong>, we give engineering
                  students real project experience, DSA mastery, and mentorship from
                  industry professionals — everything needed to crack product company
                  interviews.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through <strong>{COMPANY.UNITS.CHETNA.NAME}</strong>, we ensure school
                  students build unshakeable foundations — preparing them not just for
                  board exams but for competitive tests like JEE and NEET that shape
                  their futures.
                </p>
              </div>
              <div className="bg-xnava-100 rounded-2xl p-8 lg:p-10 text-center">
                <div className="w-16 h-16 bg-xnava-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-xnava-900 mb-2">
                  Based in Lucknow
                </h4>
                <p className="text-xnava-700 leading-relaxed">
                  {COMPANY.ADDRESS.FULL}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What We Stand For"
            description="The principles that guide every decision we make."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {VALUES.map((value, index) => (
              <ScrollReveal key={value.title} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center h-full">
                  <div className="w-12 h-12 bg-xnava-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-xnava-600">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Badges ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal variant="slideUp">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <a href={`mailto:${COMPANY.EMAIL.ADMIN}`}>
                <Badge color="xnava" className="text-sm px-4 py-2 cursor-pointer hover:bg-xnava-200 transition-colors">
                  {COMPANY.EMAIL.ADMIN}
                </Badge>
              </a>
              <a href={`mailto:${COMPANY.EMAIL.HR}`}>
                <Badge color="xnava" className="text-sm px-4 py-2 cursor-pointer hover:bg-xnava-200 transition-colors">
                  {COMPANY.EMAIL.HR}
                </Badge>
              </a>
              <a href={`mailto:${COMPANY.EMAIL.INFO}`}>
                <Badge color="xnava" className="text-sm px-4 py-2 cursor-pointer hover:bg-xnava-200 transition-colors">
                  {COMPANY.EMAIL.INFO}
                </Badge>
              </a>
            </div>
            <Button to={ROUTES.CONTACT} variant="primary">
              Send Us a Message
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default XnavaAbout;