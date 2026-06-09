import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const CREDENTIALS = [
  { icon: '📋', title: 'Registered Partnership', desc: 'Legally registered under the Indian Partnership Act, 1932. Full compliance and transparency.' },
  { icon: '🏛️', title: 'MSME / Udyam Certified', desc: 'Registered under Ministry of MSME, Government of India. Recognised enterprise.' },
  { icon: '🧾', title: 'GST Registered', desc: 'Goods and Services Tax registered. All transactions compliant with Indian tax laws.' },
  { icon: '📍', title: 'Physical Presence', desc: 'Training center near Amity University, Lucknow. Visit us anytime during working hours.' },
];

const VALUES = [
  { icon: '⚡', title: 'Skill-First Approach', desc: 'Degrees open doors but skills build careers. Every program delivers real, employable skills — not just theory.' },
  { icon: '👨‍🏫', title: 'Mentorship Excellence', desc: `Mentors from ${COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.slice(0, 3).join(', ')} and more bring real-world experience to the classroom.` },
  { icon: '💰', title: 'Affordable Excellence', desc: 'Quality education must be accessible. Programs starting from just ₹1,500 — world-class training at honest prices.' },
  { icon: '🤝', title: 'Community First', desc: 'Based in Lucknow, building a thriving talent ecosystem — students, mentors, and industry partners together.' },
];

const XnavaAbout = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-xnava-950 via-gray-950 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-xnava-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-24">
          <SectionHeading
            eyebrow="About Us"
            eyebrowColor="xnava"
            title={META.ABOUT.TITLE}
            description="Registered Partnership Firm • MSME Certified • Based in Lucknow, India"
            align="center"
          />
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-gray-900 border-y border-gray-800 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CREDENTIALS.map((cred, i) => (
              <ScrollReveal key={cred.title} variant="fadeInUp" delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-3xl block mb-3">{cred.icon}</span>
                  <p className="text-white font-semibold text-sm mb-1">{cred.title}</p>
                  <p className="text-gray-500 text-xs">{cred.desc.split('.')[0]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom max-w-5xl">
          <ScrollReveal variant="fadeInUp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">From Lucknow, for India</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Founded near Amity University in Lucknow, {COMPANY.NAME} is a registered partnership firm and MSME-certified enterprise. We were born from a simple observation: students work incredibly hard for degrees, yet many still struggle to land jobs they deserve.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Through <strong className="text-techtrainx-400">{COMPANY.UNITS.TECHTRAINX.NAME}</strong>, we give engineering students real project experience, {COMPANY.UNITS.TECHTRAINX.DSA_PROBLEMS}+ DSA problems, and mentorship from professionals at {COMPANY.UNITS.TECHTRAINX.MENTORS_LIST.join(', ')}.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Through <strong className="text-chetna-400">{COMPANY.UNITS.CHETNA.FULL_NAME}</strong>, school students from Class 5 to 12 build unshakeable foundations for board exams, JEE, NEET, and NDA.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 lg:p-10 text-center">
                <div className="w-16 h-16 bg-xnava-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-2">Based in Lucknow</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{COMPANY.ADDRESS.FULL}</p>
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-2 text-left">
                  <p className="text-sm text-gray-300">📋 Registered Partnership Firm</p>
                  <p className="text-sm text-gray-300">🏛️ MSME / Udyam Registered</p>
                  <p className="text-sm text-gray-300">🧾 GST Compliant</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="What We Stand For" description="The principles that guide every decision we make." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} variant="fadeInUp" delay={i * 0.1}>
                <Card variant="dark" hover padding="lg" className="text-center h-full">
                  <span className="text-4xl block mb-4">{value.icon}</span>
                  <CardTitle className="text-white">{value.title}</CardTitle>
                  <CardDescription>{value.desc}</CardDescription>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Badges */}
      <section className="section-padding-sm bg-gray-950">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal variant="fadeInUp">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Get in Touch</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[COMPANY.EMAIL.ADMIN, COMPANY.EMAIL.HR, COMPANY.EMAIL.INFO].map((email) => (
                <a key={email} href={`mailto:${email}`}>
                  <Badge color="xnava" size="md" className="cursor-pointer hover:bg-xnava-500/20 transition-colors">{email}</Badge>
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mb-8">📞 {COMPANY.UNITS.TECHTRAINX.PHONE} &nbsp;|&nbsp; 📍 {COMPANY.ADDRESS.CITY}, {COMPANY.ADDRESS.STATE}</p>
            <Button to={ROUTES.CONTACT} variant="primary" size="lg">Send Us a Message</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default XnavaAbout;