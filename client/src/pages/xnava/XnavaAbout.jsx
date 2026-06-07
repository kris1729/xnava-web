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
    icon: '⚡',
  },
  {
    title: 'Mentorship Excellence',
    description: `Mentors from ${COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.slice(0, 3).join(', ')} and more bring real-world experience to the classroom.`,
    icon: '👨‍🏫',
  },
  {
    title: 'Affordable Excellence',
    description: 'Quality education must be accessible. Programs starting from just ₹1,500 — world-class training at honest prices.',
    icon: '💰',
  },
  {
    title: 'Community First',
    description: 'Based in Lucknow, building a thriving talent ecosystem — students, mentors, and industry partners together.',
    icon: '🤝',
  },
];

const CREDENTIALS = [
  { label: 'Registered Partnership Firm', description: 'Legally registered under the Indian Partnership Act, 1932. Operating with full compliance and transparency.', icon: '📋' },
  { label: 'MSME Certified', description: 'Registered under the Ministry of Micro, Small and Medium Enterprises, Government of India. Udyam registered enterprise.', icon: '🏛️' },
  { label: 'GST Registered', description: 'Goods and Services Tax registered. All transactions are compliant with Indian tax laws.', icon: '🧾' },
  { label: 'Physical Presence', description: 'Not just online — we have a physical training center near Amity University, Lucknow. Visit us anytime.', icon: '📍' },
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
            description={`A Registered Partnership Firm • MSME Certified • Based in Lucknow, India`}
            align="center"
          />
        </div>
      </section>

      {/* ── Credentials Bar ── */}
      <section className="py-10 bg-xnava-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDENTIALS.map((cred, i) => (
              <div key={cred.label} className="text-center">
                <span className="text-2xl block mb-2">{cred.icon}</span>
                <p className="text-white font-semibold text-sm mb-1">{cred.label}</p>
                <p className="text-xnava-400 text-xs">{cred.description.split('.')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ScrollReveal variant="slideUp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  From Lucknow, for India
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded near Amity University in Lucknow, {COMPANY.NAME} is a registered
                  partnership firm and MSME-certified enterprise. We were born from a simple
                  observation: students work incredibly hard for degrees, yet many still struggle
                  to land jobs they deserve. The gap between college curriculum and industry
                  expectations was too wide.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We set out to close that gap. Through{' '}
                  <strong>{COMPANY.UNITS.TECHTRAINX.NAME}</strong>, we give engineering
                  students real project experience, {COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems,
                  and mentorship from professionals at {COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')} —
                  everything needed to crack product company interviews.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through <strong>{COMPANY.UNITS.CHETNA.FULL_NAME}</strong>, we ensure school
                  students from Class 5 to 12 build unshakeable foundations — preparing them not just
                  for board exams but for competitive tests like JEE, NEET, and NDA that shape their futures.
                </p>
              </div>
              <div className="bg-xnava-100 rounded-2xl p-8 lg:p-10 text-center">
                <div className="w-16 h-16 bg-xnava-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-xnava-900 mb-2">Based in Lucknow</h4>
                <p className="text-xnava-700 leading-relaxed">{COMPANY.ADDRESS.FULL}</p>
                <div className="mt-6 pt-6 border-t border-xnava-200 space-y-2">
                  <p className="text-sm text-xnava-600 font-medium">📋 Registered Partnership Firm</p>
                  <p className="text-sm text-xnava-600 font-medium">🏛️ MSME / Udyam Registered</p>
                  <p className="text-sm text-xnava-600 font-medium">🧾 GST Compliant</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Credentials Detail Cards ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Trust & Credibility"
            description="We are not just a website. We are a legally registered, MSME-certified Indian company with a physical presence."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {CREDENTIALS.map((cred, index) => (
              <ScrollReveal key={cred.label} variant="slideUp" delay={index * 0.1}>
                <Card hover padding="lg" className="text-center h-full">
                  <span className="text-4xl block mb-4">{cred.icon}</span>
                  <CardTitle>{cred.label}</CardTitle>
                  <CardDescription>{cred.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-white">
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
                  <span className="text-4xl block mb-4">{value.icon}</span>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section-padding bg-xnava-50">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal variant="slideUp">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
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
            <p className="text-gray-600 text-sm mb-6">
              📞 {COMPANY.UNITS.TECHTRAINX.PHONE} &nbsp;|&nbsp; 📍 {COMPANY.ADDRESS.CITY}, {COMPANY.ADDRESS.STATE}
            </p>
            <Button to={ROUTES.CONTACT} variant="primary">Send Us a Message</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default XnavaAbout;